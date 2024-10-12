# TagsResult

A resource listing all tags.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**TagProperties**](TagProperties.md) |  | [optional] 
**e_tag** | **str** | eTag of the resource. To handle concurrent update scenario, this field will be used to determine whether the user is updating the latest version or not. | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.tags_result import TagsResult

# TODO update the JSON string below
json = "{}"
# create an instance of TagsResult from a JSON string
tags_result_instance = TagsResult.from_json(json)
# print the JSON string representation of the object
print(TagsResult.to_json())

# convert the object into a dict
tags_result_dict = tags_result_instance.to_dict()
# create an instance of TagsResult from a dict
tags_result_from_dict = TagsResult.from_dict(tags_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


