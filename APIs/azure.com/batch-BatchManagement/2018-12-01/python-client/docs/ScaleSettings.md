# ScaleSettings

Defines the desired size of the pool. This can either be 'fixedScale' where the requested targetDedicatedNodes is specified, or 'autoScale' which defines a formula which is periodically reevaluated. If this property is not specified, the pool will have a fixed scale with 0 targetDedicatedNodes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_scale** | [**AutoScaleSettings**](AutoScaleSettings.md) |  | [optional] 
**fixed_scale** | [**FixedScaleSettings**](FixedScaleSettings.md) |  | [optional] 

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


