# IngestionDataSourceSettings

Settings for an ingestion data source on a topic.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aws_kinesis** | [**AwsKinesis**](AwsKinesis.md) |  | [optional] 

## Example

```python
from openapi_client.models.ingestion_data_source_settings import IngestionDataSourceSettings

# TODO update the JSON string below
json = "{}"
# create an instance of IngestionDataSourceSettings from a JSON string
ingestion_data_source_settings_instance = IngestionDataSourceSettings.from_json(json)
# print the JSON string representation of the object
print(IngestionDataSourceSettings.to_json())

# convert the object into a dict
ingestion_data_source_settings_dict = ingestion_data_source_settings_instance.to_dict()
# create an instance of IngestionDataSourceSettings from a dict
ingestion_data_source_settings_from_dict = IngestionDataSourceSettings.from_dict(ingestion_data_source_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


