# ContaineranalysisGoogleDevtoolsCloudbuildV1BuiltImage

An image built by the pipeline.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**digest** | **str** | Docker Registry 2.0 digest. | [optional] 
**name** | **str** | Name used to push the container image to Google Container Registry, as presented to &#x60;docker push&#x60;. | [optional] 
**push_timing** | [**ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan**](ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan.md) |  | [optional] 

## Example

```python
from openapi_client.models.containeranalysis_google_devtools_cloudbuild_v1_built_image import ContaineranalysisGoogleDevtoolsCloudbuildV1BuiltImage

# TODO update the JSON string below
json = "{}"
# create an instance of ContaineranalysisGoogleDevtoolsCloudbuildV1BuiltImage from a JSON string
containeranalysis_google_devtools_cloudbuild_v1_built_image_instance = ContaineranalysisGoogleDevtoolsCloudbuildV1BuiltImage.from_json(json)
# print the JSON string representation of the object
print(ContaineranalysisGoogleDevtoolsCloudbuildV1BuiltImage.to_json())

# convert the object into a dict
containeranalysis_google_devtools_cloudbuild_v1_built_image_dict = containeranalysis_google_devtools_cloudbuild_v1_built_image_instance.to_dict()
# create an instance of ContaineranalysisGoogleDevtoolsCloudbuildV1BuiltImage from a dict
containeranalysis_google_devtools_cloudbuild_v1_built_image_from_dict = ContaineranalysisGoogleDevtoolsCloudbuildV1BuiltImage.from_dict(containeranalysis_google_devtools_cloudbuild_v1_built_image_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


