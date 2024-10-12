# ResourceMetricCollection

Collection of metric responses

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to next page of resources | [optional] 
**value** | [**List[ResourceMetric]**](ResourceMetric.md) | Collection of resources | [optional] 

## Example

```python
from openapi_client.models.resource_metric_collection import ResourceMetricCollection

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceMetricCollection from a JSON string
resource_metric_collection_instance = ResourceMetricCollection.from_json(json)
# print the JSON string representation of the object
print(ResourceMetricCollection.to_json())

# convert the object into a dict
resource_metric_collection_dict = resource_metric_collection_instance.to_dict()
# create an instance of ResourceMetricCollection from a dict
resource_metric_collection_from_dict = ResourceMetricCollection.from_dict(resource_metric_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


