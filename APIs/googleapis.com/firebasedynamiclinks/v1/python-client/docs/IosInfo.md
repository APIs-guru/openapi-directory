# IosInfo

iOS related attributes to the Dynamic Link..

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ios_app_store_id** | **str** | iOS App Store ID. | [optional] 
**ios_bundle_id** | **str** | iOS bundle ID of the app. | [optional] 
**ios_custom_scheme** | **str** | Custom (destination) scheme to use for iOS. By default, we’ll use the bundle ID as the custom scheme. Developer can override this behavior using this param. | [optional] 
**ios_fallback_link** | **str** | Link to open on iOS if the app is not installed. | [optional] 
**ios_ipad_bundle_id** | **str** | iPad bundle ID of the app. | [optional] 
**ios_ipad_fallback_link** | **str** | If specified, this overrides the ios_fallback_link value on iPads. | [optional] 
**ios_minimum_version** | **str** | iOS minimum version. | [optional] 

## Example

```python
from openapi_client.models.ios_info import IosInfo

# TODO update the JSON string below
json = "{}"
# create an instance of IosInfo from a JSON string
ios_info_instance = IosInfo.from_json(json)
# print the JSON string representation of the object
print(IosInfo.to_json())

# convert the object into a dict
ios_info_dict = ios_info_instance.to_dict()
# create an instance of IosInfo from a dict
ios_info_from_dict = IosInfo.from_dict(ios_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


