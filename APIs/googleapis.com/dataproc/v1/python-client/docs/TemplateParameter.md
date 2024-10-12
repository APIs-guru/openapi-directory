# TemplateParameter

A configurable parameter that replaces one or more fields in the template. Parameterizable fields: - Labels - File uris - Job properties - Job arguments - Script variables - Main class (in HadoopJob and SparkJob) - Zone (in ClusterSelector)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Optional. Brief description of the parameter. Must not exceed 1024 characters. | [optional] 
**fields** | **List[str]** | Required. Paths to all fields that the parameter replaces. A field is allowed to appear in at most one parameter&#39;s list of field paths.A field path is similar in syntax to a google.protobuf.FieldMask. For example, a field path that references the zone field of a workflow template&#39;s cluster selector would be specified as placement.clusterSelector.zone.Also, field paths can reference fields using the following syntax: Values in maps can be referenced by key: labels&#39;key&#39; placement.clusterSelector.clusterLabels&#39;key&#39; placement.managedCluster.labels&#39;key&#39; placement.clusterSelector.clusterLabels&#39;key&#39; jobs&#39;step-id&#39;.labels&#39;key&#39; Jobs in the jobs list can be referenced by step-id: jobs&#39;step-id&#39;.hadoopJob.mainJarFileUri jobs&#39;step-id&#39;.hiveJob.queryFileUri jobs&#39;step-id&#39;.pySparkJob.mainPythonFileUri jobs&#39;step-id&#39;.hadoopJob.jarFileUris0 jobs&#39;step-id&#39;.hadoopJob.archiveUris0 jobs&#39;step-id&#39;.hadoopJob.fileUris0 jobs&#39;step-id&#39;.pySparkJob.pythonFileUris0 Items in repeated fields can be referenced by a zero-based index: jobs&#39;step-id&#39;.sparkJob.args0 Other examples: jobs&#39;step-id&#39;.hadoopJob.properties&#39;key&#39; jobs&#39;step-id&#39;.hadoopJob.args0 jobs&#39;step-id&#39;.hiveJob.scriptVariables&#39;key&#39; jobs&#39;step-id&#39;.hadoopJob.mainJarFileUri placement.clusterSelector.zoneIt may not be possible to parameterize maps and repeated fields in their entirety since only individual map values and individual items in repeated fields can be referenced. For example, the following field paths are invalid: placement.clusterSelector.clusterLabels jobs&#39;step-id&#39;.sparkJob.args | [optional] 
**name** | **str** | Required. Parameter name. The parameter name is used as the key, and paired with the parameter value, which are passed to the template when the template is instantiated. The name must contain only capital letters (A-Z), numbers (0-9), and underscores (_), and must not start with a number. The maximum length is 40 characters. | [optional] 
**validation** | [**ParameterValidation**](ParameterValidation.md) |  | [optional] 

## Example

```python
from openapi_client.models.template_parameter import TemplateParameter

# TODO update the JSON string below
json = "{}"
# create an instance of TemplateParameter from a JSON string
template_parameter_instance = TemplateParameter.from_json(json)
# print the JSON string representation of the object
print(TemplateParameter.to_json())

# convert the object into a dict
template_parameter_dict = template_parameter_instance.to_dict()
# create an instance of TemplateParameter from a dict
template_parameter_from_dict = TemplateParameter.from_dict(template_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


