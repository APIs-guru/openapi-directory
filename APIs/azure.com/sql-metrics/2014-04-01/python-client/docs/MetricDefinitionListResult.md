# MetricDefinitionListResult

The response to a list database metric definitions request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[MetricDefinition]**](MetricDefinition.md) | The list of metric definitions for the database. | 

## Example

```python
from openapi_client.models.metric_definition_list_result import MetricDefinitionListResult

# TODO update the JSON string below
json = "{}"
# create an instance of MetricDefinitionListResult from a JSON string
metric_definition_list_result_instance = MetricDefinitionListResult.from_json(json)
# print the JSON string representation of the object
print(MetricDefinitionListResult.to_json())

# convert the object into a dict
metric_definition_list_result_dict = metric_definition_list_result_instance.to_dict()
# create an instance of MetricDefinitionListResult from a dict
metric_definition_list_result_from_dict = MetricDefinitionListResult.from_dict(metric_definition_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


