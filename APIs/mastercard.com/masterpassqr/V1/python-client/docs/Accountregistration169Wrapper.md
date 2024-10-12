# Accountregistration169Wrapper

Contains the details of the request message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountregistration** | [**Accountregistration169**](Accountregistration169.md) |  | [optional] 

## Example

```python
from openapi_client.models.accountregistration169_wrapper import Accountregistration169Wrapper

# TODO update the JSON string below
json = "{}"
# create an instance of Accountregistration169Wrapper from a JSON string
accountregistration169_wrapper_instance = Accountregistration169Wrapper.from_json(json)
# print the JSON string representation of the object
print(Accountregistration169Wrapper.to_json())

# convert the object into a dict
accountregistration169_wrapper_dict = accountregistration169_wrapper_instance.to_dict()
# create an instance of Accountregistration169Wrapper from a dict
accountregistration169_wrapper_from_dict = Accountregistration169Wrapper.from_dict(accountregistration169_wrapper_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


