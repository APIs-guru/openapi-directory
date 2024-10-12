# ScaleSettings

scale settings for AML Compute

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_node_count** | **int** | Max number of nodes to use | 
**min_node_count** | **int** | Min number of nodes to use | [optional] 
**node_idle_time_before_scale_down** | **str** | Node Idle Time before scaling down amlCompute | [optional] 

## Example

```python
from openapi_client.models.scale_settings import ScaleSettings

# TODO update the JSON string below
json = "{}"
# create an instance of ScaleSettings from a JSON string
scale_settings_instance = ScaleSettings.from_json(json)
# print the JSON string representation of the object
print(ScaleSettings.to_json())

# convert the object into a dict
scale_settings_dict = scale_settings_instance.to_dict()
# create an instance of ScaleSettings from a dict
scale_settings_from_dict = ScaleSettings.from_dict(scale_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


