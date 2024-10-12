# GoogleCloudDiscoveryengineV1alphaEstimateDataSizeRequest

Request message for EstimateBillingService.EstimateDataSize method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_data_source** | [**GoogleCloudDiscoveryengineV1alphaEstimateDataSizeRequestFileDataSource**](GoogleCloudDiscoveryengineV1alphaEstimateDataSizeRequestFileDataSource.md) |  | [optional] 
**website_data_source** | [**GoogleCloudDiscoveryengineV1alphaEstimateDataSizeRequestWebsiteDataSource**](GoogleCloudDiscoveryengineV1alphaEstimateDataSizeRequestWebsiteDataSource.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_estimate_data_size_request import GoogleCloudDiscoveryengineV1alphaEstimateDataSizeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaEstimateDataSizeRequest from a JSON string
google_cloud_discoveryengine_v1alpha_estimate_data_size_request_instance = GoogleCloudDiscoveryengineV1alphaEstimateDataSizeRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaEstimateDataSizeRequest.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_estimate_data_size_request_dict = google_cloud_discoveryengine_v1alpha_estimate_data_size_request_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaEstimateDataSizeRequest from a dict
google_cloud_discoveryengine_v1alpha_estimate_data_size_request_from_dict = GoogleCloudDiscoveryengineV1alphaEstimateDataSizeRequest.from_dict(google_cloud_discoveryengine_v1alpha_estimate_data_size_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


