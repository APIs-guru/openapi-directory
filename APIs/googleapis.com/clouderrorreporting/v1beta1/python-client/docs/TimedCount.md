# TimedCount

The number of errors in a given time period. All numbers are approximate since the error events are sampled before counting them.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **str** | Approximate number of occurrences in the given time period. | [optional] 
**end_time** | **str** | End of the time period to which &#x60;count&#x60; refers (excluded). | [optional] 
**start_time** | **str** | Start of the time period to which &#x60;count&#x60; refers (included). | [optional] 

## Example

```python
from openapi_client.models.timed_count import TimedCount

# TODO update the JSON string below
json = "{}"
# create an instance of TimedCount from a JSON string
timed_count_instance = TimedCount.from_json(json)
# print the JSON string representation of the object
print(TimedCount.to_json())

# convert the object into a dict
timed_count_dict = timed_count_instance.to_dict()
# create an instance of TimedCount from a dict
timed_count_from_dict = TimedCount.from_dict(timed_count_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


