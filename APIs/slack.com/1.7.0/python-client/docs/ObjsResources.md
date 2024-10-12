# ObjsResources


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**excluded_ids** | **List[List[ObjsResourcesExcludedIdsInnerInner]]** |  | [optional] 
**ids** | **List[List[ObjsResourcesExcludedIdsInnerInner]]** |  | 
**wildcard** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.objs_resources import ObjsResources

# TODO update the JSON string below
json = "{}"
# create an instance of ObjsResources from a JSON string
objs_resources_instance = ObjsResources.from_json(json)
# print the JSON string representation of the object
print(ObjsResources.to_json())

# convert the object into a dict
objs_resources_dict = objs_resources_instance.to_dict()
# create an instance of ObjsResources from a dict
objs_resources_from_dict = ObjsResources.from_dict(objs_resources_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


