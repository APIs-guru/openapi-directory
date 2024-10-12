# ClusterLoadInformation

The information of the cluster load

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_balancing_end_time_utc** | **str** |  | [optional] 
**last_balancing_start_time_utc** | **str** |  | [optional] 
**load_metric_information** | [**List[LoadMetricInformation]**](LoadMetricInformation.md) |  | [optional] 

## Example

```python
from openapi_client.models.cluster_load_information import ClusterLoadInformation

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterLoadInformation from a JSON string
cluster_load_information_instance = ClusterLoadInformation.from_json(json)
# print the JSON string representation of the object
print(ClusterLoadInformation.to_json())

# convert the object into a dict
cluster_load_information_dict = cluster_load_information_instance.to_dict()
# create an instance of ClusterLoadInformation from a dict
cluster_load_information_from_dict = ClusterLoadInformation.from_dict(cluster_load_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


