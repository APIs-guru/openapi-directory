# GoogleCloudBeyondcorpPartnerservicesV1alphaPartnerTenant

Information about a BeyoncCorp Enterprise PartnerTenant.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Timestamp when the resource was created. | [optional] [readonly] 
**display_name** | **str** | Optional. An arbitrary caller-provided name for the PartnerTenant. Cannot exceed 64 characters. | [optional] 
**group** | [**GoogleCloudBeyondcorpPartnerservicesV1alphaGroup**](GoogleCloudBeyondcorpPartnerservicesV1alphaGroup.md) |  | [optional] 
**name** | **str** | Output only. Unique resource name of the PartnerTenant. The name is ignored when creating PartnerTenant. | [optional] [readonly] 
**partner_metadata** | [**GoogleCloudBeyondcorpPartnerservicesV1alphaPartnerMetadata**](GoogleCloudBeyondcorpPartnerservicesV1alphaPartnerMetadata.md) |  | [optional] 
**update_time** | **str** | Output only. Timestamp when the resource was last modified. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_beyondcorp_partnerservices_v1alpha_partner_tenant import GoogleCloudBeyondcorpPartnerservicesV1alphaPartnerTenant

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudBeyondcorpPartnerservicesV1alphaPartnerTenant from a JSON string
google_cloud_beyondcorp_partnerservices_v1alpha_partner_tenant_instance = GoogleCloudBeyondcorpPartnerservicesV1alphaPartnerTenant.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudBeyondcorpPartnerservicesV1alphaPartnerTenant.to_json())

# convert the object into a dict
google_cloud_beyondcorp_partnerservices_v1alpha_partner_tenant_dict = google_cloud_beyondcorp_partnerservices_v1alpha_partner_tenant_instance.to_dict()
# create an instance of GoogleCloudBeyondcorpPartnerservicesV1alphaPartnerTenant from a dict
google_cloud_beyondcorp_partnerservices_v1alpha_partner_tenant_from_dict = GoogleCloudBeyondcorpPartnerservicesV1alphaPartnerTenant.from_dict(google_cloud_beyondcorp_partnerservices_v1alpha_partner_tenant_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


