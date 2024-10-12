# DeferredItemReplacement

Information related to deferred item replacement.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_id** | **str** | The product_id going to replace the existing product_id. | [optional] 

## Example

```python
from openapi_client.models.deferred_item_replacement import DeferredItemReplacement

# TODO update the JSON string below
json = "{}"
# create an instance of DeferredItemReplacement from a JSON string
deferred_item_replacement_instance = DeferredItemReplacement.from_json(json)
# print the JSON string representation of the object
print(DeferredItemReplacement.to_json())

# convert the object into a dict
deferred_item_replacement_dict = deferred_item_replacement_instance.to_dict()
# create an instance of DeferredItemReplacement from a dict
deferred_item_replacement_from_dict = DeferredItemReplacement.from_dict(deferred_item_replacement_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


