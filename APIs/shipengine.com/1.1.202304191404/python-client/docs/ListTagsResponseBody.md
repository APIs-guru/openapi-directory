# ListTagsResponseBody

Response body from a successful GET /tags API call

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | [**List[Tag]**](Tag.md) | The array of tags returned by the API call | [optional] 

## Example

```python
from openapi_client.models.list_tags_response_body import ListTagsResponseBody

# TODO update the JSON string below
json = "{}"
# create an instance of ListTagsResponseBody from a JSON string
list_tags_response_body_instance = ListTagsResponseBody.from_json(json)
# print the JSON string representation of the object
print(ListTagsResponseBody.to_json())

# convert the object into a dict
list_tags_response_body_dict = list_tags_response_body_instance.to_dict()
# create an instance of ListTagsResponseBody from a dict
list_tags_response_body_from_dict = ListTagsResponseBody.from_dict(list_tags_response_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


