# HierarchiesSortParameter

Definition of sorting of hierarchy nodes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**by** | **str** | Value to use for hierarchy node sorting. When it is set to &#39;CumulativeInstanceCount&#39;, the returned hierarchies are sorted based on the total instances belonging to the hierarchy node and its child hierarchy nodes. When it is set to &#39;Name&#39;, the returned hierarchies are sorted based on the hierarchy name. Optional, default is &#39;CumulativeInstanceCount&#39;. | [optional] 

## Example

```python
from openapi_client.models.hierarchies_sort_parameter import HierarchiesSortParameter

# TODO update the JSON string below
json = "{}"
# create an instance of HierarchiesSortParameter from a JSON string
hierarchies_sort_parameter_instance = HierarchiesSortParameter.from_json(json)
# print the JSON string representation of the object
print(HierarchiesSortParameter.to_json())

# convert the object into a dict
hierarchies_sort_parameter_dict = hierarchies_sort_parameter_instance.to_dict()
# create an instance of HierarchiesSortParameter from a dict
hierarchies_sort_parameter_from_dict = HierarchiesSortParameter.from_dict(hierarchies_sort_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


