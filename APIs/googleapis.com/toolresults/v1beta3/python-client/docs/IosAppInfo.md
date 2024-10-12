# IosAppInfo

iOS app information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the app. Required | [optional] 

## Example

```python
from openapi_client.models.ios_app_info import IosAppInfo

# TODO update the JSON string below
json = "{}"
# create an instance of IosAppInfo from a JSON string
ios_app_info_instance = IosAppInfo.from_json(json)
# print the JSON string representation of the object
print(IosAppInfo.to_json())

# convert the object into a dict
ios_app_info_dict = ios_app_info_instance.to_dict()
# create an instance of IosAppInfo from a dict
ios_app_info_from_dict = IosAppInfo.from_dict(ios_app_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


