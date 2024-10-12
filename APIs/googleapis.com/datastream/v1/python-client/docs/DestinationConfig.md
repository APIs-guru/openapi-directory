# DestinationConfig

The configuration of the stream destination.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bigquery_destination_config** | [**BigQueryDestinationConfig**](BigQueryDestinationConfig.md) |  | [optional] 
**destination_connection_profile** | **str** | Required. Destination connection profile resource. Format: &#x60;projects/{project}/locations/{location}/connectionProfiles/{name}&#x60; | [optional] 
**gcs_destination_config** | [**GcsDestinationConfig**](GcsDestinationConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.destination_config import DestinationConfig

# TODO update the JSON string below
json = "{}"
# create an instance of DestinationConfig from a JSON string
destination_config_instance = DestinationConfig.from_json(json)
# print the JSON string representation of the object
print(DestinationConfig.to_json())

# convert the object into a dict
destination_config_dict = destination_config_instance.to_dict()
# create an instance of DestinationConfig from a dict
destination_config_from_dict = DestinationConfig.from_dict(destination_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


