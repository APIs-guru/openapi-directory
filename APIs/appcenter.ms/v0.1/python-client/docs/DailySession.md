# DailySession


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** |  | [optional] 
**datetime** | **str** | The ISO 8601 datetime. | [optional] 

## Example

```python
from openapi_client.models.daily_session import DailySession

# TODO update the JSON string below
json = "{}"
# create an instance of DailySession from a JSON string
daily_session_instance = DailySession.from_json(json)
# print the JSON string representation of the object
print(DailySession.to_json())

# convert the object into a dict
daily_session_dict = daily_session_instance.to_dict()
# create an instance of DailySession from a dict
daily_session_from_dict = DailySession.from_dict(daily_session_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


