# TagCount

Tag count.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | Type of count. | [optional] 
**value** | **int** | Value of count. | [optional] 

## Example

```python
from openapi_client.models.tag_count import TagCount

# TODO update the JSON string below
json = "{}"
# create an instance of TagCount from a JSON string
tag_count_instance = TagCount.from_json(json)
# print the JSON string representation of the object
print(TagCount.to_json())

# convert the object into a dict
tag_count_dict = tag_count_instance.to_dict()
# create an instance of TagCount from a dict
tag_count_from_dict = TagCount.from_dict(tag_count_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


