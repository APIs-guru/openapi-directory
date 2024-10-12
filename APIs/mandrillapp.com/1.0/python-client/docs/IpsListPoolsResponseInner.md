# IpsListPoolsResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **str** |  | [optional] 
**ips** | [**List[IpsListPoolsResponseInnerIpsInner]**](IpsListPoolsResponseInnerIpsInner.md) |  | [optional] 
**name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.ips_list_pools_response_inner import IpsListPoolsResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of IpsListPoolsResponseInner from a JSON string
ips_list_pools_response_inner_instance = IpsListPoolsResponseInner.from_json(json)
# print the JSON string representation of the object
print(IpsListPoolsResponseInner.to_json())

# convert the object into a dict
ips_list_pools_response_inner_dict = ips_list_pools_response_inner_instance.to_dict()
# create an instance of IpsListPoolsResponseInner from a dict
ips_list_pools_response_inner_from_dict = IpsListPoolsResponseInner.from_dict(ips_list_pools_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


