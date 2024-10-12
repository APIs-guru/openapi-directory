# GoogleCloudApigeeV1Organization


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addons_config** | [**GoogleCloudApigeeV1AddonsConfig**](GoogleCloudApigeeV1AddonsConfig.md) |  | [optional] 
**analytics_region** | **str** | Required. DEPRECATED: This field will eventually be deprecated and replaced with a differently-named field. Primary Google Cloud region for analytics data storage. For valid values, see [Create an Apigee organization](https://cloud.google.com/apigee/docs/api-platform/get-started/create-org). | [optional] 
**api_consumer_data_encryption_key_name** | **str** | Cloud KMS key name used for encrypting API consumer data. Required for US/EU regions when [BillingType](#BillingType) is &#x60;SUBSCRIPTION&#x60;. When [BillingType](#BillingType) is &#x60;EVALUATION&#x60; or the region is not US/EU, a Google-Managed encryption key will be used. Format: &#x60;projects/*/locations/*/keyRings/*/cryptoKeys/*&#x60; | [optional] 
**api_consumer_data_location** | **str** | This field is needed only for customers with control plane in US or EU. Apigee stores some control plane data only in single region. This field determines which single region Apigee should use. For example: \&quot;us-west1\&quot; when control plane is in US or \&quot;europe-west2\&quot; when control plane is in EU. | [optional] 
**apigee_project_id** | **str** | Output only. Apigee Project ID associated with the organization. Use this project to allowlist Apigee in the Service Attachment when using private service connect with Apigee. | [optional] [readonly] 
**attributes** | **List[str]** | Not used by Apigee. | [optional] 
**authorized_network** | **str** | Compute Engine network used for Service Networking to be peered with Apigee runtime instances. See [Getting started with the Service Networking API](https://cloud.google.com/service-infrastructure/docs/service-networking/getting-started). Valid only when [RuntimeType](#RuntimeType) is set to &#x60;CLOUD&#x60;. The value must be set before the creation of a runtime instance and can be updated only when there are no runtime instances. For example: &#x60;default&#x60;. Apigee also supports shared VPC (that is, the host network project is not the same as the one that is peering with Apigee). See [Shared VPC overview](https://cloud.google.com/vpc/docs/shared-vpc). To use a shared VPC network, use the following format: &#x60;projects/{host-project-id}/{region}/networks/{network-name}&#x60;. For example: &#x60;projects/my-sharedvpc-host/global/networks/mynetwork&#x60; **Note:** Not supported for Apigee hybrid. | [optional] 
**billing_type** | **str** | Billing type of the Apigee organization. See [Apigee pricing](https://cloud.google.com/apigee/pricing). | [optional] 
**ca_certificate** | **bytearray** | Output only. Base64-encoded public certificate for the root CA of the Apigee organization. Valid only when [RuntimeType](#RuntimeType) is &#x60;CLOUD&#x60;. | [optional] [readonly] 
**control_plane_encryption_key_name** | **str** | Cloud KMS key name used for encrypting control plane data that is stored in a multi region. Required when [BillingType](#BillingType) is &#x60;SUBSCRIPTION&#x60;. When [BillingType](#BillingType) is &#x60;EVALUATION&#x60;, a Google-Managed encryption key will be used. Format: &#x60;projects/*/locations/*/keyRings/*/cryptoKeys/*&#x60; | [optional] 
**created_at** | **str** | Output only. Time that the Apigee organization was created in milliseconds since epoch. | [optional] [readonly] 
**customer_name** | **str** | Not used by Apigee. | [optional] 
**description** | **str** | Description of the Apigee organization. | [optional] 
**disable_vpc_peering** | **bool** | Optional. Flag that specifies whether the VPC Peering through Private Google Access should be disabled between the consumer network and Apigee. Valid only when RuntimeType is set to CLOUD. Required if an authorizedNetwork on the consumer project is not provided, in which case the flag should be set to true. The value must be set before the creation of any Apigee runtime instance and can be updated only when there are no runtime instances. **Note:** Apigee will be deprecating the vpc peering model that requires you to provide &#39;authorizedNetwork&#39;, by making the non-peering model as the default way of provisioning Apigee organization in future. So, this will be a temporary flag to enable the transition. Not supported for Apigee hybrid. | [optional] 
**display_name** | **str** | Display name for the Apigee organization. Unused, but reserved for future use. | [optional] 
**environments** | **List[str]** | Output only. List of environments in the Apigee organization. | [optional] [readonly] 
**expires_at** | **str** | Output only. Time that the Apigee organization is scheduled for deletion. | [optional] [readonly] 
**last_modified_at** | **str** | Output only. Time that the Apigee organization was last modified in milliseconds since epoch. | [optional] [readonly] 
**name** | **str** | Output only. Name of the Apigee organization. | [optional] [readonly] 
**portal_disabled** | **bool** | Configuration for the Portals settings. | [optional] 
**project_id** | **str** | Output only. Project ID associated with the Apigee organization. | [optional] [readonly] 
**properties** | [**GoogleCloudApigeeV1Properties**](GoogleCloudApigeeV1Properties.md) |  | [optional] 
**runtime_database_encryption_key_name** | **str** | Cloud KMS key name used for encrypting the data that is stored and replicated across runtime instances. Update is not allowed after the organization is created. Required when [RuntimeType](#RuntimeType) is &#x60;CLOUD&#x60;. If not specified when [RuntimeType](#RuntimeType) is &#x60;TRIAL&#x60;, a Google-Managed encryption key will be used. For example: \&quot;projects/foo/locations/us/keyRings/bar/cryptoKeys/baz\&quot;. **Note:** Not supported for Apigee hybrid. | [optional] 
**runtime_type** | **str** | Required. Runtime type of the Apigee organization based on the Apigee subscription purchased. | [optional] 
**state** | **str** | Output only. State of the organization. Values other than ACTIVE means the resource is not ready to use. | [optional] [readonly] 
**subscription_plan** | **str** | Output only. Subscription plan that the customer has purchased. Output only. | [optional] [readonly] 
**subscription_type** | **str** | Output only. DEPRECATED: This will eventually be replaced by BillingType. Subscription type of the Apigee organization. Valid values include trial (free, limited, and for evaluation purposes only) or paid (full subscription has been purchased). See [Apigee pricing](https://cloud.google.com/apigee/pricing/). | [optional] [readonly] 
**type** | **str** | Not used by Apigee. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_organization import GoogleCloudApigeeV1Organization

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1Organization from a JSON string
google_cloud_apigee_v1_organization_instance = GoogleCloudApigeeV1Organization.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1Organization.to_json())

# convert the object into a dict
google_cloud_apigee_v1_organization_dict = google_cloud_apigee_v1_organization_instance.to_dict()
# create an instance of GoogleCloudApigeeV1Organization from a dict
google_cloud_apigee_v1_organization_from_dict = GoogleCloudApigeeV1Organization.from_dict(google_cloud_apigee_v1_organization_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


