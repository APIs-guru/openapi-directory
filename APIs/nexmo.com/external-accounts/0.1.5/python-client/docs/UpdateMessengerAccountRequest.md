# UpdateMessengerAccountRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_token** | **str** |  | [optional] 
**applications** | **List[str]** |  | [optional] 
**name** | **str** | The new account name | [optional] 

## Example

```python
from openapi_client.models.update_messenger_account_request import UpdateMessengerAccountRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateMessengerAccountRequest from a JSON string
update_messenger_account_request_instance = UpdateMessengerAccountRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateMessengerAccountRequest.to_json())

# convert the object into a dict
update_messenger_account_request_dict = update_messenger_account_request_instance.to_dict()
# create an instance of UpdateMessengerAccountRequest from a dict
update_messenger_account_request_from_dict = UpdateMessengerAccountRequest.from_dict(update_messenger_account_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


