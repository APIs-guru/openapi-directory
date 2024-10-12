# IpsSetPool


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_pool** | **bool** |  | [optional] 
**ip** | **str** |  | [optional] 
**key** | **str** |  | [optional] 
**pool** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.ips_set_pool import IpsSetPool

# TODO update the JSON string below
json = "{}"
# create an instance of IpsSetPool from a JSON string
ips_set_pool_instance = IpsSetPool.from_json(json)
# print the JSON string representation of the object
print(IpsSetPool.to_json())

# convert the object into a dict
ips_set_pool_dict = ips_set_pool_instance.to_dict()
# create an instance of IpsSetPool from a dict
ips_set_pool_from_dict = IpsSetPool.from_dict(ips_set_pool_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


