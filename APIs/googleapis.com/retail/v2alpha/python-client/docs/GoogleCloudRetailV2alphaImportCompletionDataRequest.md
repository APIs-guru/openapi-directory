# GoogleCloudRetailV2alphaImportCompletionDataRequest

Request message for ImportCompletionData methods.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**input_config** | [**GoogleCloudRetailV2alphaCompletionDataInputConfig**](GoogleCloudRetailV2alphaCompletionDataInputConfig.md) |  | [optional] 
**notification_pubsub_topic** | **str** | Pub/Sub topic for receiving notification. If this field is set, when the import is finished, a notification is sent to specified Pub/Sub topic. The message data is JSON string of a Operation. Format of the Pub/Sub topic is &#x60;projects/{project}/topics/{topic}&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2alpha_import_completion_data_request import GoogleCloudRetailV2alphaImportCompletionDataRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2alphaImportCompletionDataRequest from a JSON string
google_cloud_retail_v2alpha_import_completion_data_request_instance = GoogleCloudRetailV2alphaImportCompletionDataRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2alphaImportCompletionDataRequest.to_json())

# convert the object into a dict
google_cloud_retail_v2alpha_import_completion_data_request_dict = google_cloud_retail_v2alpha_import_completion_data_request_instance.to_dict()
# create an instance of GoogleCloudRetailV2alphaImportCompletionDataRequest from a dict
google_cloud_retail_v2alpha_import_completion_data_request_from_dict = GoogleCloudRetailV2alphaImportCompletionDataRequest.from_dict(google_cloud_retail_v2alpha_import_completion_data_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


