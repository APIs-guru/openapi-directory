# GoogleCloudAssuredworkloadsV1MutatePartnerPermissionsRequest

Request for updating permission settings for a partner workload.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | Optional. The etag of the workload. If this is provided, it must match the server&#39;s etag. | [optional] 
**partner_permissions** | [**GoogleCloudAssuredworkloadsV1WorkloadPartnerPermissions**](GoogleCloudAssuredworkloadsV1WorkloadPartnerPermissions.md) |  | [optional] 
**update_mask** | **str** | Required. The list of fields to be updated. E.g. update_mask { paths: \&quot;partner_permissions.data_logs_viewer\&quot;} | [optional] 

## Example

```python
from openapi_client.models.google_cloud_assuredworkloads_v1_mutate_partner_permissions_request import GoogleCloudAssuredworkloadsV1MutatePartnerPermissionsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAssuredworkloadsV1MutatePartnerPermissionsRequest from a JSON string
google_cloud_assuredworkloads_v1_mutate_partner_permissions_request_instance = GoogleCloudAssuredworkloadsV1MutatePartnerPermissionsRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAssuredworkloadsV1MutatePartnerPermissionsRequest.to_json())

# convert the object into a dict
google_cloud_assuredworkloads_v1_mutate_partner_permissions_request_dict = google_cloud_assuredworkloads_v1_mutate_partner_permissions_request_instance.to_dict()
# create an instance of GoogleCloudAssuredworkloadsV1MutatePartnerPermissionsRequest from a dict
google_cloud_assuredworkloads_v1_mutate_partner_permissions_request_from_dict = GoogleCloudAssuredworkloadsV1MutatePartnerPermissionsRequest.from_dict(google_cloud_assuredworkloads_v1_mutate_partner_permissions_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


