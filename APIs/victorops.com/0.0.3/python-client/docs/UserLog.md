# UserLog


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adjusted_total** | [**OnCallIntervalDuration**](OnCallIntervalDuration.md) |  | [optional] 
**log** | [**List[OnCallInterval]**](OnCallInterval.md) |  | [optional] 
**total** | [**OnCallIntervalDuration**](OnCallIntervalDuration.md) |  | [optional] 
**user_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.user_log import UserLog

# TODO update the JSON string below
json = "{}"
# create an instance of UserLog from a JSON string
user_log_instance = UserLog.from_json(json)
# print the JSON string representation of the object
print(UserLog.to_json())

# convert the object into a dict
user_log_dict = user_log_instance.to_dict()
# create an instance of UserLog from a dict
user_log_from_dict = UserLog.from_dict(user_log_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


