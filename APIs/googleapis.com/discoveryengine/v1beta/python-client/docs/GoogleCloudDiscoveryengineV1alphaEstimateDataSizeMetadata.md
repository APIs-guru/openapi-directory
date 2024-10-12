# GoogleCloudDiscoveryengineV1alphaEstimateDataSizeMetadata

Metadata related to the progress of the EstimateDataSize operation. This is returned by the google.longrunning.Operation.metadata field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Operation create time. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_estimate_data_size_metadata import GoogleCloudDiscoveryengineV1alphaEstimateDataSizeMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaEstimateDataSizeMetadata from a JSON string
google_cloud_discoveryengine_v1alpha_estimate_data_size_metadata_instance = GoogleCloudDiscoveryengineV1alphaEstimateDataSizeMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaEstimateDataSizeMetadata.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_estimate_data_size_metadata_dict = google_cloud_discoveryengine_v1alpha_estimate_data_size_metadata_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaEstimateDataSizeMetadata from a dict
google_cloud_discoveryengine_v1alpha_estimate_data_size_metadata_from_dict = GoogleCloudDiscoveryengineV1alphaEstimateDataSizeMetadata.from_dict(google_cloud_discoveryengine_v1alpha_estimate_data_size_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


