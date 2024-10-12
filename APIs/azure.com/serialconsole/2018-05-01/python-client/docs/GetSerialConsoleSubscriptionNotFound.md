# GetSerialConsoleSubscriptionNotFound

Error saying that the provided subscription could not be found

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Error code | [optional] 
**message** | **str** | Subscription not found message | [optional] 

## Example

```python
from openapi_client.models.get_serial_console_subscription_not_found import GetSerialConsoleSubscriptionNotFound

# TODO update the JSON string below
json = "{}"
# create an instance of GetSerialConsoleSubscriptionNotFound from a JSON string
get_serial_console_subscription_not_found_instance = GetSerialConsoleSubscriptionNotFound.from_json(json)
# print the JSON string representation of the object
print(GetSerialConsoleSubscriptionNotFound.to_json())

# convert the object into a dict
get_serial_console_subscription_not_found_dict = get_serial_console_subscription_not_found_instance.to_dict()
# create an instance of GetSerialConsoleSubscriptionNotFound from a dict
get_serial_console_subscription_not_found_from_dict = GetSerialConsoleSubscriptionNotFound.from_dict(get_serial_console_subscription_not_found_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


