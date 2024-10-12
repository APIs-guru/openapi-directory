# GoogleCloudBeyondcorpAppconnectorsV1ImageConfig

ImageConfig defines the control plane images to run.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stable_image** | **str** | The stable image that the remote agent will fallback to if the target image fails. Format would be a gcr image path, e.g.: gcr.io/PROJECT-ID/my-image:tag1 | [optional] 
**target_image** | **str** | The initial image the remote agent will attempt to run for the control plane. Format would be a gcr image path, e.g.: gcr.io/PROJECT-ID/my-image:tag1 | [optional] 

## Example

```python
from openapi_client.models.google_cloud_beyondcorp_appconnectors_v1_image_config import GoogleCloudBeyondcorpAppconnectorsV1ImageConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudBeyondcorpAppconnectorsV1ImageConfig from a JSON string
google_cloud_beyondcorp_appconnectors_v1_image_config_instance = GoogleCloudBeyondcorpAppconnectorsV1ImageConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudBeyondcorpAppconnectorsV1ImageConfig.to_json())

# convert the object into a dict
google_cloud_beyondcorp_appconnectors_v1_image_config_dict = google_cloud_beyondcorp_appconnectors_v1_image_config_instance.to_dict()
# create an instance of GoogleCloudBeyondcorpAppconnectorsV1ImageConfig from a dict
google_cloud_beyondcorp_appconnectors_v1_image_config_from_dict = GoogleCloudBeyondcorpAppconnectorsV1ImageConfig.from_dict(google_cloud_beyondcorp_appconnectors_v1_image_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


