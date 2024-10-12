# ResourceMetricDefinition

Metadata for the metrics.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | ResourceMetricDefinition resource specific properties | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**name** | **str** | Resource Name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.resource_metric_definition import ResourceMetricDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceMetricDefinition from a JSON string
resource_metric_definition_instance = ResourceMetricDefinition.from_json(json)
# print the JSON string representation of the object
print(ResourceMetricDefinition.to_json())

# convert the object into a dict
resource_metric_definition_dict = resource_metric_definition_instance.to_dict()
# create an instance of ResourceMetricDefinition from a dict
resource_metric_definition_from_dict = ResourceMetricDefinition.from_dict(resource_metric_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


