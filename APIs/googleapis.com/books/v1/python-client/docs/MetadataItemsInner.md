# MetadataItemsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**download_url** | **str** |  | [optional] 
**encrypted_key** | **str** |  | [optional] 
**language** | **str** |  | [optional] 
**size** | **str** |  | [optional] 
**version** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.metadata_items_inner import MetadataItemsInner

# TODO update the JSON string below
json = "{}"
# create an instance of MetadataItemsInner from a JSON string
metadata_items_inner_instance = MetadataItemsInner.from_json(json)
# print the JSON string representation of the object
print(MetadataItemsInner.to_json())

# convert the object into a dict
metadata_items_inner_dict = metadata_items_inner_instance.to_dict()
# create an instance of MetadataItemsInner from a dict
metadata_items_inner_from_dict = MetadataItemsInner.from_dict(metadata_items_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


