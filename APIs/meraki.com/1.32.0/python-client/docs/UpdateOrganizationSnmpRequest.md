# UpdateOrganizationSnmpRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**peer_ips** | **List[str]** | The list of IPv4 addresses that are allowed to access the SNMP server. | [optional] 
**v2c_enabled** | **bool** | Boolean indicating whether SNMP version 2c is enabled for the organization. | [optional] 
**v3_auth_mode** | **str** | The SNMP version 3 authentication mode. Can be either &#39;MD5&#39; or &#39;SHA&#39;. | [optional] 
**v3_auth_pass** | **str** | The SNMP version 3 authentication password. Must be at least 8 characters if specified. | [optional] 
**v3_enabled** | **bool** | Boolean indicating whether SNMP version 3 is enabled for the organization. | [optional] 
**v3_priv_mode** | **str** | The SNMP version 3 privacy mode. Can be either &#39;DES&#39; or &#39;AES128&#39;. | [optional] 
**v3_priv_pass** | **str** | The SNMP version 3 privacy password. Must be at least 8 characters if specified. | [optional] 

## Example

```python
from openapi_client.models.update_organization_snmp_request import UpdateOrganizationSnmpRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateOrganizationSnmpRequest from a JSON string
update_organization_snmp_request_instance = UpdateOrganizationSnmpRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateOrganizationSnmpRequest.to_json())

# convert the object into a dict
update_organization_snmp_request_dict = update_organization_snmp_request_instance.to_dict()
# create an instance of UpdateOrganizationSnmpRequest from a dict
update_organization_snmp_request_from_dict = UpdateOrganizationSnmpRequest.from_dict(update_organization_snmp_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


