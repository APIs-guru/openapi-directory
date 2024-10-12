# Activation

Holds properties related to activation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**azure_registration_resource_identifier** | **str** | Azure registration resource identifier. | [optional] 
**display_name** | **str** | Name displayed for the product. | [optional] 
**expiration** | **str** | The activation expiration. | [optional] 
**marketplace_syndication_enabled** | **bool** | Value indicating whether the marketplace syndication feature is enabled. | [optional] 
**provisioning_state** | **str** | The provisioning state of the resource. | [optional] 
**usage_reporting_enabled** | **bool** | Value indicating whether the usage reporting feature is enabled. | [optional] 

## Example

```python
from openapi_client.models.activation import Activation

# TODO update the JSON string below
json = "{}"
# create an instance of Activation from a JSON string
activation_instance = Activation.from_json(json)
# print the JSON string representation of the object
print(Activation.to_json())

# convert the object into a dict
activation_dict = activation_instance.to_dict()
# create an instance of Activation from a dict
activation_from_dict = Activation.from_dict(activation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


