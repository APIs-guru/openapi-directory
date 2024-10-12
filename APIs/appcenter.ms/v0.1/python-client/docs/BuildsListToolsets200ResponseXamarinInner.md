# BuildsListToolsets200ResponseXamarinInner

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
from openapi_client.models.builds_list_toolsets200_response_xamarin_inner import BuildsListToolsets200ResponseXamarinInner

# TODO update the JSON string below
json = "{}"
# create an instance of BuildsListToolsets200ResponseXamarinInner from a JSON string
builds_list_toolsets200_response_xamarin_inner_instance = BuildsListToolsets200ResponseXamarinInner.from_json(json)
# print the JSON string representation of the object
print(BuildsListToolsets200ResponseXamarinInner.to_json())

# convert the object into a dict
builds_list_toolsets200_response_xamarin_inner_dict = builds_list_toolsets200_response_xamarin_inner_instance.to_dict()
# create an instance of BuildsListToolsets200ResponseXamarinInner from a dict
builds_list_toolsets200_response_xamarin_inner_from_dict = BuildsListToolsets200ResponseXamarinInner.from_dict(builds_list_toolsets200_response_xamarin_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


