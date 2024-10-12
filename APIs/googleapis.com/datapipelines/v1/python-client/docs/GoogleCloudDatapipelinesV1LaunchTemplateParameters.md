# GoogleCloudDatapipelinesV1LaunchTemplateParameters

Parameters to provide to the template being launched.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**environment** | [**GoogleCloudDatapipelinesV1RuntimeEnvironment**](GoogleCloudDatapipelinesV1RuntimeEnvironment.md) |  | [optional] 
**job_name** | **str** | Required. The job name to use for the created job. | [optional] 
**parameters** | **Dict[str, str]** | The runtime parameters to pass to the job. | [optional] 
**transform_name_mapping** | **Dict[str, str]** | Map of transform name prefixes of the job to be replaced to the corresponding name prefixes of the new job. Only applicable when updating a pipeline. | [optional] 
**update** | **bool** | If set, replace the existing pipeline with the name specified by jobName with this pipeline, preserving state. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datapipelines_v1_launch_template_parameters import GoogleCloudDatapipelinesV1LaunchTemplateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatapipelinesV1LaunchTemplateParameters from a JSON string
google_cloud_datapipelines_v1_launch_template_parameters_instance = GoogleCloudDatapipelinesV1LaunchTemplateParameters.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatapipelinesV1LaunchTemplateParameters.to_json())

# convert the object into a dict
google_cloud_datapipelines_v1_launch_template_parameters_dict = google_cloud_datapipelines_v1_launch_template_parameters_instance.to_dict()
# create an instance of GoogleCloudDatapipelinesV1LaunchTemplateParameters from a dict
google_cloud_datapipelines_v1_launch_template_parameters_from_dict = GoogleCloudDatapipelinesV1LaunchTemplateParameters.from_dict(google_cloud_datapipelines_v1_launch_template_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


