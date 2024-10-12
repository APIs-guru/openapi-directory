# GoogleCloudDatacatalogV1Taxonomy

A taxonomy is a collection of hierarchical policy tags that classify data along a common axis. For example, a \"data sensitivity\" taxonomy might contain the following policy tags: ``` + PII + Account number + Age + SSN + Zipcode + Financials + Revenue ``` A \"data origin\" taxonomy might contain the following policy tags: ``` + User data + Employee data + Partner data + Public data ```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activated_policy_types** | **List[str]** | Optional. A list of policy types that are activated for this taxonomy. If not set, defaults to an empty list. | [optional] 
**description** | **str** | Optional. Description of this taxonomy. If not set, defaults to empty. The description must contain only Unicode characters, tabs, newlines, carriage returns, and page breaks, and be at most 2000 bytes long when encoded in UTF-8. | [optional] 
**display_name** | **str** | Required. User-defined name of this taxonomy. The name can&#39;t start or end with spaces, must contain only Unicode letters, numbers, underscores, dashes, and spaces, and be at most 200 bytes long when encoded in UTF-8. The taxonomy display name must be unique within an organization. | [optional] 
**name** | **str** | Identifier. Resource name of this taxonomy in URL format. Note: Policy tag manager generates unique taxonomy IDs. | [optional] 
**policy_tag_count** | **int** | Output only. Number of policy tags in this taxonomy. | [optional] [readonly] 
**service** | [**GoogleCloudDatacatalogV1TaxonomyService**](GoogleCloudDatacatalogV1TaxonomyService.md) |  | [optional] 
**taxonomy_timestamps** | [**GoogleCloudDatacatalogV1SystemTimestamps**](GoogleCloudDatacatalogV1SystemTimestamps.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1_taxonomy import GoogleCloudDatacatalogV1Taxonomy

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1Taxonomy from a JSON string
google_cloud_datacatalog_v1_taxonomy_instance = GoogleCloudDatacatalogV1Taxonomy.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1Taxonomy.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1_taxonomy_dict = google_cloud_datacatalog_v1_taxonomy_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1Taxonomy from a dict
google_cloud_datacatalog_v1_taxonomy_from_dict = GoogleCloudDatacatalogV1Taxonomy.from_dict(google_cloud_datacatalog_v1_taxonomy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


