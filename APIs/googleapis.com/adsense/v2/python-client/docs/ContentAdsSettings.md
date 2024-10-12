# ContentAdsSettings

Settings specific to content ads (AFC).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**size** | **str** | Required. Size of the ad unit. e.g. \&quot;728x90\&quot;, \&quot;1x3\&quot; (for responsive ad units). | [optional] 
**type** | **str** | Required. Type of the ad unit. | [optional] 

## Example

```python
from openapi_client.models.content_ads_settings import ContentAdsSettings

# TODO update the JSON string below
json = "{}"
# create an instance of ContentAdsSettings from a JSON string
content_ads_settings_instance = ContentAdsSettings.from_json(json)
# print the JSON string representation of the object
print(ContentAdsSettings.to_json())

# convert the object into a dict
content_ads_settings_dict = content_ads_settings_instance.to_dict()
# create an instance of ContentAdsSettings from a dict
content_ads_settings_from_dict = ContentAdsSettings.from_dict(content_ads_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


