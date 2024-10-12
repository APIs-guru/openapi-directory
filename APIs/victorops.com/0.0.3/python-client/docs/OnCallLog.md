# OnCallLog


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end** | **datetime** |  | [optional] 
**start** | **datetime** |  | [optional] 
**team_slug** | **str** |  | [optional] 
**user_logs** | [**List[UserLog]**](UserLog.md) |  | [optional] 

## Example

```python
from openapi_client.models.on_call_log import OnCallLog

# TODO update the JSON string below
json = "{}"
# create an instance of OnCallLog from a JSON string
on_call_log_instance = OnCallLog.from_json(json)
# print the JSON string representation of the object
print(OnCallLog.to_json())

# convert the object into a dict
on_call_log_dict = on_call_log_instance.to_dict()
# create an instance of OnCallLog from a dict
on_call_log_from_dict = OnCallLog.from_dict(on_call_log_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


