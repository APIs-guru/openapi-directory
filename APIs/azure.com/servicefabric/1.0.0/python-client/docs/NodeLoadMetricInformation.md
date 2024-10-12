# NodeLoadMetricInformation

The information of the node load metric

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_capacity_violation** | **bool** |  | [optional] 
**name** | **str** |  | [optional] 
**node_buffered_capacity** | **str** |  | [optional] 
**node_capacity** | **str** |  | [optional] 
**node_load** | **str** |  | [optional] 
**node_remaining_buffered_capacity** | **str** |  | [optional] 
**node_remaining_capacity** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.node_load_metric_information import NodeLoadMetricInformation

# TODO update the JSON string below
json = "{}"
# create an instance of NodeLoadMetricInformation from a JSON string
node_load_metric_information_instance = NodeLoadMetricInformation.from_json(json)
# print the JSON string representation of the object
print(NodeLoadMetricInformation.to_json())

# convert the object into a dict
node_load_metric_information_dict = node_load_metric_information_instance.to_dict()
# create an instance of NodeLoadMetricInformation from a dict
node_load_metric_information_from_dict = NodeLoadMetricInformation.from_dict(node_load_metric_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


