# GoogleCloudDatacatalogV1beta1ColumnSchema

Representation of a column within a schema. Columns could be nested inside other columns.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**column** | **str** | Required. Name of the column. | [optional] 
**description** | **str** | Optional. Description of the column. Default value is an empty string. | [optional] 
**mode** | **str** | Optional. A column&#39;s mode indicates whether the values in this column are required, nullable, etc. Only &#x60;NULLABLE&#x60;, &#x60;REQUIRED&#x60; and &#x60;REPEATED&#x60; are supported. Default mode is &#x60;NULLABLE&#x60;. | [optional] 
**subcolumns** | [**List[GoogleCloudDatacatalogV1beta1ColumnSchema]**](GoogleCloudDatacatalogV1beta1ColumnSchema.md) | Optional. Schema of sub-columns. A column can have zero or more sub-columns. | [optional] 
**type** | **str** | Required. Type of the column. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1beta1_column_schema import GoogleCloudDatacatalogV1beta1ColumnSchema

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1beta1ColumnSchema from a JSON string
google_cloud_datacatalog_v1beta1_column_schema_instance = GoogleCloudDatacatalogV1beta1ColumnSchema.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1beta1ColumnSchema.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1beta1_column_schema_dict = google_cloud_datacatalog_v1beta1_column_schema_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1beta1ColumnSchema from a dict
google_cloud_datacatalog_v1beta1_column_schema_from_dict = GoogleCloudDatacatalogV1beta1ColumnSchema.from_dict(google_cloud_datacatalog_v1beta1_column_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


