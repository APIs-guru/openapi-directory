# GoogleCloudDatacatalogV1DataplexTableSpec

Entry specification for a Dataplex table.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dataplex_spec** | [**GoogleCloudDatacatalogV1DataplexSpec**](GoogleCloudDatacatalogV1DataplexSpec.md) |  | [optional] 
**external_tables** | [**List[GoogleCloudDatacatalogV1DataplexExternalTable]**](GoogleCloudDatacatalogV1DataplexExternalTable.md) | List of external tables registered by Dataplex in other systems based on the same underlying data. External tables allow to query this data in those systems. | [optional] 
**user_managed** | **bool** | Indicates if the table schema is managed by the user or not. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1_dataplex_table_spec import GoogleCloudDatacatalogV1DataplexTableSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1DataplexTableSpec from a JSON string
google_cloud_datacatalog_v1_dataplex_table_spec_instance = GoogleCloudDatacatalogV1DataplexTableSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1DataplexTableSpec.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1_dataplex_table_spec_dict = google_cloud_datacatalog_v1_dataplex_table_spec_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1DataplexTableSpec from a dict
google_cloud_datacatalog_v1_dataplex_table_spec_from_dict = GoogleCloudDatacatalogV1DataplexTableSpec.from_dict(google_cloud_datacatalog_v1_dataplex_table_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


