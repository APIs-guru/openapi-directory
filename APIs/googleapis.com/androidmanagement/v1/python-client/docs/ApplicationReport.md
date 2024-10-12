# ApplicationReport

Information reported about an installed app.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_source** | **str** | The source of the package. | [optional] 
**display_name** | **str** | The display name of the app. | [optional] 
**events** | [**List[ApplicationEvent]**](ApplicationEvent.md) | The list of app events which have occurred in the last 30 hours. | [optional] 
**installer_package_name** | **str** | The package name of the app that installed this app. | [optional] 
**keyed_app_states** | [**List[KeyedAppState]**](KeyedAppState.md) | List of keyed app states reported by the app. | [optional] 
**package_name** | **str** | Package name of the app. | [optional] 
**package_sha256_hash** | **str** | The SHA-256 hash of the app&#39;s APK file, which can be used to verify the app hasn&#39;t been modified. Each byte of the hash value is represented as a two-digit hexadecimal number. | [optional] 
**signing_key_cert_fingerprints** | **List[str]** | The SHA-1 hash of each android.content.pm.Signature (https://developer.android.com/reference/android/content/pm/Signature.html) associated with the app package. Each byte of each hash value is represented as a two-digit hexadecimal number. | [optional] 
**state** | **str** | Application state. | [optional] 
**user_facing_type** | **str** | Whether the app is user facing. | [optional] 
**version_code** | **int** | The app version code, which can be used to determine whether one version is more recent than another. | [optional] 
**version_name** | **str** | The app version as displayed to the user. | [optional] 

## Example

```python
from openapi_client.models.application_report import ApplicationReport

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationReport from a JSON string
application_report_instance = ApplicationReport.from_json(json)
# print the JSON string representation of the object
print(ApplicationReport.to_json())

# convert the object into a dict
application_report_dict = application_report_instance.to_dict()
# create an instance of ApplicationReport from a dict
application_report_from_dict = ApplicationReport.from_dict(application_report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


