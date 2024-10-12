# GoogleCloudAssuredworkloadsV1Workload

A Workload object for managing highly regulated workloads of cloud customers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_account** | **str** | Optional. The billing account used for the resources which are direct children of workload. This billing account is initially associated with the resources created as part of Workload creation. After the initial creation of these resources, the customer can change the assigned billing account. The resource name has the form &#x60;billingAccounts/{billing_account_id}&#x60;. For example, &#x60;billingAccounts/012345-567890-ABCDEF&#x60;. | [optional] 
**compliance_regime** | **str** | Required. Immutable. Compliance Regime associated with this workload. | [optional] 
**compliance_status** | [**GoogleCloudAssuredworkloadsV1WorkloadComplianceStatus**](GoogleCloudAssuredworkloadsV1WorkloadComplianceStatus.md) |  | [optional] 
**compliant_but_disallowed_services** | **List[str]** | Output only. Urls for services which are compliant for this Assured Workload, but which are currently disallowed by the ResourceUsageRestriction org policy. Invoke RestrictAllowedResources endpoint to allow your project developers to use these services in their environment. | [optional] [readonly] 
**create_time** | **str** | Output only. Immutable. The Workload creation timestamp. | [optional] [readonly] 
**display_name** | **str** | Required. The user-assigned display name of the Workload. When present it must be between 4 to 30 characters. Allowed characters are: lowercase and uppercase letters, numbers, hyphen, and spaces. Example: My Workload | [optional] 
**ekm_provisioning_response** | [**GoogleCloudAssuredworkloadsV1WorkloadEkmProvisioningResponse**](GoogleCloudAssuredworkloadsV1WorkloadEkmProvisioningResponse.md) |  | [optional] 
**enable_sovereign_controls** | **bool** | Optional. Indicates the sovereignty status of the given workload. Currently meant to be used by Europe/Canada customers. | [optional] 
**etag** | **str** | Optional. ETag of the workload, it is calculated on the basis of the Workload contents. It will be used in Update &amp; Delete operations. | [optional] 
**kaj_enrollment_state** | **str** | Output only. Represents the KAJ enrollment state of the given workload. | [optional] [readonly] 
**kms_settings** | [**GoogleCloudAssuredworkloadsV1WorkloadKMSSettings**](GoogleCloudAssuredworkloadsV1WorkloadKMSSettings.md) |  | [optional] 
**labels** | **Dict[str, str]** | Optional. Labels applied to the workload. | [optional] 
**name** | **str** | Optional. The resource name of the workload. Format: organizations/{organization}/locations/{location}/workloads/{workload} Read-only. | [optional] 
**partner** | **str** | Optional. Partner regime associated with this workload. | [optional] 
**partner_permissions** | [**GoogleCloudAssuredworkloadsV1WorkloadPartnerPermissions**](GoogleCloudAssuredworkloadsV1WorkloadPartnerPermissions.md) |  | [optional] 
**provisioned_resources_parent** | **str** | Input only. The parent resource for the resources managed by this Assured Workload. May be either empty or a folder resource which is a child of the Workload parent. If not specified all resources are created under the parent organization. Format: folders/{folder_id} | [optional] 
**resource_monitoring_enabled** | **bool** | Output only. Indicates whether resource monitoring is enabled for workload or not. It is true when Resource feed is subscribed to AWM topic and AWM Service Agent Role is binded to AW Service Account for resource Assured workload. | [optional] [readonly] 
**resource_settings** | [**List[GoogleCloudAssuredworkloadsV1WorkloadResourceSettings]**](GoogleCloudAssuredworkloadsV1WorkloadResourceSettings.md) | Input only. Resource properties that are used to customize workload resources. These properties (such as custom project id) will be used to create workload resources if possible. This field is optional. | [optional] 
**resources** | [**List[GoogleCloudAssuredworkloadsV1WorkloadResourceInfo]**](GoogleCloudAssuredworkloadsV1WorkloadResourceInfo.md) | Output only. The resources associated with this workload. These resources will be created when creating the workload. If any of the projects already exist, the workload creation will fail. Always read only. | [optional] [readonly] 
**saa_enrollment_response** | [**GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponse**](GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponse.md) |  | [optional] 
**violation_notifications_enabled** | **bool** | Optional. Indicates whether the e-mail notification for a violation is enabled for a workload. This value will be by default True, and if not present will be considered as true. This should only be updated via updateWorkload call. Any Changes to this field during the createWorkload call will not be honored. This will always be true while creating the workload. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_assuredworkloads_v1_workload import GoogleCloudAssuredworkloadsV1Workload

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAssuredworkloadsV1Workload from a JSON string
google_cloud_assuredworkloads_v1_workload_instance = GoogleCloudAssuredworkloadsV1Workload.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAssuredworkloadsV1Workload.to_json())

# convert the object into a dict
google_cloud_assuredworkloads_v1_workload_dict = google_cloud_assuredworkloads_v1_workload_instance.to_dict()
# create an instance of GoogleCloudAssuredworkloadsV1Workload from a dict
google_cloud_assuredworkloads_v1_workload_from_dict = GoogleCloudAssuredworkloadsV1Workload.from_dict(google_cloud_assuredworkloads_v1_workload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


