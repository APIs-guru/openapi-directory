# GoogleCloudDataplexV1DataProfileResultProfileField

A field within a table.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mode** | **str** | The mode of the field. Possible values include: REQUIRED, if it is a required field. NULLABLE, if it is an optional field. REPEATED, if it is a repeated field. | [optional] 
**name** | **str** | The name of the field. | [optional] 
**profile** | [**GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfo**](GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfo.md) |  | [optional] 
**type** | **str** | The data type retrieved from the schema of the data source. For instance, for a BigQuery native table, it is the BigQuery Table Schema (https://cloud.google.com/bigquery/docs/reference/rest/v2/tables#tablefieldschema). For a Dataplex Entity, it is the Entity Schema (https://cloud.google.com/dataplex/docs/reference/rpc/google.cloud.dataplex.v1#type_3). | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_data_profile_result_profile_field import GoogleCloudDataplexV1DataProfileResultProfileField

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1DataProfileResultProfileField from a JSON string
google_cloud_dataplex_v1_data_profile_result_profile_field_instance = GoogleCloudDataplexV1DataProfileResultProfileField.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1DataProfileResultProfileField.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_data_profile_result_profile_field_dict = google_cloud_dataplex_v1_data_profile_result_profile_field_instance.to_dict()
# create an instance of GoogleCloudDataplexV1DataProfileResultProfileField from a dict
google_cloud_dataplex_v1_data_profile_result_profile_field_from_dict = GoogleCloudDataplexV1DataProfileResultProfileField.from_dict(google_cloud_dataplex_v1_data_profile_result_profile_field_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


