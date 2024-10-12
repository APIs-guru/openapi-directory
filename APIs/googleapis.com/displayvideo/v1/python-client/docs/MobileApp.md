# MobileApp

A mobile app promoted by a mobile app install line item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_id** | **str** | Required. The ID of the app provided by the platform store. Android apps are identified by the bundle ID used by Android&#39;s Play store, such as &#x60;com.google.android.gm&#x60;. iOS apps are identified by a nine-digit app ID used by Apple&#39;s App store, such as &#x60;422689480&#x60;. | [optional] 
**display_name** | **str** | Output only. The app name. | [optional] [readonly] 
**platform** | **str** | Output only. The app platform. | [optional] [readonly] 
**publisher** | **str** | Output only. The app publisher. | [optional] [readonly] 

## Example

```python
from openapi_client.models.mobile_app import MobileApp

# TODO update the JSON string below
json = "{}"
# create an instance of MobileApp from a JSON string
mobile_app_instance = MobileApp.from_json(json)
# print the JSON string representation of the object
print(MobileApp.to_json())

# convert the object into a dict
mobile_app_dict = mobile_app_instance.to_dict()
# create an instance of MobileApp from a dict
mobile_app_from_dict = MobileApp.from_dict(mobile_app_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


