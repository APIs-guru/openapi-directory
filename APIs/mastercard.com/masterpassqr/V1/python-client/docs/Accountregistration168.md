# Accountregistration168

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
from openapi_client.models.accountregistration168 import Accountregistration168

# TODO update the JSON string below
json = "{}"
# create an instance of Accountregistration168 from a JSON string
accountregistration168_instance = Accountregistration168.from_json(json)
# print the JSON string representation of the object
print(Accountregistration168.to_json())

# convert the object into a dict
accountregistration168_dict = accountregistration168_instance.to_dict()
# create an instance of Accountregistration168 from a dict
accountregistration168_from_dict = Accountregistration168.from_dict(accountregistration168_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


