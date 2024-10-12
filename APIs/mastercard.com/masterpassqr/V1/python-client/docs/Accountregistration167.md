# Accountregistration167

Contains the details of the request message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_uri** | **str** | URI describing the account. It must be a direct account reference, i.e. URI scheme must be pan. Valid Values- Refer &#39;Account URIs&#39;.   Note: do not provide exp date and CVC when scheme is pan.  | 
**notification_partner_id** | **str** | Service provider partner id being registered to receive notifications. Type: Alphanumeric Special Length: 40 | 

## Example

```python
from openapi_client.models.accountregistration167 import Accountregistration167

# TODO update the JSON string below
json = "{}"
# create an instance of Accountregistration167 from a JSON string
accountregistration167_instance = Accountregistration167.from_json(json)
# print the JSON string representation of the object
print(Accountregistration167.to_json())

# convert the object into a dict
accountregistration167_dict = accountregistration167_instance.to_dict()
# create an instance of Accountregistration167 from a dict
accountregistration167_from_dict = Accountregistration167.from_dict(accountregistration167_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


