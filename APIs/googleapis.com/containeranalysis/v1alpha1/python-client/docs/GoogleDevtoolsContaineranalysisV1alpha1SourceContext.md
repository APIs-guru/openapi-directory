# GoogleDevtoolsContaineranalysisV1alpha1SourceContext

A SourceContext is a reference to a tree of files. A SourceContext together with a path point to a unique revision of a single file or directory.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloud_repo** | [**GoogleDevtoolsContaineranalysisV1alpha1CloudRepoSourceContext**](GoogleDevtoolsContaineranalysisV1alpha1CloudRepoSourceContext.md) |  | [optional] 
**gerrit** | [**GoogleDevtoolsContaineranalysisV1alpha1GerritSourceContext**](GoogleDevtoolsContaineranalysisV1alpha1GerritSourceContext.md) |  | [optional] 
**git** | [**GoogleDevtoolsContaineranalysisV1alpha1GitSourceContext**](GoogleDevtoolsContaineranalysisV1alpha1GitSourceContext.md) |  | [optional] 
**labels** | **Dict[str, str]** | Labels with user defined metadata. | [optional] 

## Example

```python
from openapi_client.models.google_devtools_containeranalysis_v1alpha1_source_context import GoogleDevtoolsContaineranalysisV1alpha1SourceContext

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleDevtoolsContaineranalysisV1alpha1SourceContext from a JSON string
google_devtools_containeranalysis_v1alpha1_source_context_instance = GoogleDevtoolsContaineranalysisV1alpha1SourceContext.from_json(json)
# print the JSON string representation of the object
print(GoogleDevtoolsContaineranalysisV1alpha1SourceContext.to_json())

# convert the object into a dict
google_devtools_containeranalysis_v1alpha1_source_context_dict = google_devtools_containeranalysis_v1alpha1_source_context_instance.to_dict()
# create an instance of GoogleDevtoolsContaineranalysisV1alpha1SourceContext from a dict
google_devtools_containeranalysis_v1alpha1_source_context_from_dict = GoogleDevtoolsContaineranalysisV1alpha1SourceContext.from_dict(google_devtools_containeranalysis_v1alpha1_source_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


