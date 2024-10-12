# BuildIssue


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** |  | [optional] 
**message** | **str** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.build_issue import BuildIssue

# TODO update the JSON string below
json = "{}"
# create an instance of BuildIssue from a JSON string
build_issue_instance = BuildIssue.from_json(json)
# print the JSON string representation of the object
print(BuildIssue.to_json())

# convert the object into a dict
build_issue_dict = build_issue_instance.to_dict()
# create an instance of BuildIssue from a dict
build_issue_from_dict = BuildIssue.from_dict(build_issue_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


