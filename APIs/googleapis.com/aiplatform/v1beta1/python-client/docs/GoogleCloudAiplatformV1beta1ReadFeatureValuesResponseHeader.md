# GoogleCloudAiplatformV1beta1ReadFeatureValuesResponseHeader

Response header with metadata for the requested ReadFeatureValuesRequest.entity_type and Features.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity_type** | **str** | The resource name of the EntityType from the ReadFeatureValuesRequest. Value format: &#x60;projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entityType}&#x60;. | [optional] 
**feature_descriptors** | [**List[GoogleCloudAiplatformV1beta1ReadFeatureValuesResponseFeatureDescriptor]**](GoogleCloudAiplatformV1beta1ReadFeatureValuesResponseFeatureDescriptor.md) | List of Feature metadata corresponding to each piece of ReadFeatureValuesResponse.EntityView.data. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_read_feature_values_response_header import GoogleCloudAiplatformV1beta1ReadFeatureValuesResponseHeader

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1ReadFeatureValuesResponseHeader from a JSON string
google_cloud_aiplatform_v1beta1_read_feature_values_response_header_instance = GoogleCloudAiplatformV1beta1ReadFeatureValuesResponseHeader.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1ReadFeatureValuesResponseHeader.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_read_feature_values_response_header_dict = google_cloud_aiplatform_v1beta1_read_feature_values_response_header_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1ReadFeatureValuesResponseHeader from a dict
google_cloud_aiplatform_v1beta1_read_feature_values_response_header_from_dict = GoogleCloudAiplatformV1beta1ReadFeatureValuesResponseHeader.from_dict(google_cloud_aiplatform_v1beta1_read_feature_values_response_header_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


