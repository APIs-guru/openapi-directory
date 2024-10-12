# MethodMap

Deployment Manager will call these methods during the events of creation/deletion/update/get/setIamPolicy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create** | **str** | The action identifier for the create method to be used for this collection | [optional] 
**delete** | **str** | The action identifier for the delete method to be used for this collection | [optional] 
**get** | **str** | The action identifier for the get method to be used for this collection | [optional] 
**set_iam_policy** | **str** | The action identifier for the setIamPolicy method to be used for this collection | [optional] 
**update** | **str** | The action identifier for the update method to be used for this collection | [optional] 

## Example

```python
from openapi_client.models.method_map import MethodMap

# TODO update the JSON string below
json = "{}"
# create an instance of MethodMap from a JSON string
method_map_instance = MethodMap.from_json(json)
# print the JSON string representation of the object
print(MethodMap.to_json())

# convert the object into a dict
method_map_dict = method_map_instance.to_dict()
# create an instance of MethodMap from a dict
method_map_from_dict = MethodMap.from_dict(method_map_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


