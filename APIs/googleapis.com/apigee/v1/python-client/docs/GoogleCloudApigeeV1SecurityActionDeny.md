# GoogleCloudApigeeV1SecurityActionDeny

Message that should be set in case of a Deny Action.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**response_code** | **int** | Optional. The HTTP response code if the Action &#x3D; DENY. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_security_action_deny import GoogleCloudApigeeV1SecurityActionDeny

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1SecurityActionDeny from a JSON string
google_cloud_apigee_v1_security_action_deny_instance = GoogleCloudApigeeV1SecurityActionDeny.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1SecurityActionDeny.to_json())

# convert the object into a dict
google_cloud_apigee_v1_security_action_deny_dict = google_cloud_apigee_v1_security_action_deny_instance.to_dict()
# create an instance of GoogleCloudApigeeV1SecurityActionDeny from a dict
google_cloud_apigee_v1_security_action_deny_from_dict = GoogleCloudApigeeV1SecurityActionDeny.from_dict(google_cloud_apigee_v1_security_action_deny_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


