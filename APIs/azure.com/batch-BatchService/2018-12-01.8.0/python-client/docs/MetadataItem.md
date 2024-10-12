# MetadataItem

The Batch service does not assign any meaning to this metadata; it is solely for the use of user code.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**value** | **str** |  | 

## Example

```python
from openapi_client.models.metadata_item import MetadataItem

# TODO update the JSON string below
json = "{}"
# create an instance of MetadataItem from a JSON string
metadata_item_instance = MetadataItem.from_json(json)
# print the JSON string representation of the object
print(MetadataItem.to_json())

# convert the object into a dict
metadata_item_dict = metadata_item_instance.to_dict()
# create an instance of MetadataItem from a dict
metadata_item_from_dict = MetadataItem.from_dict(metadata_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


