# IpPool

This resource defines the range of IP addresses from which addresses are  allocated for nodes within a subnet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**IpPoolModel**](IpPoolModel.md) |  | [optional] 
**id** | **str** | URI of the resource. | [optional] [readonly] 
**location** | **str** | The region where the resource is located. | [optional] 
**name** | **str** | Name of the resource. | [optional] [readonly] 
**tags** | **Dict[str, str]** | List of key-value pairs. | [optional] 
**type** | **str** | Type of resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.ip_pool import IpPool

# TODO update the JSON string below
json = "{}"
# create an instance of IpPool from a JSON string
ip_pool_instance = IpPool.from_json(json)
# print the JSON string representation of the object
print(IpPool.to_json())

# convert the object into a dict
ip_pool_dict = ip_pool_instance.to_dict()
# create an instance of IpPool from a dict
ip_pool_from_dict = IpPool.from_dict(ip_pool_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


