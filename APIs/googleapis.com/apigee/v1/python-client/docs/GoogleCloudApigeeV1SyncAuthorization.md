# GoogleCloudApigeeV1SyncAuthorization


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **bytearray** | Entity tag (ETag) used for optimistic concurrency control as a way to help prevent simultaneous updates from overwriting each other. For example, when you call [getSyncAuthorization](organizations/getSyncAuthorization) an ETag is returned in the response. Pass that ETag when calling the [setSyncAuthorization](organizations/setSyncAuthorization) to ensure that you are updating the correct version. If you don&#39;t pass the ETag in the call to &#x60;setSyncAuthorization&#x60;, then the existing authorization is overwritten indiscriminately. **Note**: We strongly recommend that you use the ETag in the read-modify-write cycle to avoid race conditions. | [optional] 
**identities** | **List[str]** | Required. Array of service accounts to grant access to control plane resources, each specified using the following format: &#x60;serviceAccount:&#x60; service-account-name. The service-account-name is formatted like an email address. For example: &#x60;my-synchronizer-manager-service_account@my_project_id.iam.gserviceaccount.com&#x60; You might specify multiple service accounts, for example, if you have multiple environments and wish to assign a unique service account to each one. The service accounts must have **Apigee Synchronizer Manager** role. See also [Create service accounts](https://cloud.google.com/apigee/docs/hybrid/latest/sa-about#create-the-service-accounts). | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_sync_authorization import GoogleCloudApigeeV1SyncAuthorization

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1SyncAuthorization from a JSON string
google_cloud_apigee_v1_sync_authorization_instance = GoogleCloudApigeeV1SyncAuthorization.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1SyncAuthorization.to_json())

# convert the object into a dict
google_cloud_apigee_v1_sync_authorization_dict = google_cloud_apigee_v1_sync_authorization_instance.to_dict()
# create an instance of GoogleCloudApigeeV1SyncAuthorization from a dict
google_cloud_apigee_v1_sync_authorization_from_dict = GoogleCloudApigeeV1SyncAuthorization.from_dict(google_cloud_apigee_v1_sync_authorization_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


