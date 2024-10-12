# HashtagFields

Represent the portion of text recognized as a Hashtag, and its start and end position within the text.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tag** | **str** | The text of the Hashtag. | 

## Example

```python
from openapi_client.models.hashtag_fields import HashtagFields

# TODO update the JSON string below
json = "{}"
# create an instance of HashtagFields from a JSON string
hashtag_fields_instance = HashtagFields.from_json(json)
# print the JSON string representation of the object
print(HashtagFields.to_json())

# convert the object into a dict
hashtag_fields_dict = hashtag_fields_instance.to_dict()
# create an instance of HashtagFields from a dict
hashtag_fields_from_dict = HashtagFields.from_dict(hashtag_fields_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


