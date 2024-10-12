# MetricDefinitionsListResult

The response to a list metric definitions request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[MetricDefinition]**](MetricDefinition.md) | The list of metric definitions for the account. | [optional] [readonly] 

## Example

```python
from openapi_client.models.metric_definitions_list_result import MetricDefinitionsListResult

# TODO update the JSON string below
json = "{}"
# create an instance of MetricDefinitionsListResult from a JSON string
metric_definitions_list_result_instance = MetricDefinitionsListResult.from_json(json)
# print the JSON string representation of the object
print(MetricDefinitionsListResult.to_json())

# convert the object into a dict
metric_definitions_list_result_dict = metric_definitions_list_result_instance.to_dict()
# create an instance of MetricDefinitionsListResult from a dict
metric_definitions_list_result_from_dict = MetricDefinitionsListResult.from_dict(metric_definitions_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


