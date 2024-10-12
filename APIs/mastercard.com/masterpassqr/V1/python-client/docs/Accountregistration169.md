# Accountregistration169

Contains the details of the request message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_uri** | **str** | URI describing the account. It must be a direct account reference, i.e. URI scheme must be pan. Valid Values- Refer &#39;Account URIs&#39;.  Note: do not provide exp date and CVC when scheme is pan.  | 
**notification_partner_id** | **str** | Service provider partner id being registered to receive notifications. Type: Alphanumeric Special Length: 40 | 

## Example

```python
from openapi_client.models.accountregistration169 import Accountregistration169

# TODO update the JSON string below
json = "{}"
# create an instance of Accountregistration169 from a JSON string
accountregistration169_instance = Accountregistration169.from_json(json)
# print the JSON string representation of the object
print(Accountregistration169.to_json())

# convert the object into a dict
accountregistration169_dict = accountregistration169_instance.to_dict()
# create an instance of Accountregistration169 from a dict
accountregistration169_from_dict = Accountregistration169.from_dict(accountregistration169_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


