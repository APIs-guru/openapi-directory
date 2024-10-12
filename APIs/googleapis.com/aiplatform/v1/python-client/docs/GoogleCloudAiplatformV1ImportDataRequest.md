# GoogleCloudAiplatformV1ImportDataRequest

Request message for DatasetService.ImportData.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**import_configs** | [**List[GoogleCloudAiplatformV1ImportDataConfig]**](GoogleCloudAiplatformV1ImportDataConfig.md) | Required. The desired input locations. The contents of all input locations will be imported in one batch. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_import_data_request import GoogleCloudAiplatformV1ImportDataRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1ImportDataRequest from a JSON string
google_cloud_aiplatform_v1_import_data_request_instance = GoogleCloudAiplatformV1ImportDataRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1ImportDataRequest.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_import_data_request_dict = google_cloud_aiplatform_v1_import_data_request_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1ImportDataRequest from a dict
google_cloud_aiplatform_v1_import_data_request_from_dict = GoogleCloudAiplatformV1ImportDataRequest.from_dict(google_cloud_aiplatform_v1_import_data_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


