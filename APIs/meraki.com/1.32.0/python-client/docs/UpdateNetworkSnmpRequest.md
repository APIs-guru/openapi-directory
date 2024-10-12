# UpdateNetworkSnmpRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access** | **str** | The type of SNMP access. Can be one of &#39;none&#39; (disabled), &#39;community&#39; (V1/V2c), or &#39;users&#39; (V3). | [optional] 
**community_string** | **str** | The SNMP community string. Only relevant if &#39;access&#39; is set to &#39;community&#39;. | [optional] 
**users** | [**List[UpdateNetworkSnmpRequestUsersInner]**](UpdateNetworkSnmpRequestUsersInner.md) | The list of SNMP users. Only relevant if &#39;access&#39; is set to &#39;users&#39;. | [optional] 

## Example

```python
from openapi_client.models.update_network_snmp_request import UpdateNetworkSnmpRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkSnmpRequest from a JSON string
update_network_snmp_request_instance = UpdateNetworkSnmpRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkSnmpRequest.to_json())

# convert the object into a dict
update_network_snmp_request_dict = update_network_snmp_request_instance.to_dict()
# create an instance of UpdateNetworkSnmpRequest from a dict
update_network_snmp_request_from_dict = UpdateNetworkSnmpRequest.from_dict(update_network_snmp_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


