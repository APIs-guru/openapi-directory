# WorkItemConfigurationsListResult

Work item configuration list result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[WorkItemConfiguration]**](WorkItemConfiguration.md) | An array of work item configurations. | [optional] [readonly] 

## Example

```python
from openapi_client.models.work_item_configurations_list_result import WorkItemConfigurationsListResult

# TODO update the JSON string below
json = "{}"
# create an instance of WorkItemConfigurationsListResult from a JSON string
work_item_configurations_list_result_instance = WorkItemConfigurationsListResult.from_json(json)
# print the JSON string representation of the object
print(WorkItemConfigurationsListResult.to_json())

# convert the object into a dict
work_item_configurations_list_result_dict = work_item_configurations_list_result_instance.to_dict()
# create an instance of WorkItemConfigurationsListResult from a dict
work_item_configurations_list_result_from_dict = WorkItemConfigurationsListResult.from_dict(work_item_configurations_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


