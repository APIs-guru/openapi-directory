# GoogleCloudDocumentaiV1TrainProcessorVersionResponse

The response for TrainProcessorVersion.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**processor_version** | **str** | The resource name of the processor version produced by training. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1_train_processor_version_response import GoogleCloudDocumentaiV1TrainProcessorVersionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1TrainProcessorVersionResponse from a JSON string
google_cloud_documentai_v1_train_processor_version_response_instance = GoogleCloudDocumentaiV1TrainProcessorVersionResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1TrainProcessorVersionResponse.to_json())

# convert the object into a dict
google_cloud_documentai_v1_train_processor_version_response_dict = google_cloud_documentai_v1_train_processor_version_response_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1TrainProcessorVersionResponse from a dict
google_cloud_documentai_v1_train_processor_version_response_from_dict = GoogleCloudDocumentaiV1TrainProcessorVersionResponse.from_dict(google_cloud_documentai_v1_train_processor_version_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


