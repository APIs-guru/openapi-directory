# ContentHash

Definition of the runbook property type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**algorithm** | **str** | Gets or sets the content hash algorithm used to hash the content. | 
**value** | **str** | Gets or sets expected hash value of the content. | 

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


