# Accountregistration172

Response details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_registration_reference** | **str** | System generated unique account registration identifier. Type: Alphanumberic Special Length: 40 | [optional] 
**account_uri** | **str** | URI describing the account. It will be a direct account reference, i.e. URI scheme will be pan. Valid Values- Refer &#39;Account URIs&#39;.  | [optional] 
**notification_partner_id** | **str** | Service provider partner id registered to receive notifications. Type: Alphanumeric Special Length: 40 | [optional] 
**notification_partner_name** | **str** | Name of the service provider partner id registered. Type: Alphanumeric Special Length: 100 | [optional] 

## Example

```python
from openapi_client.models.accountregistration172 import Accountregistration172

# TODO update the JSON string below
json = "{}"
# create an instance of Accountregistration172 from a JSON string
accountregistration172_instance = Accountregistration172.from_json(json)
# print the JSON string representation of the object
print(Accountregistration172.to_json())

# convert the object into a dict
accountregistration172_dict = accountregistration172_instance.to_dict()
# create an instance of Accountregistration172 from a dict
accountregistration172_from_dict = Accountregistration172.from_dict(accountregistration172_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


