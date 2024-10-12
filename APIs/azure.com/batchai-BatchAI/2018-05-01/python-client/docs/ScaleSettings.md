# ScaleSettings

At least one of manual or autoScale settings must be specified. Only one of manual or autoScale settings can be specified. If autoScale settings are specified, the system automatically scales the cluster up and down (within the supplied limits) based on the pending jobs on the cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_scale** | [**AutoScaleSettings**](AutoScaleSettings.md) |  | [optional] 
**manual** | [**ManualScaleSettings**](ManualScaleSettings.md) |  | [optional] 

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


