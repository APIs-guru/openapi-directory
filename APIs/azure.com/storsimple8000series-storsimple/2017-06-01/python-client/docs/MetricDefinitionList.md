# MetricDefinitionList

The list of metric definitions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[MetricDefinition]**](MetricDefinition.md) | The list of metric definitions. | [optional] 

## Example

```python
from openapi_client.models.metric_definition_list import MetricDefinitionList

# TODO update the JSON string below
json = "{}"
# create an instance of MetricDefinitionList from a JSON string
metric_definition_list_instance = MetricDefinitionList.from_json(json)
# print the JSON string representation of the object
print(MetricDefinitionList.to_json())

# convert the object into a dict
metric_definition_list_dict = metric_definition_list_instance.to_dict()
# create an instance of MetricDefinitionList from a dict
metric_definition_list_from_dict = MetricDefinitionList.from_dict(metric_definition_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


