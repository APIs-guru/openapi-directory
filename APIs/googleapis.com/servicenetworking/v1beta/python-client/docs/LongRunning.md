# LongRunning

Describes settings to use when generating API methods that use the long-running operation pattern. All default values below are from those used in the client library generators (e.g. [Java](https://github.com/googleapis/gapic-generator-java/blob/04c2faa191a9b5a10b92392fe8482279c4404803/src/main/java/com/google/api/generator/gapic/composer/common/RetrySettingsComposer.java)).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**initial_poll_delay** | **str** | Initial delay after which the first poll request will be made. Default value: 5 seconds. | [optional] 
**max_poll_delay** | **str** | Maximum time between two subsequent poll requests. Default value: 45 seconds. | [optional] 
**poll_delay_multiplier** | **float** | Multiplier to gradually increase delay between subsequent polls until it reaches max_poll_delay. Default value: 1.5. | [optional] 
**total_poll_timeout** | **str** | Total polling timeout. Default value: 5 minutes. | [optional] 

## Example

```python
from openapi_client.models.long_running import LongRunning

# TODO update the JSON string below
json = "{}"
# create an instance of LongRunning from a JSON string
long_running_instance = LongRunning.from_json(json)
# print the JSON string representation of the object
print(LongRunning.to_json())

# convert the object into a dict
long_running_dict = long_running_instance.to_dict()
# create an instance of LongRunning from a dict
long_running_from_dict = LongRunning.from_dict(long_running_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


