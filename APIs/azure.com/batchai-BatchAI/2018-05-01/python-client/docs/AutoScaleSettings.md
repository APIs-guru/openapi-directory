# AutoScaleSettings

Auto-scale settings for the cluster. The system automatically scales the cluster up and down (within minimumNodeCount and maximumNodeCount) based on the number of queued and running jobs assigned to the cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**initial_node_count** | **int** | The number of compute nodes to allocate on cluster creation. Note that this value is used only during cluster creation. Default: 0. | [optional] [default to 0]
**maximum_node_count** | **int** | The maximum number of compute nodes the cluster can have. | 
**minimum_node_count** | **int** | The minimum number of compute nodes the Batch AI service will try to allocate for the cluster. Note, the actual number of nodes can be less than the specified value if the subscription has not enough quota to fulfill the request. | 

## Example

```python
from openapi_client.models.auto_scale_settings import AutoScaleSettings

# TODO update the JSON string below
json = "{}"
# create an instance of AutoScaleSettings from a JSON string
auto_scale_settings_instance = AutoScaleSettings.from_json(json)
# print the JSON string representation of the object
print(AutoScaleSettings.to_json())

# convert the object into a dict
auto_scale_settings_dict = auto_scale_settings_instance.to_dict()
# create an instance of AutoScaleSettings from a dict
auto_scale_settings_from_dict = AutoScaleSettings.from_dict(auto_scale_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


