# ObjsResponseMetadataInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_cursor** | **str** |  | 
**messages** | **List[str]** |  | 
**warnings** | **List[str]** |  | 

## Example

```python
from openapi_client.models.objs_response_metadata_inner import ObjsResponseMetadataInner

# TODO update the JSON string below
json = "{}"
# create an instance of ObjsResponseMetadataInner from a JSON string
objs_response_metadata_inner_instance = ObjsResponseMetadataInner.from_json(json)
# print the JSON string representation of the object
print(ObjsResponseMetadataInner.to_json())

# convert the object into a dict
objs_response_metadata_inner_dict = objs_response_metadata_inner_instance.to_dict()
# create an instance of ObjsResponseMetadataInner from a dict
objs_response_metadata_inner_from_dict = ObjsResponseMetadataInner.from_dict(objs_response_metadata_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


