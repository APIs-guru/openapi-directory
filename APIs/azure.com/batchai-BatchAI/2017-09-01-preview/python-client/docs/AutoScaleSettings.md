# AutoScaleSettings

The system automatically scales the cluster up and down (within minimumNodeCount and maximumNodeCount) based on the pending and running jobs on the cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**initial_node_count** | **int** |  | [optional] [default to 0]
**maximum_node_count** | **int** |  | 
**minimum_node_count** | **int** |  | 

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


