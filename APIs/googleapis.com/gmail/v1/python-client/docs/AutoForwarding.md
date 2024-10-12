# AutoForwarding

Auto-forwarding settings for an account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disposition** | **str** | The state that a message should be left in after it has been forwarded. | [optional] 
**email_address** | **str** | Email address to which all incoming messages are forwarded. This email address must be a verified member of the forwarding addresses. | [optional] 
**enabled** | **bool** | Whether all incoming mail is automatically forwarded to another address. | [optional] 

## Example

```python
from openapi_client.models.auto_forwarding import AutoForwarding

# TODO update the JSON string below
json = "{}"
# create an instance of AutoForwarding from a JSON string
auto_forwarding_instance = AutoForwarding.from_json(json)
# print the JSON string representation of the object
print(AutoForwarding.to_json())

# convert the object into a dict
auto_forwarding_dict = auto_forwarding_instance.to_dict()
# create an instance of AutoForwarding from a dict
auto_forwarding_from_dict = AutoForwarding.from_dict(auto_forwarding_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


