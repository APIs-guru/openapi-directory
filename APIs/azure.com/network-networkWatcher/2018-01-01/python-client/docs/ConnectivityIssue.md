# ConnectivityIssue

Information about an issue encountered in the process of checking for connectivity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | **List[Dict[str, str]]** | Provides additional context on the issue. | [optional] [readonly] 
**origin** | **str** | The origin of the issue. | [optional] [readonly] 
**severity** | **str** | The severity of the issue. | [optional] [readonly] 
**type** | **str** | The type of issue. | [optional] [readonly] 

## Example

```python
from openapi_client.models.connectivity_issue import ConnectivityIssue

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectivityIssue from a JSON string
connectivity_issue_instance = ConnectivityIssue.from_json(json)
# print the JSON string representation of the object
print(ConnectivityIssue.to_json())

# convert the object into a dict
connectivity_issue_dict = connectivity_issue_instance.to_dict()
# create an instance of ConnectivityIssue from a dict
connectivity_issue_from_dict = ConnectivityIssue.from_dict(connectivity_issue_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


