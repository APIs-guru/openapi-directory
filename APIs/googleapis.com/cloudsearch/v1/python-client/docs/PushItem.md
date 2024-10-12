# PushItem

Represents an item to be pushed to the indexing queue.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_hash** | **str** | Content hash of the item according to the repository. If specified, this is used to determine how to modify this item&#39;s status. Setting this field and the type field results in argument error. The maximum length is 2048 characters. | [optional] 
**metadata_hash** | **str** | The metadata hash of the item according to the repository. If specified, this is used to determine how to modify this item&#39;s status. Setting this field and the type field results in argument error. The maximum length is 2048 characters. | [optional] 
**payload** | **bytearray** | Provides additional document state information for the connector, such as an alternate repository ID and other metadata. The maximum length is 8192 bytes. | [optional] 
**queue** | **str** | Queue to which this item belongs. The &#x60;default&#x60; queue is chosen if this field is not specified. The maximum length is 512 characters. | [optional] 
**repository_error** | [**RepositoryError**](RepositoryError.md) |  | [optional] 
**structured_data_hash** | **str** | Structured data hash of the item according to the repository. If specified, this is used to determine how to modify this item&#39;s status. Setting this field and the type field results in argument error. The maximum length is 2048 characters. | [optional] 
**type** | **str** | The type of the push operation that defines the push behavior. | [optional] 

## Example

```python
from openapi_client.models.push_item import PushItem

# TODO update the JSON string below
json = "{}"
# create an instance of PushItem from a JSON string
push_item_instance = PushItem.from_json(json)
# print the JSON string representation of the object
print(PushItem.to_json())

# convert the object into a dict
push_item_dict = push_item_instance.to_dict()
# create an instance of PushItem from a dict
push_item_from_dict = PushItem.from_dict(push_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


