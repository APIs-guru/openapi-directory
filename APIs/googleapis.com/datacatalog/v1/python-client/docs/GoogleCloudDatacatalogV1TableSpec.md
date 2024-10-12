# GoogleCloudDatacatalogV1TableSpec

Normal BigQuery table specification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**grouped_entry** | **str** | Output only. If the table is date-sharded, that is, it matches the &#x60;[prefix]YYYYMMDD&#x60; name pattern, this field is the Data Catalog resource name of the date-sharded grouped entry. For example: &#x60;projects/{PROJECT_ID}/locations/{LOCATION}/entrygroups/{ENTRY_GROUP_ID}/entries/{ENTRY_ID}&#x60;. Otherwise, &#x60;grouped_entry&#x60; is empty. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1_table_spec import GoogleCloudDatacatalogV1TableSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1TableSpec from a JSON string
google_cloud_datacatalog_v1_table_spec_instance = GoogleCloudDatacatalogV1TableSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1TableSpec.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1_table_spec_dict = google_cloud_datacatalog_v1_table_spec_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1TableSpec from a dict
google_cloud_datacatalog_v1_table_spec_from_dict = GoogleCloudDatacatalogV1TableSpec.from_dict(google_cloud_datacatalog_v1_table_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


