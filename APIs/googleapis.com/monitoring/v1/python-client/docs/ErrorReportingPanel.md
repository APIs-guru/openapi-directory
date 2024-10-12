# ErrorReportingPanel

A widget that displays a list of error groups.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**project_names** | **List[str]** | The resource name of the Google Cloud Platform project. Written as projects/{projectID} or projects/{projectNumber}, where {projectID} and {projectNumber} can be found in the Google Cloud console (https://support.google.com/cloud/answer/6158840).Examples: projects/my-project-123, projects/5551234. | [optional] 
**services** | **List[str]** | An identifier of the service, such as the name of the executable, job, or Google App Engine service name. This field is expected to have a low number of values that are relatively stable over time, as opposed to version, which can be changed whenever new code is deployed.Contains the service name for error reports extracted from Google App Engine logs or default if the App Engine default service is used. | [optional] 
**versions** | **List[str]** | Represents the source code version that the developer provided, which could represent a version label or a Git SHA-1 hash, for example. For App Engine standard environment, the version is set to the version of the app. | [optional] 

## Example

```python
from openapi_client.models.error_reporting_panel import ErrorReportingPanel

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorReportingPanel from a JSON string
error_reporting_panel_instance = ErrorReportingPanel.from_json(json)
# print the JSON string representation of the object
print(ErrorReportingPanel.to_json())

# convert the object into a dict
error_reporting_panel_dict = error_reporting_panel_instance.to_dict()
# create an instance of ErrorReportingPanel from a dict
error_reporting_panel_from_dict = ErrorReportingPanel.from_dict(error_reporting_panel_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


