# IpPoolModel

Properties of an IpPool.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_prefix** | **str** | The address prefix. | [optional] 
**end_ip_address** | **str** | The ending IP address. | [optional] 
**number_of_allocated_ip_addresses** | **int** | The number of currently allocated IP addresses. | [optional] 
**number_of_ip_addresses** | **int** | The total number of IP addresses. | [optional] 
**number_of_ip_addresses_in_transition** | **int** | The current number of IP addresses in transition. | [optional] 
**start_ip_address** | **str** | The starting IP address. | [optional] 

## Example

```python
from openapi_client.models.ip_pool_model import IpPoolModel

# TODO update the JSON string below
json = "{}"
# create an instance of IpPoolModel from a JSON string
ip_pool_model_instance = IpPoolModel.from_json(json)
# print the JSON string representation of the object
print(IpPoolModel.to_json())

# convert the object into a dict
ip_pool_model_dict = ip_pool_model_instance.to_dict()
# create an instance of IpPoolModel from a dict
ip_pool_model_from_dict = IpPoolModel.from_dict(ip_pool_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


