# NodeLoadInformation

The information of the node load

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**node_load_metric_information** | [**NodeLoadMetricInformation**](NodeLoadMetricInformation.md) |  | [optional] 
**node_name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.node_load_information import NodeLoadInformation

# TODO update the JSON string below
json = "{}"
# create an instance of NodeLoadInformation from a JSON string
node_load_information_instance = NodeLoadInformation.from_json(json)
# print the JSON string representation of the object
print(NodeLoadInformation.to_json())

# convert the object into a dict
node_load_information_dict = node_load_information_instance.to_dict()
# create an instance of NodeLoadInformation from a dict
node_load_information_from_dict = NodeLoadInformation.from_dict(node_load_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


