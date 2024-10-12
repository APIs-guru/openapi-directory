# GoogleDevtoolsContaineranalysisV1alpha1GitSourceContext

A GitSourceContext denotes a particular revision in a third party Git repository (e.g., GitHub).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**revision_id** | **str** | Required. Git commit hash. | [optional] 
**url** | **str** | Git repository URL. | [optional] 

## Example

```python
from openapi_client.models.google_devtools_containeranalysis_v1alpha1_git_source_context import GoogleDevtoolsContaineranalysisV1alpha1GitSourceContext

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleDevtoolsContaineranalysisV1alpha1GitSourceContext from a JSON string
google_devtools_containeranalysis_v1alpha1_git_source_context_instance = GoogleDevtoolsContaineranalysisV1alpha1GitSourceContext.from_json(json)
# print the JSON string representation of the object
print(GoogleDevtoolsContaineranalysisV1alpha1GitSourceContext.to_json())

# convert the object into a dict
google_devtools_containeranalysis_v1alpha1_git_source_context_dict = google_devtools_containeranalysis_v1alpha1_git_source_context_instance.to_dict()
# create an instance of GoogleDevtoolsContaineranalysisV1alpha1GitSourceContext from a dict
google_devtools_containeranalysis_v1alpha1_git_source_context_from_dict = GoogleDevtoolsContaineranalysisV1alpha1GitSourceContext.from_dict(google_devtools_containeranalysis_v1alpha1_git_source_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


