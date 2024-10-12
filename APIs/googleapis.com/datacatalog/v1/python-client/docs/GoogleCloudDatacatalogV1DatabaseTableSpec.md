# GoogleCloudDatacatalogV1DatabaseTableSpec

Specification that applies to a table resource. Valid only for entries with the `TABLE` type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**database_view_spec** | [**GoogleCloudDatacatalogV1DatabaseTableSpecDatabaseViewSpec**](GoogleCloudDatacatalogV1DatabaseTableSpecDatabaseViewSpec.md) |  | [optional] 
**dataplex_table** | [**GoogleCloudDatacatalogV1DataplexTableSpec**](GoogleCloudDatacatalogV1DataplexTableSpec.md) |  | [optional] 
**type** | **str** | Type of this table. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1_database_table_spec import GoogleCloudDatacatalogV1DatabaseTableSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1DatabaseTableSpec from a JSON string
google_cloud_datacatalog_v1_database_table_spec_instance = GoogleCloudDatacatalogV1DatabaseTableSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1DatabaseTableSpec.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1_database_table_spec_dict = google_cloud_datacatalog_v1_database_table_spec_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1DatabaseTableSpec from a dict
google_cloud_datacatalog_v1_database_table_spec_from_dict = GoogleCloudDatacatalogV1DatabaseTableSpec.from_dict(google_cloud_datacatalog_v1_database_table_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


