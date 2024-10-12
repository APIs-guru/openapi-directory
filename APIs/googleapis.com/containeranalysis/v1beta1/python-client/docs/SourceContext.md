# SourceContext

A SourceContext is a reference to a tree of files. A SourceContext together with a path point to a unique revision of a single file or directory.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloud_repo** | [**CloudRepoSourceContext**](CloudRepoSourceContext.md) |  | [optional] 
**gerrit** | [**GerritSourceContext**](GerritSourceContext.md) |  | [optional] 
**git** | [**GitSourceContext**](GitSourceContext.md) |  | [optional] 
**labels** | **Dict[str, str]** | Labels with user defined metadata. | [optional] 

## Example

```python
from openapi_client.models.source_context import SourceContext

# TODO update the JSON string below
json = "{}"
# create an instance of SourceContext from a JSON string
source_context_instance = SourceContext.from_json(json)
# print the JSON string representation of the object
print(SourceContext.to_json())

# convert the object into a dict
source_context_dict = source_context_instance.to_dict()
# create an instance of SourceContext from a dict
source_context_from_dict = SourceContext.from_dict(source_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


