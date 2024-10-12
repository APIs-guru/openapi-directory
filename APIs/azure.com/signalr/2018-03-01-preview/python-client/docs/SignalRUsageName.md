# SignalRUsageName

Localizable String object containing the name and a localized value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**localized_value** | **str** | Localized name of the usage. | [optional] 
**value** | **str** | The identifier of the usage. | [optional] 

## Example

```python
from openapi_client.models.signal_r_usage_name import SignalRUsageName

# TODO update the JSON string below
json = "{}"
# create an instance of SignalRUsageName from a JSON string
signal_r_usage_name_instance = SignalRUsageName.from_json(json)
# print the JSON string representation of the object
print(SignalRUsageName.to_json())

# convert the object into a dict
signal_r_usage_name_dict = signal_r_usage_name_instance.to_dict()
# create an instance of SignalRUsageName from a dict
signal_r_usage_name_from_dict = SignalRUsageName.from_dict(signal_r_usage_name_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


