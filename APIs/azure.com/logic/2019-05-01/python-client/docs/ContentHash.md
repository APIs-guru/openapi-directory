# ContentHash

The content hash.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**algorithm** | **str** | The algorithm of the content hash. | [optional] 
**value** | **str** | The value of the content hash. | [optional] 

## Example

```python
from openapi_client.models.content_hash import ContentHash

# TODO update the JSON string below
json = "{}"
# create an instance of ContentHash from a JSON string
content_hash_instance = ContentHash.from_json(json)
# print the JSON string representation of the object
print(ContentHash.to_json())

# convert the object into a dict
content_hash_dict = content_hash_instance.to_dict()
# create an instance of ContentHash from a dict
content_hash_from_dict = ContentHash.from_dict(content_hash_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


