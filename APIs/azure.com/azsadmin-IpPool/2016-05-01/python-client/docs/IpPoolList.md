# IpPoolList

Pageable list of IP pools.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URI to the next page. | [optional] 
**value** | [**List[IpPool]**](IpPool.md) | List of IP pools. | [optional] 

## Example

```python
from openapi_client.models.ip_pool_list import IpPoolList

# TODO update the JSON string below
json = "{}"
# create an instance of IpPoolList from a JSON string
ip_pool_list_instance = IpPoolList.from_json(json)
# print the JSON string representation of the object
print(IpPoolList.to_json())

# convert the object into a dict
ip_pool_list_dict = ip_pool_list_instance.to_dict()
# create an instance of IpPoolList from a dict
ip_pool_list_from_dict = IpPoolList.from_dict(ip_pool_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


