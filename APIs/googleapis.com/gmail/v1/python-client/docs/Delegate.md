# Delegate

Settings for a delegate. Delegates can read, send, and delete messages, as well as view and add contacts, for the delegator's account. See \"Set up mail delegation\" for more information about delegates.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delegate_email** | **str** | The email address of the delegate. | [optional] 
**verification_status** | **str** | Indicates whether this address has been verified and can act as a delegate for the account. Read-only. | [optional] 

## Example

```python
from openapi_client.models.delegate import Delegate

# TODO update the JSON string below
json = "{}"
# create an instance of Delegate from a JSON string
delegate_instance = Delegate.from_json(json)
# print the JSON string representation of the object
print(Delegate.to_json())

# convert the object into a dict
delegate_dict = delegate_instance.to_dict()
# create an instance of Delegate from a dict
delegate_from_dict = Delegate.from_dict(delegate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


