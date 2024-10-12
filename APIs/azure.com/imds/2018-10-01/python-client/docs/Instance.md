# Instance

This is the response from the Instance_GetMetadata operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compute** | [**Compute**](Compute.md) |  | [optional] 
**network** | [**Network**](Network.md) |  | [optional] 

## Example

```python
from openapi_client.models.instance import Instance

# TODO update the JSON string below
json = "{}"
# create an instance of Instance from a JSON string
instance_instance = Instance.from_json(json)
# print the JSON string representation of the object
print(Instance.to_json())

# convert the object into a dict
instance_dict = instance_instance.to_dict()
# create an instance of Instance from a dict
instance_from_dict = Instance.from_dict(instance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


