# VisualizationData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_source_end_token** | **str** | The token signifying the end of a data_source. | [optional] 
**data_source_separator_token** | **str** | The token delimiting a datasource name from the rest of a key in a data_source. | [optional] 
**diagnostic_messages** | [**List[DiagnosticMessage]**](DiagnosticMessage.md) | The list of messages (info, alerts, ...) | [optional] 
**end_key_strings** | **List[str]** | We discretize the entire keyspace into buckets. Assuming each bucket has an inclusive keyrange and covers keys from k(i) ... k(n). In this case k(n) would be an end key for a given range. end_key_string is the collection of all such end keys | [optional] 
**has_pii** | **bool** | Whether this scan contains PII. | [optional] 
**indexed_keys** | **List[str]** | Keys of key ranges that contribute significantly to a given metric Can be thought of as heavy hitters. | [optional] 
**key_separator** | **str** | The token delimiting the key prefixes. | [optional] 
**key_unit** | **str** | The unit for the key: e.g. &#39;key&#39; or &#39;chunk&#39;. | [optional] 
**metrics** | [**List[Metric]**](Metric.md) | The list of data objects for each metric. | [optional] 
**prefix_nodes** | [**List[PrefixNode]**](PrefixNode.md) | The list of extracted key prefix nodes used in the key prefix hierarchy. | [optional] 

## Example

```python
from openapi_client.models.visualization_data import VisualizationData

# TODO update the JSON string below
json = "{}"
# create an instance of VisualizationData from a JSON string
visualization_data_instance = VisualizationData.from_json(json)
# print the JSON string representation of the object
print(VisualizationData.to_json())

# convert the object into a dict
visualization_data_dict = visualization_data_instance.to_dict()
# create an instance of VisualizationData from a dict
visualization_data_from_dict = VisualizationData.from_dict(visualization_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


