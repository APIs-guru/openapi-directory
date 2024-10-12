# ComponentIssuesCount

Count of issues assigned to a component.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**issue_count** | **int** | The count of issues assigned to a component. | [optional] [readonly] 
**var_self** | **str** | The URL for this count of issues for a component. | [optional] [readonly] 

## Example

```python
from openapi_client.models.component_issues_count import ComponentIssuesCount

# TODO update the JSON string below
json = "{}"
# create an instance of ComponentIssuesCount from a JSON string
component_issues_count_instance = ComponentIssuesCount.from_json(json)
# print the JSON string representation of the object
print(ComponentIssuesCount.to_json())

# convert the object into a dict
component_issues_count_dict = component_issues_count_instance.to_dict()
# create an instance of ComponentIssuesCount from a dict
component_issues_count_from_dict = ComponentIssuesCount.from_dict(component_issues_count_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


