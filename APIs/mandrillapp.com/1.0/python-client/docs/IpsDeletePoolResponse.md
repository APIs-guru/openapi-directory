# IpsDeletePoolResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deleted** | **bool** |  | [optional] 
**pool** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.ips_delete_pool_response import IpsDeletePoolResponse

# TODO update the JSON string below
json = "{}"
# create an instance of IpsDeletePoolResponse from a JSON string
ips_delete_pool_response_instance = IpsDeletePoolResponse.from_json(json)
# print the JSON string representation of the object
print(IpsDeletePoolResponse.to_json())

# convert the object into a dict
ips_delete_pool_response_dict = ips_delete_pool_response_instance.to_dict()
# create an instance of IpsDeletePoolResponse from a dict
ips_delete_pool_response_from_dict = IpsDeletePoolResponse.from_dict(ips_delete_pool_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


