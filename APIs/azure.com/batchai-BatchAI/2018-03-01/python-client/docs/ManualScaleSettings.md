# ManualScaleSettings

Manual scale settings for the cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**node_deallocation_option** | [**DeallocationOption**](DeallocationOption.md) |  | [optional] [default to DeallocationOption.REQUEUE]
**target_node_count** | **int** | Default is 0. If autoScaleSettings are not specified, then the Cluster starts with this target. | [default to 0]

## Example

```python
from openapi_client.models.manual_scale_settings import ManualScaleSettings

# TODO update the JSON string below
json = "{}"
# create an instance of ManualScaleSettings from a JSON string
manual_scale_settings_instance = ManualScaleSettings.from_json(json)
# print the JSON string representation of the object
print(ManualScaleSettings.to_json())

# convert the object into a dict
manual_scale_settings_dict = manual_scale_settings_instance.to_dict()
# create an instance of ManualScaleSettings from a dict
manual_scale_settings_from_dict = ManualScaleSettings.from_dict(manual_scale_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


