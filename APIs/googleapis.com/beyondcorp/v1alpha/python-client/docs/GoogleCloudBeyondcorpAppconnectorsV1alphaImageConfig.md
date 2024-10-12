# GoogleCloudBeyondcorpAppconnectorsV1alphaImageConfig

ImageConfig defines the control plane images to run.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stable_image** | **str** | The stable image that the remote agent will fallback to if the target image fails. Format would be a gcr image path, e.g.: gcr.io/PROJECT-ID/my-image:tag1 | [optional] 
**target_image** | **str** | The initial image the remote agent will attempt to run for the control plane. Format would be a gcr image path, e.g.: gcr.io/PROJECT-ID/my-image:tag1 | [optional] 

## Example

```python
from openapi_client.models.google_cloud_beyondcorp_appconnectors_v1alpha_image_config import GoogleCloudBeyondcorpAppconnectorsV1alphaImageConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudBeyondcorpAppconnectorsV1alphaImageConfig from a JSON string
google_cloud_beyondcorp_appconnectors_v1alpha_image_config_instance = GoogleCloudBeyondcorpAppconnectorsV1alphaImageConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudBeyondcorpAppconnectorsV1alphaImageConfig.to_json())

# convert the object into a dict
google_cloud_beyondcorp_appconnectors_v1alpha_image_config_dict = google_cloud_beyondcorp_appconnectors_v1alpha_image_config_instance.to_dict()
# create an instance of GoogleCloudBeyondcorpAppconnectorsV1alphaImageConfig from a dict
google_cloud_beyondcorp_appconnectors_v1alpha_image_config_from_dict = GoogleCloudBeyondcorpAppconnectorsV1alphaImageConfig.from_dict(google_cloud_beyondcorp_appconnectors_v1alpha_image_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


