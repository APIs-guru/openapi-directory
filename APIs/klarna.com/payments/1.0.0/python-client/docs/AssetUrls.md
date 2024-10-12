# AssetUrls


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**descriptive** | **str** | URL of the descriptive asset. Using this dynamic asset will make sure that any copy update of Klarna will automatically be propagated. | [optional] 
**standard** | **str** | URL of the standard asset. Using this dynamic asset will make sure that any copy update of Klarna will automatically be propagated. | [optional] 

## Example

```python
from openapi_client.models.asset_urls import AssetUrls

# TODO update the JSON string below
json = "{}"
# create an instance of AssetUrls from a JSON string
asset_urls_instance = AssetUrls.from_json(json)
# print the JSON string representation of the object
print(AssetUrls.to_json())

# convert the object into a dict
asset_urls_dict = asset_urls_instance.to_dict()
# create an instance of AssetUrls from a dict
asset_urls_from_dict = AssetUrls.from_dict(asset_urls_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


