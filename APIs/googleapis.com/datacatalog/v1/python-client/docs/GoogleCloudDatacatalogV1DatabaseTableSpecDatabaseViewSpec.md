# GoogleCloudDatacatalogV1DatabaseTableSpecDatabaseViewSpec

Specification that applies to database view.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_table** | **str** | Name of a singular table this view reflects one to one. | [optional] 
**sql_query** | **str** | SQL query used to generate this view. | [optional] 
**view_type** | **str** | Type of this view. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1_database_table_spec_database_view_spec import GoogleCloudDatacatalogV1DatabaseTableSpecDatabaseViewSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1DatabaseTableSpecDatabaseViewSpec from a JSON string
google_cloud_datacatalog_v1_database_table_spec_database_view_spec_instance = GoogleCloudDatacatalogV1DatabaseTableSpecDatabaseViewSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1DatabaseTableSpecDatabaseViewSpec.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1_database_table_spec_database_view_spec_dict = google_cloud_datacatalog_v1_database_table_spec_database_view_spec_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1DatabaseTableSpecDatabaseViewSpec from a dict
google_cloud_datacatalog_v1_database_table_spec_database_view_spec_from_dict = GoogleCloudDatacatalogV1DatabaseTableSpecDatabaseViewSpec.from_dict(google_cloud_datacatalog_v1_database_table_spec_database_view_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


