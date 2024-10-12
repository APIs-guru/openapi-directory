# TesterAppWithReleaseResponseOwner

The information about the app's owner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**avatar_url** | **str** | The avatar URL of the owner | [optional] 
**display_name** | **str** | The owner&#39;s display name | [optional] 
**email** | **str** | The owner&#39;s email address | [optional] 
**id** | **str** | The unique id (UUID) of the owner | [optional] 
**name** | **str** | The unique name that used to identify the owner | [optional] 
**type** | **str** | The owner type. Can either be &#39;org&#39; or &#39;user&#39; | [optional] 

## Example

```python
from openapi_client.models.tester_app_with_release_response_owner import TesterAppWithReleaseResponseOwner

# TODO update the JSON string below
json = "{}"
# create an instance of TesterAppWithReleaseResponseOwner from a JSON string
tester_app_with_release_response_owner_instance = TesterAppWithReleaseResponseOwner.from_json(json)
# print the JSON string representation of the object
print(TesterAppWithReleaseResponseOwner.to_json())

# convert the object into a dict
tester_app_with_release_response_owner_dict = tester_app_with_release_response_owner_instance.to_dict()
# create an instance of TesterAppWithReleaseResponseOwner from a dict
tester_app_with_release_response_owner_from_dict = TesterAppWithReleaseResponseOwner.from_dict(tester_app_with_release_response_owner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


