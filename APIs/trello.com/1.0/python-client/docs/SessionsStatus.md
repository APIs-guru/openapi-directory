# SessionsStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | One of: active, disconnected or idle | [optional] 

## Example

```python
from openapi_client.models.sessions_status import SessionsStatus

# TODO update the JSON string below
json = "{}"
# create an instance of SessionsStatus from a JSON string
sessions_status_instance = SessionsStatus.from_json(json)
# print the JSON string representation of the object
print(SessionsStatus.to_json())

# convert the object into a dict
sessions_status_dict = sessions_status_instance.to_dict()
# create an instance of SessionsStatus from a dict
sessions_status_from_dict = SessionsStatus.from_dict(sessions_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


