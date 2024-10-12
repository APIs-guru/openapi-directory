# VnetValidationFailureDetails

A class that describes the reason for a validation failure.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | VnetValidationFailureDetails resource specific properties | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**name** | **str** | Resource Name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.vnet_validation_failure_details import VnetValidationFailureDetails

# TODO update the JSON string below
json = "{}"
# create an instance of VnetValidationFailureDetails from a JSON string
vnet_validation_failure_details_instance = VnetValidationFailureDetails.from_json(json)
# print the JSON string representation of the object
print(VnetValidationFailureDetails.to_json())

# convert the object into a dict
vnet_validation_failure_details_dict = vnet_validation_failure_details_instance.to_dict()
# create an instance of VnetValidationFailureDetails from a dict
vnet_validation_failure_details_from_dict = VnetValidationFailureDetails.from_dict(vnet_validation_failure_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


