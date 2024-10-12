# AutoScaleSettings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**evaluation_interval** | **str** | If omitted, the default value is 15 minutes (PT15M). | [optional] 
**formula** | **str** |  | 

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


