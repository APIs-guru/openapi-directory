# GoogleCloudVisionV1p4beta1OutputConfig

The desired output location and metadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batch_size** | **int** | The max number of response protos to put into each output JSON file on Google Cloud Storage. The valid range is [1, 100]. If not specified, the default value is 20. For example, for one pdf file with 100 pages, 100 response protos will be generated. If &#x60;batch_size&#x60; &#x3D; 20, then 5 json files each containing 20 response protos will be written under the prefix &#x60;gcs_destination&#x60;.&#x60;uri&#x60;. Currently, batch_size only applies to GcsDestination, with potential future support for other output configurations. | [optional] 
**gcs_destination** | [**GoogleCloudVisionV1p4beta1GcsDestination**](GoogleCloudVisionV1p4beta1GcsDestination.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_vision_v1p4beta1_output_config import GoogleCloudVisionV1p4beta1OutputConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVisionV1p4beta1OutputConfig from a JSON string
google_cloud_vision_v1p4beta1_output_config_instance = GoogleCloudVisionV1p4beta1OutputConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVisionV1p4beta1OutputConfig.to_json())

# convert the object into a dict
google_cloud_vision_v1p4beta1_output_config_dict = google_cloud_vision_v1p4beta1_output_config_instance.to_dict()
# create an instance of GoogleCloudVisionV1p4beta1OutputConfig from a dict
google_cloud_vision_v1p4beta1_output_config_from_dict = GoogleCloudVisionV1p4beta1OutputConfig.from_dict(google_cloud_vision_v1p4beta1_output_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


