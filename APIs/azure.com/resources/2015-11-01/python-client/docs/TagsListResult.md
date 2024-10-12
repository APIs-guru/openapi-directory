# TagsListResult

List of subscription tags.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Gets or sets the URL to get the next set of results. | 
**value** | [**List[TagDetails]**](TagDetails.md) | Gets or sets the list of tags. | [optional] 

## Example

```python
from openapi_client.models.tags_list_result import TagsListResult

# TODO update the JSON string below
json = "{}"
# create an instance of TagsListResult from a JSON string
tags_list_result_instance = TagsListResult.from_json(json)
# print the JSON string representation of the object
print(TagsListResult.to_json())

# convert the object into a dict
tags_list_result_dict = tags_list_result_instance.to_dict()
# create an instance of TagsListResult from a dict
tags_list_result_from_dict = TagsListResult.from_dict(tags_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


