# GoogleCloudBeyondcorpPartnerservicesV1alphaPartnerMetadata

Metadata associated with PartnerTenant and is provided by the Partner.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**internal_tenant_id** | **str** | Optional. UUID used by the Partner to refer to the PartnerTenant in their internal systems. | [optional] 
**partner_tenant_id** | **str** | Optional. UUID used by the Partner to refer to the PartnerTenant in their internal systems. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_beyondcorp_partnerservices_v1alpha_partner_metadata import GoogleCloudBeyondcorpPartnerservicesV1alphaPartnerMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudBeyondcorpPartnerservicesV1alphaPartnerMetadata from a JSON string
google_cloud_beyondcorp_partnerservices_v1alpha_partner_metadata_instance = GoogleCloudBeyondcorpPartnerservicesV1alphaPartnerMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudBeyondcorpPartnerservicesV1alphaPartnerMetadata.to_json())

# convert the object into a dict
google_cloud_beyondcorp_partnerservices_v1alpha_partner_metadata_dict = google_cloud_beyondcorp_partnerservices_v1alpha_partner_metadata_instance.to_dict()
# create an instance of GoogleCloudBeyondcorpPartnerservicesV1alphaPartnerMetadata from a dict
google_cloud_beyondcorp_partnerservices_v1alpha_partner_metadata_from_dict = GoogleCloudBeyondcorpPartnerservicesV1alphaPartnerMetadata.from_dict(google_cloud_beyondcorp_partnerservices_v1alpha_partner_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


