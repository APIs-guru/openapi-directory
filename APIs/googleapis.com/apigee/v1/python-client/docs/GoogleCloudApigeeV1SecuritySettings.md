# GoogleCloudApigeeV1SecuritySettings

SecuritySettings reflects the current state of the SecuritySettings feature.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ml_retraining_feedback_enabled** | **bool** | Optional. If true the user consents to the use of ML models for Abuse detection. | [optional] 
**name** | **str** | Identifier. Full resource name is always &#x60;organizations/{org}/securitySettings&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_security_settings import GoogleCloudApigeeV1SecuritySettings

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1SecuritySettings from a JSON string
google_cloud_apigee_v1_security_settings_instance = GoogleCloudApigeeV1SecuritySettings.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1SecuritySettings.to_json())

# convert the object into a dict
google_cloud_apigee_v1_security_settings_dict = google_cloud_apigee_v1_security_settings_instance.to_dict()
# create an instance of GoogleCloudApigeeV1SecuritySettings from a dict
google_cloud_apigee_v1_security_settings_from_dict = GoogleCloudApigeeV1SecuritySettings.from_dict(google_cloud_apigee_v1_security_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


