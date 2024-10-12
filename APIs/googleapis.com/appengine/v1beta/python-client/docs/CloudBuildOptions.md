# CloudBuildOptions

Options for the build operations performed as a part of the version deployment. Only applicable for App Engine flexible environment when creating a version using source code directly.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_yaml_path** | **str** | Path to the yaml file used in deployment, used to determine runtime configuration details.Required for flexible environment builds.See https://cloud.google.com/appengine/docs/standard/python/config/appref for more details. | [optional] 
**cloud_build_timeout** | **str** | The Cloud Build timeout used as part of any dependent builds performed by version creation. Defaults to 10 minutes. | [optional] 

## Example

```python
from openapi_client.models.cloud_build_options import CloudBuildOptions

# TODO update the JSON string below
json = "{}"
# create an instance of CloudBuildOptions from a JSON string
cloud_build_options_instance = CloudBuildOptions.from_json(json)
# print the JSON string representation of the object
print(CloudBuildOptions.to_json())

# convert the object into a dict
cloud_build_options_dict = cloud_build_options_instance.to_dict()
# create an instance of CloudBuildOptions from a dict
cloud_build_options_from_dict = CloudBuildOptions.from_dict(cloud_build_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


