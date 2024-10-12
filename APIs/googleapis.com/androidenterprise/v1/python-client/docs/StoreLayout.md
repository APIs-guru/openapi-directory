# StoreLayout

General setting for the managed Google Play store layout, currently only specifying the page to display the first time the store is opened.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**homepage_id** | **str** | The ID of the store page to be used as the homepage. The homepage is the first page shown in the managed Google Play Store. Not specifying a homepage is equivalent to setting the store layout type to \&quot;basic\&quot;. | [optional] 
**store_layout_type** | **str** | The store layout type. By default, this value is set to \&quot;basic\&quot; if the homepageId field is not set, and to \&quot;custom\&quot; otherwise. If set to \&quot;basic\&quot;, the layout will consist of all approved apps that have been whitelisted for the user. | [optional] 

## Example

```python
from openapi_client.models.store_layout import StoreLayout

# TODO update the JSON string below
json = "{}"
# create an instance of StoreLayout from a JSON string
store_layout_instance = StoreLayout.from_json(json)
# print the JSON string representation of the object
print(StoreLayout.to_json())

# convert the object into a dict
store_layout_dict = store_layout_instance.to_dict()
# create an instance of StoreLayout from a dict
store_layout_from_dict = StoreLayout.from_dict(store_layout_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


