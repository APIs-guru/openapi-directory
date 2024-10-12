# TesterAppWithReleaseResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the app | [optional] 
**display_name** | **str** | The app&#39;s display name. | [optional] 
**icon_url** | **str** | A URL to the app&#39;s icon. | [optional] 
**id** | **str** | The unique ID (UUID) of the app | [optional] 
**name** | **str** | The app&#39;s name. | [optional] 
**os** | **str** | The app&#39;s os. | [optional] 
**owner** | [**TesterAppWithReleaseResponseOwner**](TesterAppWithReleaseResponseOwner.md) |  | [optional] 
**release** | [**TesterAppWithReleaseResponseRelease**](TesterAppWithReleaseResponseRelease.md) |  | [optional] 

## Example

```python
from openapi_client.models.tester_app_with_release_response import TesterAppWithReleaseResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TesterAppWithReleaseResponse from a JSON string
tester_app_with_release_response_instance = TesterAppWithReleaseResponse.from_json(json)
# print the JSON string representation of the object
print(TesterAppWithReleaseResponse.to_json())

# convert the object into a dict
tester_app_with_release_response_dict = tester_app_with_release_response_instance.to_dict()
# create an instance of TesterAppWithReleaseResponse from a dict
tester_app_with_release_response_from_dict = TesterAppWithReleaseResponse.from_dict(tester_app_with_release_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


