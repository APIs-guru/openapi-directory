# ContaineranalysisGoogleDevtoolsCloudbuildV1Volume

Volume describes a Docker container volume which is mounted into build steps in order to persist files across build step execution.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the volume to mount. Volume names must be unique per build step and must be valid names for Docker volumes. Each named volume must be used by at least two build steps. | [optional] 
**path** | **str** | Path at which to mount the volume. Paths must be absolute and cannot conflict with other volume paths on the same build step or with certain reserved volume paths. | [optional] 

## Example

```python
from openapi_client.models.containeranalysis_google_devtools_cloudbuild_v1_volume import ContaineranalysisGoogleDevtoolsCloudbuildV1Volume

# TODO update the JSON string below
json = "{}"
# create an instance of ContaineranalysisGoogleDevtoolsCloudbuildV1Volume from a JSON string
containeranalysis_google_devtools_cloudbuild_v1_volume_instance = ContaineranalysisGoogleDevtoolsCloudbuildV1Volume.from_json(json)
# print the JSON string representation of the object
print(ContaineranalysisGoogleDevtoolsCloudbuildV1Volume.to_json())

# convert the object into a dict
containeranalysis_google_devtools_cloudbuild_v1_volume_dict = containeranalysis_google_devtools_cloudbuild_v1_volume_instance.to_dict()
# create an instance of ContaineranalysisGoogleDevtoolsCloudbuildV1Volume from a dict
containeranalysis_google_devtools_cloudbuild_v1_volume_from_dict = ContaineranalysisGoogleDevtoolsCloudbuildV1Volume.from_dict(containeranalysis_google_devtools_cloudbuild_v1_volume_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


