# HashtagEntity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end** | **int** | Index (zero-based) at which position this entity ends.  The index is exclusive. | 
**start** | **int** | Index (zero-based) at which position this entity starts.  The index is inclusive. | 
**tag** | **str** | The text of the Hashtag. | 

## Example

```python
from openapi_client.models.hashtag_entity import HashtagEntity

# TODO update the JSON string below
json = "{}"
# create an instance of HashtagEntity from a JSON string
hashtag_entity_instance = HashtagEntity.from_json(json)
# print the JSON string representation of the object
print(HashtagEntity.to_json())

# convert the object into a dict
hashtag_entity_dict = hashtag_entity_instance.to_dict()
# create an instance of HashtagEntity from a dict
hashtag_entity_from_dict = HashtagEntity.from_dict(hashtag_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


