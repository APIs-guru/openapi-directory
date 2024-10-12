# ConversionCountingConfig

Settings that control how conversions are counted. All post-click conversions will be counted. A percentage value can be set for post-view conversions counting.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**floodlight_activity_configs** | [**List[TrackingFloodlightActivityConfig]**](TrackingFloodlightActivityConfig.md) | The Floodlight activity configs used to track conversions. The number of conversions counted is the sum of all of the conversions counted by all of the Floodlight activity IDs specified in this field. | [optional] 
**post_view_count_percentage_millis** | **str** | The percentage of post-view conversions to count, in millis (1/1000 of a percent). Must be between 0 and 100000 inclusive. For example, to track 50% of the post-click conversions, set a value of 50000. | [optional] 

## Example

```python
from openapi_client.models.conversion_counting_config import ConversionCountingConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ConversionCountingConfig from a JSON string
conversion_counting_config_instance = ConversionCountingConfig.from_json(json)
# print the JSON string representation of the object
print(ConversionCountingConfig.to_json())

# convert the object into a dict
conversion_counting_config_dict = conversion_counting_config_instance.to_dict()
# create an instance of ConversionCountingConfig from a dict
conversion_counting_config_from_dict = ConversionCountingConfig.from_dict(conversion_counting_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


