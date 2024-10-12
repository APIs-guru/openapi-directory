# ActivationResource

Published activation resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**Activation**](Activation.md) |  | [optional] 
**id** | **str** | URI of the resource. | [optional] [readonly] 
**location** | **str** | Location of the resource | [optional] [readonly] 
**name** | **str** | Name of the resource. | [optional] [readonly] 
**tags** | **Dict[str, str]** | List of key value pairs. | [optional] [readonly] 
**type** | **str** | Type of resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.activation_resource import ActivationResource

# TODO update the JSON string below
json = "{}"
# create an instance of ActivationResource from a JSON string
activation_resource_instance = ActivationResource.from_json(json)
# print the JSON string representation of the object
print(ActivationResource.to_json())

# convert the object into a dict
activation_resource_dict = activation_resource_instance.to_dict()
# create an instance of ActivationResource from a dict
activation_resource_from_dict = ActivationResource.from_dict(activation_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


