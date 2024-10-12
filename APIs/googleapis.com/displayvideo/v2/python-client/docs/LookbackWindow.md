# LookbackWindow

Specifies how many days into the past to look when determining whether to record a conversion.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**click_days** | **int** | Lookback window, in days, from the last time a given user clicked on one of your ads. | [optional] 
**impression_days** | **int** | Lookback window, in days, from the last time a given user viewed one of your ads. | [optional] 

## Example

```python
from openapi_client.models.lookback_window import LookbackWindow

# TODO update the JSON string below
json = "{}"
# create an instance of LookbackWindow from a JSON string
lookback_window_instance = LookbackWindow.from_json(json)
# print the JSON string representation of the object
print(LookbackWindow.to_json())

# convert the object into a dict
lookback_window_dict = lookback_window_instance.to_dict()
# create an instance of LookbackWindow from a dict
lookback_window_from_dict = LookbackWindow.from_dict(lookback_window_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


