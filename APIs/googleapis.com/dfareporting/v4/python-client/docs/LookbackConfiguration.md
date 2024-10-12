# LookbackConfiguration

Lookback configuration settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**click_duration** | **int** | Lookback window, in days, from the last time a given user clicked on one of your ads. If you enter 0, clicks will not be considered as triggering events for floodlight tracking. If you leave this field blank, the default value for your account will be used. Acceptable values are 0 to 90, inclusive. | [optional] 
**post_impression_activities_duration** | **int** | Lookback window, in days, from the last time a given user viewed one of your ads. If you enter 0, impressions will not be considered as triggering events for floodlight tracking. If you leave this field blank, the default value for your account will be used. Acceptable values are 0 to 90, inclusive. | [optional] 

## Example

```python
from openapi_client.models.lookback_configuration import LookbackConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of LookbackConfiguration from a JSON string
lookback_configuration_instance = LookbackConfiguration.from_json(json)
# print the JSON string representation of the object
print(LookbackConfiguration.to_json())

# convert the object into a dict
lookback_configuration_dict = lookback_configuration_instance.to_dict()
# create an instance of LookbackConfiguration from a dict
lookback_configuration_from_dict = LookbackConfiguration.from_dict(lookback_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


