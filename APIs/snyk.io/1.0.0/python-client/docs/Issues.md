# Issues


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**results** | [**List[IssuesResultsInner]**](IssuesResultsInner.md) | A list of issues | 
**total** | **float** | The total number of results found | 

## Example

```python
from openapi_client.models.issues import Issues

# TODO update the JSON string below
json = "{}"
# create an instance of Issues from a JSON string
issues_instance = Issues.from_json(json)
# print the JSON string representation of the object
print(Issues.to_json())

# convert the object into a dict
issues_dict = issues_instance.to_dict()
# create an instance of Issues from a dict
issues_from_dict = Issues.from_dict(issues_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


