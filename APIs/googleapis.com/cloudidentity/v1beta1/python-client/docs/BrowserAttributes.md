# BrowserAttributes

Contains information about browser profiles reported by the Endpoint Verification extension.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chrome_browser_info** | [**BrowserInfo**](BrowserInfo.md) |  | [optional] 
**chrome_profile_id** | **str** | Chrome profile ID that is exposed by the Chrome API. It is unique for each device. | [optional] 
**last_profile_sync_time** | **str** | Timestamp in milliseconds since Epoch when the profile/gcm id was last synced. | [optional] 

## Example

```python
from openapi_client.models.browser_attributes import BrowserAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of BrowserAttributes from a JSON string
browser_attributes_instance = BrowserAttributes.from_json(json)
# print the JSON string representation of the object
print(BrowserAttributes.to_json())

# convert the object into a dict
browser_attributes_dict = browser_attributes_instance.to_dict()
# create an instance of BrowserAttributes from a dict
browser_attributes_from_dict = BrowserAttributes.from_dict(browser_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


