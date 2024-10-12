# AccountEventPayload


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**balance** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.account_event_payload import AccountEventPayload

# TODO update the JSON string below
json = "{}"
# create an instance of AccountEventPayload from a JSON string
account_event_payload_instance = AccountEventPayload.from_json(json)
# print the JSON string representation of the object
print(AccountEventPayload.to_json())

# convert the object into a dict
account_event_payload_dict = account_event_payload_instance.to_dict()
# create an instance of AccountEventPayload from a dict
account_event_payload_from_dict = AccountEventPayload.from_dict(account_event_payload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


