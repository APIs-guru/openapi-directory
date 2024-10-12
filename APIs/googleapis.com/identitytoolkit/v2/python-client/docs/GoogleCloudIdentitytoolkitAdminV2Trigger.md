# GoogleCloudIdentitytoolkitAdminV2Trigger

Synchronous Cloud Function with HTTP Trigger

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**function_uri** | **str** | HTTP URI trigger for the Cloud Function. | [optional] 
**update_time** | **str** | When the trigger was changed. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_identitytoolkit_admin_v2_trigger import GoogleCloudIdentitytoolkitAdminV2Trigger

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIdentitytoolkitAdminV2Trigger from a JSON string
google_cloud_identitytoolkit_admin_v2_trigger_instance = GoogleCloudIdentitytoolkitAdminV2Trigger.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIdentitytoolkitAdminV2Trigger.to_json())

# convert the object into a dict
google_cloud_identitytoolkit_admin_v2_trigger_dict = google_cloud_identitytoolkit_admin_v2_trigger_instance.to_dict()
# create an instance of GoogleCloudIdentitytoolkitAdminV2Trigger from a dict
google_cloud_identitytoolkit_admin_v2_trigger_from_dict = GoogleCloudIdentitytoolkitAdminV2Trigger.from_dict(google_cloud_identitytoolkit_admin_v2_trigger_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


