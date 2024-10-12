# GoogleCloudSaasacceleratorManagementProvidersV1SloMetadata

SloMetadata contains resources required for proper SLO classification of the instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nodes** | [**List[GoogleCloudSaasacceleratorManagementProvidersV1NodeSloMetadata]**](GoogleCloudSaasacceleratorManagementProvidersV1NodeSloMetadata.md) | Optional. List of nodes. Some producers need to use per-node metadata to calculate SLO. This field allows such producers to publish per-node SLO meta data, which will be consumed by SSA Eligibility Exporter and published in the form of per node metric to Monarch. | [optional] 
**per_sli_eligibility** | [**GoogleCloudSaasacceleratorManagementProvidersV1PerSliSloEligibility**](GoogleCloudSaasacceleratorManagementProvidersV1PerSliSloEligibility.md) |  | [optional] 
**tier** | **str** | Name of the SLO tier the Instance belongs to. This name will be expected to match the tiers specified in the service SLO configuration. Field is mandatory and must not be empty. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_saasaccelerator_management_providers_v1_slo_metadata import GoogleCloudSaasacceleratorManagementProvidersV1SloMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudSaasacceleratorManagementProvidersV1SloMetadata from a JSON string
google_cloud_saasaccelerator_management_providers_v1_slo_metadata_instance = GoogleCloudSaasacceleratorManagementProvidersV1SloMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudSaasacceleratorManagementProvidersV1SloMetadata.to_json())

# convert the object into a dict
google_cloud_saasaccelerator_management_providers_v1_slo_metadata_dict = google_cloud_saasaccelerator_management_providers_v1_slo_metadata_instance.to_dict()
# create an instance of GoogleCloudSaasacceleratorManagementProvidersV1SloMetadata from a dict
google_cloud_saasaccelerator_management_providers_v1_slo_metadata_from_dict = GoogleCloudSaasacceleratorManagementProvidersV1SloMetadata.from_dict(google_cloud_saasaccelerator_management_providers_v1_slo_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


