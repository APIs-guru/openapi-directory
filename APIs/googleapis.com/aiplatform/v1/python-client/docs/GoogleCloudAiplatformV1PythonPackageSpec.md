# GoogleCloudAiplatformV1PythonPackageSpec

The spec of a Python packaged code.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**args** | **List[str]** | Command line arguments to be passed to the Python task. | [optional] 
**env** | [**List[GoogleCloudAiplatformV1EnvVar]**](GoogleCloudAiplatformV1EnvVar.md) | Environment variables to be passed to the python module. Maximum limit is 100. | [optional] 
**executor_image_uri** | **str** | Required. The URI of a container image in Artifact Registry that will run the provided Python package. Vertex AI provides a wide range of executor images with pre-installed packages to meet users&#39; various use cases. See the list of [pre-built containers for training](https://cloud.google.com/vertex-ai/docs/training/pre-built-containers). You must use an image from this list. | [optional] 
**package_uris** | **List[str]** | Required. The Google Cloud Storage location of the Python package files which are the training program and its dependent packages. The maximum number of package URIs is 100. | [optional] 
**python_module** | **str** | Required. The Python module name to run after installing the packages. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_python_package_spec import GoogleCloudAiplatformV1PythonPackageSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1PythonPackageSpec from a JSON string
google_cloud_aiplatform_v1_python_package_spec_instance = GoogleCloudAiplatformV1PythonPackageSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1PythonPackageSpec.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_python_package_spec_dict = google_cloud_aiplatform_v1_python_package_spec_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1PythonPackageSpec from a dict
google_cloud_aiplatform_v1_python_package_spec_from_dict = GoogleCloudAiplatformV1PythonPackageSpec.from_dict(google_cloud_aiplatform_v1_python_package_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


