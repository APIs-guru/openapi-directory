# GoogleCloudAssuredworkloadsV1beta1WorkloadPartnerPermissions

Permissions granted to the AW Partner SA account for the customer workload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assured_workloads_monitoring** | **bool** | Optional. Allow partner to view violation alerts. | [optional] 
**data_logs_viewer** | **bool** | Allow the partner to view inspectability logs and monitoring violations. | [optional] 
**service_access_approver** | **bool** | Optional. Allow partner to view access approval logs. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_assuredworkloads_v1beta1_workload_partner_permissions import GoogleCloudAssuredworkloadsV1beta1WorkloadPartnerPermissions

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAssuredworkloadsV1beta1WorkloadPartnerPermissions from a JSON string
google_cloud_assuredworkloads_v1beta1_workload_partner_permissions_instance = GoogleCloudAssuredworkloadsV1beta1WorkloadPartnerPermissions.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAssuredworkloadsV1beta1WorkloadPartnerPermissions.to_json())

# convert the object into a dict
google_cloud_assuredworkloads_v1beta1_workload_partner_permissions_dict = google_cloud_assuredworkloads_v1beta1_workload_partner_permissions_instance.to_dict()
# create an instance of GoogleCloudAssuredworkloadsV1beta1WorkloadPartnerPermissions from a dict
google_cloud_assuredworkloads_v1beta1_workload_partner_permissions_from_dict = GoogleCloudAssuredworkloadsV1beta1WorkloadPartnerPermissions.from_dict(google_cloud_assuredworkloads_v1beta1_workload_partner_permissions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


