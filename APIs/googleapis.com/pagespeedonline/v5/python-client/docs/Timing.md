# Timing

Message containing the performance timing data for the Lighthouse run.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **float** | The total duration of Lighthouse&#39;s run. | [optional] 

## Example

```python
from openapi_client.models.timing import Timing

# TODO update the JSON string below
json = "{}"
# create an instance of Timing from a JSON string
timing_instance = Timing.from_json(json)
# print the JSON string representation of the object
print(Timing.to_json())

# convert the object into a dict
timing_dict = timing_instance.to_dict()
# create an instance of Timing from a dict
timing_from_dict = Timing.from_dict(timing_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


