# GerritSourceContext

A SourceContext referring to a Gerrit project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alias_context** | [**AliasContext**](AliasContext.md) |  | [optional] 
**gerrit_project** | **str** | The full project name within the host. Projects may be nested, so \&quot;project/subproject\&quot; is a valid project name. The \&quot;repo name\&quot; is the hostURI/project. | [optional] 
**host_uri** | **str** | The URI of a running Gerrit instance. | [optional] 
**revision_id** | **str** | A revision (commit) ID. | [optional] 

## Example

```python
from openapi_client.models.gerrit_source_context import GerritSourceContext

# TODO update the JSON string below
json = "{}"
# create an instance of GerritSourceContext from a JSON string
gerrit_source_context_instance = GerritSourceContext.from_json(json)
# print the JSON string representation of the object
print(GerritSourceContext.to_json())

# convert the object into a dict
gerrit_source_context_dict = gerrit_source_context_instance.to_dict()
# create an instance of GerritSourceContext from a dict
gerrit_source_context_from_dict = GerritSourceContext.from_dict(gerrit_source_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


