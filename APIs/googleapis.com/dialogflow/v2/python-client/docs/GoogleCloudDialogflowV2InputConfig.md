# GoogleCloudDialogflowV2InputConfig

Represents the configuration of importing a set of conversation files in Google Cloud Storage.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gcs_source** | [**GoogleCloudDialogflowV2GcsSources**](GoogleCloudDialogflowV2GcsSources.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_input_config import GoogleCloudDialogflowV2InputConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2InputConfig from a JSON string
google_cloud_dialogflow_v2_input_config_instance = GoogleCloudDialogflowV2InputConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2InputConfig.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_input_config_dict = google_cloud_dialogflow_v2_input_config_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2InputConfig from a dict
google_cloud_dialogflow_v2_input_config_from_dict = GoogleCloudDialogflowV2InputConfig.from_dict(google_cloud_dialogflow_v2_input_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


