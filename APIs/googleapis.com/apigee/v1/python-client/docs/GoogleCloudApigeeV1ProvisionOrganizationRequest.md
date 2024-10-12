# GoogleCloudApigeeV1ProvisionOrganizationRequest

Request for ProvisionOrganization.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**analytics_region** | **str** | Primary Cloud Platform region for analytics data storage. For valid values, see [Create an organization](https://cloud.google.com/apigee/docs/hybrid/latest/precog-provision). Defaults to &#x60;us-west1&#x60;. | [optional] 
**authorized_network** | **str** | Compute Engine network used for Service Networking to be peered with Apigee runtime instances. See [Getting started with the Service Networking API](https://cloud.google.com/service-infrastructure/docs/service-networking/getting-started). Apigee also supports shared VPC (that is, the host network project is not the same as the one that is peering with Apigee). See [Shared VPC overview](https://cloud.google.com/vpc/docs/shared-vpc). To use a shared VPC network, use the following format: &#x60;projects/{host-project-id}/{region}/networks/{network-name}&#x60;. For example: &#x60;projects/my-sharedvpc-host/global/networks/mynetwork&#x60; | [optional] 
**disable_vpc_peering** | **bool** | Optional. Flag that specifies whether the VPC Peering through Private Google Access should be disabled between the consumer network and Apigee. Required if an authorizedNetwork on the consumer project is not provided, in which case the flag should be set to true. The value must be set before the creation of any Apigee runtime instance and can be updated only when there are no runtime instances. **Note:** Apigee will be deprecating the vpc peering model that requires you to provide &#39;authorizedNetwork&#39;, by making the non-peering model as the default way of provisioning Apigee organization in future. So, this will be a temporary flag to enable the transition. Not supported for Apigee hybrid. | [optional] 
**runtime_location** | **str** | Cloud Platform location for the runtime instance. Defaults to zone &#x60;us-west1-a&#x60;. If a region is provided, &#x60;EVAL&#x60; organizations will use the region for automatically selecting a zone for the runtime instance. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_provision_organization_request import GoogleCloudApigeeV1ProvisionOrganizationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1ProvisionOrganizationRequest from a JSON string
google_cloud_apigee_v1_provision_organization_request_instance = GoogleCloudApigeeV1ProvisionOrganizationRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1ProvisionOrganizationRequest.to_json())

# convert the object into a dict
google_cloud_apigee_v1_provision_organization_request_dict = google_cloud_apigee_v1_provision_organization_request_instance.to_dict()
# create an instance of GoogleCloudApigeeV1ProvisionOrganizationRequest from a dict
google_cloud_apigee_v1_provision_organization_request_from_dict = GoogleCloudApigeeV1ProvisionOrganizationRequest.from_dict(google_cloud_apigee_v1_provision_organization_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


