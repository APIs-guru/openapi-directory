# GoogleCloudDataplexV1SchemaPartitionField

Represents a key field within the entity's partition structure. You could have up to 20 partition fields, but only the first 10 partitions have the filtering ability due to performance consideration. Note: Partition fields are immutable.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Required. Partition field name must consist of letters, numbers, and underscores only, with a maximum of length of 256 characters, and must begin with a letter or underscore.. | [optional] 
**type** | **str** | Required. Immutable. The type of field. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_schema_partition_field import GoogleCloudDataplexV1SchemaPartitionField

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1SchemaPartitionField from a JSON string
google_cloud_dataplex_v1_schema_partition_field_instance = GoogleCloudDataplexV1SchemaPartitionField.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1SchemaPartitionField.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_schema_partition_field_dict = google_cloud_dataplex_v1_schema_partition_field_instance.to_dict()
# create an instance of GoogleCloudDataplexV1SchemaPartitionField from a dict
google_cloud_dataplex_v1_schema_partition_field_from_dict = GoogleCloudDataplexV1SchemaPartitionField.from_dict(google_cloud_dataplex_v1_schema_partition_field_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


