# GoogleDevtoolsContaineranalysisV1alpha1GerritSourceContext

A SourceContext referring to a Gerrit project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alias_context** | [**GoogleDevtoolsContaineranalysisV1alpha1AliasContext**](GoogleDevtoolsContaineranalysisV1alpha1AliasContext.md) |  | [optional] 
**gerrit_project** | **str** | The full project name within the host. Projects may be nested, so \&quot;project/subproject\&quot; is a valid project name. The \&quot;repo name\&quot; is the hostURI/project. | [optional] 
**host_uri** | **str** | The URI of a running Gerrit instance. | [optional] 
**revision_id** | **str** | A revision (commit) ID. | [optional] 

## Example

```python
from openapi_client.models.google_devtools_containeranalysis_v1alpha1_gerrit_source_context import GoogleDevtoolsContaineranalysisV1alpha1GerritSourceContext

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleDevtoolsContaineranalysisV1alpha1GerritSourceContext from a JSON string
google_devtools_containeranalysis_v1alpha1_gerrit_source_context_instance = GoogleDevtoolsContaineranalysisV1alpha1GerritSourceContext.from_json(json)
# print the JSON string representation of the object
print(GoogleDevtoolsContaineranalysisV1alpha1GerritSourceContext.to_json())

# convert the object into a dict
google_devtools_containeranalysis_v1alpha1_gerrit_source_context_dict = google_devtools_containeranalysis_v1alpha1_gerrit_source_context_instance.to_dict()
# create an instance of GoogleDevtoolsContaineranalysisV1alpha1GerritSourceContext from a dict
google_devtools_containeranalysis_v1alpha1_gerrit_source_context_from_dict = GoogleDevtoolsContaineranalysisV1alpha1GerritSourceContext.from_dict(google_devtools_containeranalysis_v1alpha1_gerrit_source_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


