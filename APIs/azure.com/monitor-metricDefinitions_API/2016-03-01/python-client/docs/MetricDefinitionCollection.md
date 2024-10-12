# MetricDefinitionCollection

Represents collection of metric definitions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[MetricDefinition]**](MetricDefinition.md) | the values for the metric definitions. | 

## Example

```python
from openapi_client.models.metric_definition_collection import MetricDefinitionCollection

# TODO update the JSON string below
json = "{}"
# create an instance of MetricDefinitionCollection from a JSON string
metric_definition_collection_instance = MetricDefinitionCollection.from_json(json)
# print the JSON string representation of the object
print(MetricDefinitionCollection.to_json())

# convert the object into a dict
metric_definition_collection_dict = metric_definition_collection_instance.to_dict()
# create an instance of MetricDefinitionCollection from a dict
metric_definition_collection_from_dict = MetricDefinitionCollection.from_dict(metric_definition_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


