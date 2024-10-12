# XamarinSDKBundle

The Xamarin SDK bundle

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current** | **bool** | If the SDK is latest stable | [optional] 
**mono_version** | **str** | The Mono version | [optional] 
**sdk_bundle** | **str** | The Xamarin SDK version | [optional] 
**stable** | **bool** | If the SDK is stable | [optional] 
**xcode_versions** | **List[str]** | Specific for iOS SDK. A list of Xcode versions supported by current SDK version | [optional] 

## Example

```python
from openapi_client.models.xamarin_sdk_bundle import XamarinSDKBundle

# TODO update the JSON string below
json = "{}"
# create an instance of XamarinSDKBundle from a JSON string
xamarin_sdk_bundle_instance = XamarinSDKBundle.from_json(json)
# print the JSON string representation of the object
print(XamarinSDKBundle.to_json())

# convert the object into a dict
xamarin_sdk_bundle_dict = xamarin_sdk_bundle_instance.to_dict()
# create an instance of XamarinSDKBundle from a dict
xamarin_sdk_bundle_from_dict = XamarinSDKBundle.from_dict(xamarin_sdk_bundle_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


