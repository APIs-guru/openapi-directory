# FixedScaleSettings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**node_deallocation_option** | [**ComputeNodeDeallocationOption**](ComputeNodeDeallocationOption.md) |  | [optional] 
**resize_timeout** | **str** | The default value is 15 minutes. Timeout values use ISO 8601 format. For example, use PT10M for 10 minutes. The minimum value is 5 minutes. If you specify a value less than 5 minutes, the Batch service rejects the request with an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). | [optional] 
**target_dedicated_nodes** | **int** | At least one of targetDedicatedNodes, targetLowPriority nodes must be set. | [optional] 
**target_low_priority_nodes** | **int** | At least one of targetDedicatedNodes, targetLowPriority nodes must be set. | [optional] 

## Example

```python
from openapi_client.models.fixed_scale_settings import FixedScaleSettings

# TODO update the JSON string below
json = "{}"
# create an instance of FixedScaleSettings from a JSON string
fixed_scale_settings_instance = FixedScaleSettings.from_json(json)
# print the JSON string representation of the object
print(FixedScaleSettings.to_json())

# convert the object into a dict
fixed_scale_settings_dict = fixed_scale_settings_instance.to_dict()
# create an instance of FixedScaleSettings from a dict
fixed_scale_settings_from_dict = FixedScaleSettings.from_dict(fixed_scale_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


