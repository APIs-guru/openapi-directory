# CollectionInfo

Metadata about collection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_entries** | **int** | Count of total objects in the current result set before pagination parameters (limit, offset) are applied.  | [optional] 

## Example

```python
from openapi_client.models.collection_info import CollectionInfo

# TODO update the JSON string below
json = "{}"
# create an instance of CollectionInfo from a JSON string
collection_info_instance = CollectionInfo.from_json(json)
# print the JSON string representation of the object
print(CollectionInfo.to_json())

# convert the object into a dict
collection_info_dict = collection_info_instance.to_dict()
# create an instance of CollectionInfo from a dict
collection_info_from_dict = CollectionInfo.from_dict(collection_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


