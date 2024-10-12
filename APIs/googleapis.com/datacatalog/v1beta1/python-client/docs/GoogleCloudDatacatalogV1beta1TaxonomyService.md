# GoogleCloudDatacatalogV1beta1TaxonomyService

The source system of the Taxonomy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity** | **str** | The service agent for the service. | [optional] 
**name** | **str** | The Google Cloud service name. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1beta1_taxonomy_service import GoogleCloudDatacatalogV1beta1TaxonomyService

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1beta1TaxonomyService from a JSON string
google_cloud_datacatalog_v1beta1_taxonomy_service_instance = GoogleCloudDatacatalogV1beta1TaxonomyService.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1beta1TaxonomyService.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1beta1_taxonomy_service_dict = google_cloud_datacatalog_v1beta1_taxonomy_service_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1beta1TaxonomyService from a dict
google_cloud_datacatalog_v1beta1_taxonomy_service_from_dict = GoogleCloudDatacatalogV1beta1TaxonomyService.from_dict(google_cloud_datacatalog_v1beta1_taxonomy_service_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


