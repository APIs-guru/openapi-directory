# DeepLink

Contains information about a landing page deep link.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_url** | **str** | The URL of the mobile app being linked to. | [optional] 
**fallback_url** | **str** | The fallback URL. This URL will be served to users who do not have the mobile app installed. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#deepLink\&quot;. | [optional] 
**mobile_app** | [**MobileApp**](MobileApp.md) |  | [optional] 
**remarketing_list_ids** | **List[str]** | Ads served to users on these remarketing lists will use this deep link. Applicable when mobileApp.directory is APPLE_APP_STORE. | [optional] 

## Example

```python
from openapi_client.models.deep_link import DeepLink

# TODO update the JSON string below
json = "{}"
# create an instance of DeepLink from a JSON string
deep_link_instance = DeepLink.from_json(json)
# print the JSON string representation of the object
print(DeepLink.to_json())

# convert the object into a dict
deep_link_dict = deep_link_instance.to_dict()
# create an instance of DeepLink from a dict
deep_link_from_dict = DeepLink.from_dict(deep_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


