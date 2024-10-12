# Item

Represents a single object that is an item in the search index, such as a file, folder, or a database record.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acl** | [**ItemAcl**](ItemAcl.md) |  | [optional] 
**content** | [**ItemContent**](ItemContent.md) |  | [optional] 
**item_type** | **str** | The type for this item. | [optional] 
**metadata** | [**ItemMetadata**](ItemMetadata.md) |  | [optional] 
**name** | **str** | The name of the Item. Format: datasources/{source_id}/items/{item_id} This is a required field. The maximum length is 1536 characters. | [optional] 
**payload** | **bytearray** | Additional state connector can store for this item. The maximum length is 10000 bytes. | [optional] 
**queue** | **str** | Queue this item belongs to. The maximum length is 100 characters. | [optional] 
**status** | [**ItemStatus**](ItemStatus.md) |  | [optional] 
**structured_data** | [**ItemStructuredData**](ItemStructuredData.md) |  | [optional] 
**version** | **bytearray** | Required. The indexing system stores the version from the datasource as a byte string and compares the Item version in the index to the version of the queued Item using lexical ordering. Cloud Search Indexing won&#39;t index or delete any queued item with a version value that is less than or equal to the version of the currently indexed item. The maximum length for this field is 1024 bytes. For information on how item version affects the deletion process, refer to [Handle revisions after manual deletes](https://developers.google.com/cloud-search/docs/guides/operations). | [optional] 

## Example

```python
from openapi_client.models.item import Item

# TODO update the JSON string below
json = "{}"
# create an instance of Item from a JSON string
item_instance = Item.from_json(json)
# print the JSON string representation of the object
print(Item.to_json())

# convert the object into a dict
item_dict = item_instance.to_dict()
# create an instance of Item from a dict
item_from_dict = Item.from_dict(item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


