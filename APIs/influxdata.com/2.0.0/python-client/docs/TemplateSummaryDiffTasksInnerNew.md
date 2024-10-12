# TemplateSummaryDiffTasksInnerNew


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cron** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**every** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**offset** | **str** |  | [optional] 
**query** | **str** |  | [optional] 
**status** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.template_summary_diff_tasks_inner_new import TemplateSummaryDiffTasksInnerNew

# TODO update the JSON string below
json = "{}"
# create an instance of TemplateSummaryDiffTasksInnerNew from a JSON string
template_summary_diff_tasks_inner_new_instance = TemplateSummaryDiffTasksInnerNew.from_json(json)
# print the JSON string representation of the object
print(TemplateSummaryDiffTasksInnerNew.to_json())

# convert the object into a dict
template_summary_diff_tasks_inner_new_dict = template_summary_diff_tasks_inner_new_instance.to_dict()
# create an instance of TemplateSummaryDiffTasksInnerNew from a dict
template_summary_diff_tasks_inner_new_from_dict = TemplateSummaryDiffTasksInnerNew.from_dict(template_summary_diff_tasks_inner_new_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


