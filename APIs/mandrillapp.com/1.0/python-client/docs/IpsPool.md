# IpsPool


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **str** |  | [optional] 
**ips** | [**List[IpsListPoolsResponseInnerIpsInner]**](IpsListPoolsResponseInnerIpsInner.md) |  | [optional] 
**name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.ips_pool import IpsPool

# TODO update the JSON string below
json = "{}"
# create an instance of IpsPool from a JSON string
ips_pool_instance = IpsPool.from_json(json)
# print the JSON string representation of the object
print(IpsPool.to_json())

# convert the object into a dict
ips_pool_dict = ips_pool_instance.to_dict()
# create an instance of IpsPool from a dict
ips_pool_from_dict = IpsPool.from_dict(ips_pool_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


