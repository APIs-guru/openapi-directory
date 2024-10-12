# AssetFilter

An Asset Filter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**MediaFilterProperties**](MediaFilterProperties.md) |  | [optional] 
**id** | **str** | Fully qualified resource ID for the resource. | [optional] [readonly] 
**name** | **str** | The name of the resource. | [optional] [readonly] 
**type** | **str** | The type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.asset_filter import AssetFilter

# TODO update the JSON string below
json = "{}"
# create an instance of AssetFilter from a JSON string
asset_filter_instance = AssetFilter.from_json(json)
# print the JSON string representation of the object
print(AssetFilter.to_json())

# convert the object into a dict
asset_filter_dict = asset_filter_instance.to_dict()
# create an instance of AssetFilter from a dict
asset_filter_from_dict = AssetFilter.from_dict(asset_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


