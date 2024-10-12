# ResourceMetricDefinitionCollection

Collection of metric definitions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to next page of resources. | [optional] [readonly] 
**value** | [**List[ResourceMetricDefinition]**](ResourceMetricDefinition.md) | Collection of resources. | 

## Example

```python
from openapi_client.models.resource_metric_definition_collection import ResourceMetricDefinitionCollection

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceMetricDefinitionCollection from a JSON string
resource_metric_definition_collection_instance = ResourceMetricDefinitionCollection.from_json(json)
# print the JSON string representation of the object
print(ResourceMetricDefinitionCollection.to_json())

# convert the object into a dict
resource_metric_definition_collection_dict = resource_metric_definition_collection_instance.to_dict()
# create an instance of ResourceMetricDefinitionCollection from a dict
resource_metric_definition_collection_from_dict = ResourceMetricDefinitionCollection.from_dict(resource_metric_definition_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


