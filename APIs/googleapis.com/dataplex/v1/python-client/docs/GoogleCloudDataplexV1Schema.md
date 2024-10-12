# GoogleCloudDataplexV1Schema

Schema information describing the structure and layout of the data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fields** | [**List[GoogleCloudDataplexV1SchemaSchemaField]**](GoogleCloudDataplexV1SchemaSchemaField.md) | Optional. The sequence of fields describing data in table entities. Note: BigQuery SchemaFields are immutable. | [optional] 
**partition_fields** | [**List[GoogleCloudDataplexV1SchemaPartitionField]**](GoogleCloudDataplexV1SchemaPartitionField.md) | Optional. The sequence of fields describing the partition structure in entities. If this field is empty, there are no partitions within the data. | [optional] 
**partition_style** | **str** | Optional. The structure of paths containing partition data within the entity. | [optional] 
**user_managed** | **bool** | Required. Set to true if user-managed or false if managed by Dataplex. The default is false (managed by Dataplex). Set to falseto enable Dataplex discovery to update the schema. including new data discovery, schema inference, and schema evolution. Users retain the ability to input and edit the schema. Dataplex treats schema input by the user as though produced by a previous Dataplex discovery operation, and it will evolve the schema and take action based on that treatment. Set to true to fully manage the entity schema. This setting guarantees that Dataplex will not change schema fields. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_schema import GoogleCloudDataplexV1Schema

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1Schema from a JSON string
google_cloud_dataplex_v1_schema_instance = GoogleCloudDataplexV1Schema.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1Schema.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_schema_dict = google_cloud_dataplex_v1_schema_instance.to_dict()
# create an instance of GoogleCloudDataplexV1Schema from a dict
google_cloud_dataplex_v1_schema_from_dict = GoogleCloudDataplexV1Schema.from_dict(google_cloud_dataplex_v1_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


