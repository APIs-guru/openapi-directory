# StarsListSchema

Schema for successful response from stars.list method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | **List[List[StarsListSchemaItemsInnerInner]]** |  | 
**ok** | **bool** |  | 
**paging** | [**ObjsPaging**](ObjsPaging.md) |  | [optional] 

## Example

```python
from openapi_client.models.stars_list_schema import StarsListSchema

# TODO update the JSON string below
json = "{}"
# create an instance of StarsListSchema from a JSON string
stars_list_schema_instance = StarsListSchema.from_json(json)
# print the JSON string representation of the object
print(StarsListSchema.to_json())

# convert the object into a dict
stars_list_schema_dict = stars_list_schema_instance.to_dict()
# create an instance of StarsListSchema from a dict
stars_list_schema_from_dict = StarsListSchema.from_dict(stars_list_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


