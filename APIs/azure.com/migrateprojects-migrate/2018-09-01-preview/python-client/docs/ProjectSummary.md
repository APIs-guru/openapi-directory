# ProjectSummary

The project summary class.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**extended_summary** | **Dict[str, str]** | Gets or sets the extended summary. | [optional] 
**instance_type** | **str** | Gets the Instance type. | [optional] [readonly] 
**last_summary_refreshed_time** | **datetime** | Gets or sets the time when summary was last refreshed. | [optional] 
**refresh_summary_state** | **str** | Gets or sets the state of refresh summary. | [optional] 

## Example

```python
from openapi_client.models.project_summary import ProjectSummary

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectSummary from a JSON string
project_summary_instance = ProjectSummary.from_json(json)
# print the JSON string representation of the object
print(ProjectSummary.to_json())

# convert the object into a dict
project_summary_dict = project_summary_instance.to_dict()
# create an instance of ProjectSummary from a dict
project_summary_from_dict = ProjectSummary.from_dict(project_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


