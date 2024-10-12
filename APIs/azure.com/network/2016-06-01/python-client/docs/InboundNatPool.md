# InboundNatPool

Inbound NAT pool of the load balancer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated | [optional] 
**name** | **str** | Gets name of the resource that is unique within a resource group. This name can be used to access the resource | [optional] 
**properties** | [**InboundNatPoolPropertiesFormat**](InboundNatPoolPropertiesFormat.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] 

## Example

```python
from openapi_client.models.inbound_nat_pool import InboundNatPool

# TODO update the JSON string below
json = "{}"
# create an instance of InboundNatPool from a JSON string
inbound_nat_pool_instance = InboundNatPool.from_json(json)
# print the JSON string representation of the object
print(InboundNatPool.to_json())

# convert the object into a dict
inbound_nat_pool_dict = inbound_nat_pool_instance.to_dict()
# create an instance of InboundNatPool from a dict
inbound_nat_pool_from_dict = InboundNatPool.from_dict(inbound_nat_pool_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


