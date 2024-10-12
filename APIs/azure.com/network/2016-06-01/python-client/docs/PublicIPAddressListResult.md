# PublicIPAddressListResult

Response for ListPublicIpAddresses Api service call

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Gets the URL to get the next set of results. | [optional] 
**value** | [**List[PublicIPAddress]**](PublicIPAddress.md) | Gets List of publicIP addresses that exists in a resource group | [optional] 

## Example

```python
from openapi_client.models.public_ip_address_list_result import PublicIPAddressListResult

# TODO update the JSON string below
json = "{}"
# create an instance of PublicIPAddressListResult from a JSON string
public_ip_address_list_result_instance = PublicIPAddressListResult.from_json(json)
# print the JSON string representation of the object
print(PublicIPAddressListResult.to_json())

# convert the object into a dict
public_ip_address_list_result_dict = public_ip_address_list_result_instance.to_dict()
# create an instance of PublicIPAddressListResult from a dict
public_ip_address_list_result_from_dict = PublicIPAddressListResult.from_dict(public_ip_address_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


