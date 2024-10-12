# InstancesSortParameter

Definition of how time series instances are sorted before being returned by search instances call.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**by** | **str** | Value to use for sorting of the time series instances before being returned by search instances call. When it is set to &#39;Rank&#39;, the returned instances are sorted based on the relevance. When it is set to &#39;DisplayName&#39;, the returned results are sorted based on the display name. Display name is the name of the instance if it exists, otherwise, display name is the time series ID. Default is &#39;Rank&#39;. | [optional] 

## Example

```python
from openapi_client.models.instances_sort_parameter import InstancesSortParameter

# TODO update the JSON string below
json = "{}"
# create an instance of InstancesSortParameter from a JSON string
instances_sort_parameter_instance = InstancesSortParameter.from_json(json)
# print the JSON string representation of the object
print(InstancesSortParameter.to_json())

# convert the object into a dict
instances_sort_parameter_dict = instances_sort_parameter_instance.to_dict()
# create an instance of InstancesSortParameter from a dict
instances_sort_parameter_from_dict = InstancesSortParameter.from_dict(instances_sort_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


