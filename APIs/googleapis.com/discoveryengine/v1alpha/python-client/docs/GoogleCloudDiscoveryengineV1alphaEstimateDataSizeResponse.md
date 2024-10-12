# GoogleCloudDiscoveryengineV1alphaEstimateDataSizeResponse

Response of the EstimateDataSize request. If the long running operation was successful, then this message is returned by the google.longrunning.Operations.response field if the operation was successful.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_size_bytes** | **str** | Data size in terms of bytes. | [optional] 
**document_count** | **str** | Total number of documents. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_estimate_data_size_response import GoogleCloudDiscoveryengineV1alphaEstimateDataSizeResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaEstimateDataSizeResponse from a JSON string
google_cloud_discoveryengine_v1alpha_estimate_data_size_response_instance = GoogleCloudDiscoveryengineV1alphaEstimateDataSizeResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaEstimateDataSizeResponse.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_estimate_data_size_response_dict = google_cloud_discoveryengine_v1alpha_estimate_data_size_response_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaEstimateDataSizeResponse from a dict
google_cloud_discoveryengine_v1alpha_estimate_data_size_response_from_dict = GoogleCloudDiscoveryengineV1alphaEstimateDataSizeResponse.from_dict(google_cloud_discoveryengine_v1alpha_estimate_data_size_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


