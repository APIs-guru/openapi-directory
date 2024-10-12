# GoogleCloudRetailV2ImportCompletionDataResponse

Response of the ImportCompletionDataRequest. If the long running operation is done, this message is returned by the google.longrunning.Operations.response field if the operation is successful.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_samples** | [**List[GoogleRpcStatus]**](GoogleRpcStatus.md) | A sample of errors encountered while processing the request. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2_import_completion_data_response import GoogleCloudRetailV2ImportCompletionDataResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2ImportCompletionDataResponse from a JSON string
google_cloud_retail_v2_import_completion_data_response_instance = GoogleCloudRetailV2ImportCompletionDataResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2ImportCompletionDataResponse.to_json())

# convert the object into a dict
google_cloud_retail_v2_import_completion_data_response_dict = google_cloud_retail_v2_import_completion_data_response_instance.to_dict()
# create an instance of GoogleCloudRetailV2ImportCompletionDataResponse from a dict
google_cloud_retail_v2_import_completion_data_response_from_dict = GoogleCloudRetailV2ImportCompletionDataResponse.from_dict(google_cloud_retail_v2_import_completion_data_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


