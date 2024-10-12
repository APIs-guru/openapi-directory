# BlobServiceItems


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[BlobServiceProperties]**](BlobServiceProperties.md) | List of blob services returned. | [optional] [readonly] 

## Example

```python
from openapi_client.models.blob_service_items import BlobServiceItems

# TODO update the JSON string below
json = "{}"
# create an instance of BlobServiceItems from a JSON string
blob_service_items_instance = BlobServiceItems.from_json(json)
# print the JSON string representation of the object
print(BlobServiceItems.to_json())

# convert the object into a dict
blob_service_items_dict = blob_service_items_instance.to_dict()
# create an instance of BlobServiceItems from a dict
blob_service_items_from_dict = BlobServiceItems.from_dict(blob_service_items_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


