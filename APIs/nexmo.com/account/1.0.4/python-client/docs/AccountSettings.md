# AccountSettings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dr_callback_url** | **str** | The current or updated delivery receipt webhook URI | [optional] 
**max_calls_per_second** | **int** | The maximum number of API calls per second. | [optional] 
**max_inbound_request** | **int** | The maximum number of inbound messages per second. | [optional] 
**max_outbound_request** | **int** | The maximum number of outbound messages per second. | [optional] 
**mo_callback_url** | **str** | The current or updated inbound message webhook URI | [optional] 

## Example

```python
from openapi_client.models.account_settings import AccountSettings

# TODO update the JSON string below
json = "{}"
# create an instance of AccountSettings from a JSON string
account_settings_instance = AccountSettings.from_json(json)
# print the JSON string representation of the object
print(AccountSettings.to_json())

# convert the object into a dict
account_settings_dict = account_settings_instance.to_dict()
# create an instance of AccountSettings from a dict
account_settings_from_dict = AccountSettings.from_dict(account_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


