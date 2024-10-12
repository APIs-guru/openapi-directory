# CreateJobFromTemplateRequest

A request to create a Cloud Dataflow job from a template.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**environment** | [**RuntimeEnvironment**](RuntimeEnvironment.md) |  | [optional] 
**gcs_path** | **str** | Required. A Cloud Storage path to the template from which to create the job. Must be a valid Cloud Storage URL, beginning with &#x60;gs://&#x60;. | [optional] 
**job_name** | **str** | Required. The job name to use for the created job. | [optional] 
**location** | **str** | The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to which to direct the request. | [optional] 
**parameters** | **Dict[str, str]** | The runtime parameters to pass to the job. | [optional] 

## Example

```python
from openapi_client.models.create_job_from_template_request import CreateJobFromTemplateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateJobFromTemplateRequest from a JSON string
create_job_from_template_request_instance = CreateJobFromTemplateRequest.from_json(json)
# print the JSON string representation of the object
print(CreateJobFromTemplateRequest.to_json())

# convert the object into a dict
create_job_from_template_request_dict = create_job_from_template_request_instance.to_dict()
# create an instance of CreateJobFromTemplateRequest from a dict
create_job_from_template_request_from_dict = CreateJobFromTemplateRequest.from_dict(create_job_from_template_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


