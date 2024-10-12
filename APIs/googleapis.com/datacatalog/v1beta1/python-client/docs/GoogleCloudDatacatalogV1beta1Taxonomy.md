# GoogleCloudDatacatalogV1beta1Taxonomy

A taxonomy is a collection of policy tags that classify data along a common axis. For instance a data *sensitivity* taxonomy could contain policy tags denoting PII such as age, zipcode, and SSN. A data *origin* taxonomy could contain policy tags to distinguish user data, employee data, partner data, public data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activated_policy_types** | **List[str]** | Optional. A list of policy types that are activated for this taxonomy. If not set, defaults to an empty list. | [optional] 
**description** | **str** | Optional. Description of this taxonomy. It must: contain only unicode characters, tabs, newlines, carriage returns and page breaks; and be at most 2000 bytes long when encoded in UTF-8. If not set, defaults to an empty description. | [optional] 
**display_name** | **str** | Required. User defined name of this taxonomy. It must: contain only unicode letters, numbers, underscores, dashes and spaces; not start or end with spaces; and be at most 200 bytes long when encoded in UTF-8. The taxonomy display name must be unique within an organization. | [optional] 
**name** | **str** | Identifier. Resource name of this taxonomy, whose format is: \&quot;projects/{project_number}/locations/{location_id}/taxonomies/{id}\&quot;. | [optional] 
**policy_tag_count** | **int** | Output only. Number of policy tags contained in this taxonomy. | [optional] [readonly] 
**service** | [**GoogleCloudDatacatalogV1beta1TaxonomyService**](GoogleCloudDatacatalogV1beta1TaxonomyService.md) |  | [optional] 
**taxonomy_timestamps** | [**GoogleCloudDatacatalogV1beta1SystemTimestamps**](GoogleCloudDatacatalogV1beta1SystemTimestamps.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1beta1_taxonomy import GoogleCloudDatacatalogV1beta1Taxonomy

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1beta1Taxonomy from a JSON string
google_cloud_datacatalog_v1beta1_taxonomy_instance = GoogleCloudDatacatalogV1beta1Taxonomy.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1beta1Taxonomy.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1beta1_taxonomy_dict = google_cloud_datacatalog_v1beta1_taxonomy_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1beta1Taxonomy from a dict
google_cloud_datacatalog_v1beta1_taxonomy_from_dict = GoogleCloudDatacatalogV1beta1Taxonomy.from_dict(google_cloud_datacatalog_v1beta1_taxonomy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


