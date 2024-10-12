# GoogleChecksAccountV1alphaApp

Represents an app in Checks.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The resource name of the app. Example: &#x60;accounts/123/apps/456&#x60; | [optional] 
**title** | **str** | The app&#39;s title. | [optional] 

## Example

```python
from openapi_client.models.google_checks_account_v1alpha_app import GoogleChecksAccountV1alphaApp

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChecksAccountV1alphaApp from a JSON string
google_checks_account_v1alpha_app_instance = GoogleChecksAccountV1alphaApp.from_json(json)
# print the JSON string representation of the object
print(GoogleChecksAccountV1alphaApp.to_json())

# convert the object into a dict
google_checks_account_v1alpha_app_dict = google_checks_account_v1alpha_app_instance.to_dict()
# create an instance of GoogleChecksAccountV1alphaApp from a dict
google_checks_account_v1alpha_app_from_dict = GoogleChecksAccountV1alphaApp.from_dict(google_checks_account_v1alpha_app_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


