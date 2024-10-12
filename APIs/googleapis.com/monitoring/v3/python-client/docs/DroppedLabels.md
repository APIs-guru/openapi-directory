# DroppedLabels

A set of (label, value) pairs that were removed from a Distribution time series during aggregation and then added as an attachment to a Distribution.Exemplar.The full label set for the exemplars is constructed by using the dropped pairs in combination with the label values that remain on the aggregated Distribution time series. The constructed full label set can be used to identify the specific entity, such as the instance or job, which might be contributing to a long-tail. However, with dropped labels, the storage requirements are reduced because only the aggregated distribution values for a large group of time series are stored.Note that there are no guarantees on ordering of the labels from exemplar-to-exemplar and from distribution-to-distribution in the same stream, and there may be duplicates. It is up to clients to resolve any ambiguities.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label** | **Dict[str, str]** | Map from label to its value, for all labels dropped in any aggregation. | [optional] 

## Example

```python
from openapi_client.models.dropped_labels import DroppedLabels

# TODO update the JSON string below
json = "{}"
# create an instance of DroppedLabels from a JSON string
dropped_labels_instance = DroppedLabels.from_json(json)
# print the JSON string representation of the object
print(DroppedLabels.to_json())

# convert the object into a dict
dropped_labels_dict = dropped_labels_instance.to_dict()
# create an instance of DroppedLabels from a dict
dropped_labels_from_dict = DroppedLabels.from_dict(dropped_labels_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


