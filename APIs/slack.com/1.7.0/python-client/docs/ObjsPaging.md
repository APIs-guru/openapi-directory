# ObjsPaging


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** |  | [optional] 
**page** | **int** |  | 
**pages** | **int** |  | [optional] 
**per_page** | **int** |  | [optional] 
**spill** | **int** |  | [optional] 
**total** | **int** |  | 

## Example

```python
from openapi_client.models.objs_paging import ObjsPaging

# TODO update the JSON string below
json = "{}"
# create an instance of ObjsPaging from a JSON string
objs_paging_instance = ObjsPaging.from_json(json)
# print the JSON string representation of the object
print(ObjsPaging.to_json())

# convert the object into a dict
objs_paging_dict = objs_paging_instance.to_dict()
# create an instance of ObjsPaging from a dict
objs_paging_from_dict = ObjsPaging.from_dict(objs_paging_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


