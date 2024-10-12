# RetryPolicy

Information about the retry policy for an event subscription.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_time_to_live_in_minutes** | **int** | Time To Live (in minutes) for events. | [optional] 
**max_delivery_attempts** | **int** | Maximum number of delivery retry attempts for events. | [optional] 

## Example

```python
from openapi_client.models.retry_policy import RetryPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of RetryPolicy from a JSON string
retry_policy_instance = RetryPolicy.from_json(json)
# print the JSON string representation of the object
print(RetryPolicy.to_json())

# convert the object into a dict
retry_policy_dict = retry_policy_instance.to_dict()
# create an instance of RetryPolicy from a dict
retry_policy_from_dict = RetryPolicy.from_dict(retry_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


