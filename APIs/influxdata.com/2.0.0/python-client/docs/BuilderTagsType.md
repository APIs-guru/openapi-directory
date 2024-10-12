# BuilderTagsType


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregate_function_type** | [**BuilderAggregateFunctionType**](BuilderAggregateFunctionType.md) |  | [optional] 
**key** | **str** |  | [optional] 
**values** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.builder_tags_type import BuilderTagsType

# TODO update the JSON string below
json = "{}"
# create an instance of BuilderTagsType from a JSON string
builder_tags_type_instance = BuilderTagsType.from_json(json)
# print the JSON string representation of the object
print(BuilderTagsType.to_json())

# convert the object into a dict
builder_tags_type_dict = builder_tags_type_instance.to_dict()
# create an instance of BuilderTagsType from a dict
builder_tags_type_from_dict = BuilderTagsType.from_dict(builder_tags_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


