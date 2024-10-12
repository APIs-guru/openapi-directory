# GcsDestinationConfig

Google Cloud Storage destination configuration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**avro_file_format** | **object** | AVRO file format configuration. | [optional] 
**file_rotation_interval** | **str** | The maximum duration for which new events are added before a file is closed and a new file is created. Values within the range of 15-60 seconds are allowed. | [optional] 
**file_rotation_mb** | **int** | The maximum file size to be saved in the bucket. | [optional] 
**json_file_format** | [**JsonFileFormat**](JsonFileFormat.md) |  | [optional] 
**path** | **str** | Path inside the Cloud Storage bucket to write data to. | [optional] 

## Example

```python
from openapi_client.models.gcs_destination_config import GcsDestinationConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GcsDestinationConfig from a JSON string
gcs_destination_config_instance = GcsDestinationConfig.from_json(json)
# print the JSON string representation of the object
print(GcsDestinationConfig.to_json())

# convert the object into a dict
gcs_destination_config_dict = gcs_destination_config_instance.to_dict()
# create an instance of GcsDestinationConfig from a dict
gcs_destination_config_from_dict = GcsDestinationConfig.from_dict(gcs_destination_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


