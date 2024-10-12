# AccountEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** |  | [optional] 
**type** | [**EventType**](EventType.md) |  | [optional] 

## Example

```python
from openapi_client.models.account_event import AccountEvent

# TODO update the JSON string below
json = "{}"
# create an instance of AccountEvent from a JSON string
account_event_instance = AccountEvent.from_json(json)
# print the JSON string representation of the object
print(AccountEvent.to_json())

# convert the object into a dict
account_event_dict = account_event_instance.to_dict()
# create an instance of AccountEvent from a dict
account_event_from_dict = AccountEvent.from_dict(account_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


