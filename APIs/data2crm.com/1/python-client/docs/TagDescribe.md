# TagDescribe


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity** | **str** | Entity | [optional] 
**var_schema** | [**SchemaDescribe**](SchemaDescribe.md) |  | [optional] 

## Example

```python
from openapi_client.models.tag_describe import TagDescribe

# TODO update the JSON string below
json = "{}"
# create an instance of TagDescribe from a JSON string
tag_describe_instance = TagDescribe.from_json(json)
# print the JSON string representation of the object
print(TagDescribe.to_json())

# convert the object into a dict
tag_describe_dict = tag_describe_instance.to_dict()
# create an instance of TagDescribe from a dict
tag_describe_from_dict = TagDescribe.from_dict(tag_describe_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


