# Accountregistration170

Response details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_registration_reference** | **str** | System generated unique account registration identifier. Type: Alphanumeric Special Length: 40 | [optional] 
**account_uri** | **str** | URI describing the account. It will be a direct account reference, i.e. URI scheme will be pan. Valid Values- Refer &#39;Account URIs&#39;.  | [optional] 
**notification_partner_id** | **str** | Service provider partner id registered to receive notifications. Type: Alphanumeric Special Length: 40 | [optional] 
**notification_partner_name** | **str** | Name of the service provider partner id registered. Type: Alphanumeric Special Length: 100 | [optional] 

## Example

```python
from openapi_client.models.accountregistration170 import Accountregistration170

# TODO update the JSON string below
json = "{}"
# create an instance of Accountregistration170 from a JSON string
accountregistration170_instance = Accountregistration170.from_json(json)
# print the JSON string representation of the object
print(Accountregistration170.to_json())

# convert the object into a dict
accountregistration170_dict = accountregistration170_instance.to_dict()
# create an instance of Accountregistration170 from a dict
accountregistration170_from_dict = Accountregistration170.from_dict(accountregistration170_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


