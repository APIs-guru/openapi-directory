# MetricNamespaceCollection

Represents collection of metric namespaces.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[MetricNamespace]**](MetricNamespace.md) | The values for the metric namespaces. | 

## Example

```python
from openapi_client.models.metric_namespace_collection import MetricNamespaceCollection

# TODO update the JSON string below
json = "{}"
# create an instance of MetricNamespaceCollection from a JSON string
metric_namespace_collection_instance = MetricNamespaceCollection.from_json(json)
# print the JSON string representation of the object
print(MetricNamespaceCollection.to_json())

# convert the object into a dict
metric_namespace_collection_dict = metric_namespace_collection_instance.to_dict()
# create an instance of MetricNamespaceCollection from a dict
metric_namespace_collection_from_dict = MetricNamespaceCollection.from_dict(metric_namespace_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


