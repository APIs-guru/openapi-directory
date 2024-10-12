# ExitOptions


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dependency_action** | **str** | The default is &#39;satisfy&#39; for exit code 0, and &#39;block&#39; for all other exit conditions. If the Job&#39;s usesTaskDependencies property is set to false, then specifying the dependencyAction property returns an error and the add Task request fails with an invalid property value error; if you are calling the REST API directly, the HTTP status code is 400  (Bad Request). | [optional] 
**job_action** | **str** | The default is none for exit code 0 and terminate for all other exit conditions. If the Job&#39;s onTaskFailed property is noaction, then specifying this property returns an error and the add Task request fails with an invalid property value error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). | [optional] 

## Example

```python
from openapi_client.models.exit_options import ExitOptions

# TODO update the JSON string below
json = "{}"
# create an instance of ExitOptions from a JSON string
exit_options_instance = ExitOptions.from_json(json)
# print the JSON string representation of the object
print(ExitOptions.to_json())

# convert the object into a dict
exit_options_dict = exit_options_instance.to_dict()
# create an instance of ExitOptions from a dict
exit_options_from_dict = ExitOptions.from_dict(exit_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


