# SlowRequestsBasedTrigger

SlowRequestsBasedTrigger

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Count | [optional] 
**time_interval** | **str** | TimeInterval | [optional] 
**time_taken** | **str** | TimeTaken | [optional] 

## Example

```python
from openapi_client.models.slow_requests_based_trigger import SlowRequestsBasedTrigger

# TODO update the JSON string below
json = "{}"
# create an instance of SlowRequestsBasedTrigger from a JSON string
slow_requests_based_trigger_instance = SlowRequestsBasedTrigger.from_json(json)
# print the JSON string representation of the object
print(SlowRequestsBasedTrigger.to_json())

# convert the object into a dict
slow_requests_based_trigger_dict = slow_requests_based_trigger_instance.to_dict()
# create an instance of SlowRequestsBasedTrigger from a dict
slow_requests_based_trigger_from_dict = SlowRequestsBasedTrigger.from_dict(slow_requests_based_trigger_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


