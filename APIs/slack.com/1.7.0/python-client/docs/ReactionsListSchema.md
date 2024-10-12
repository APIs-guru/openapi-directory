# ReactionsListSchema

Schema for successful response from reactions.list method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | **List[List[ReactionsListSchemaItemsInnerInner]]** |  | 
**ok** | **bool** |  | 
**paging** | [**ObjsPaging**](ObjsPaging.md) |  | [optional] 
**response_metadata** | [**List[ObjsResponseMetadataInner]**](ObjsResponseMetadataInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.reactions_list_schema import ReactionsListSchema

# TODO update the JSON string below
json = "{}"
# create an instance of ReactionsListSchema from a JSON string
reactions_list_schema_instance = ReactionsListSchema.from_json(json)
# print the JSON string representation of the object
print(ReactionsListSchema.to_json())

# convert the object into a dict
reactions_list_schema_dict = reactions_list_schema_instance.to_dict()
# create an instance of ReactionsListSchema from a dict
reactions_list_schema_from_dict = ReactionsListSchema.from_dict(reactions_list_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


