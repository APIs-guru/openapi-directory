# PoolProperties

Pool properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pool_id** | **str** | UUID v4 used to identify the Pool | [optional] [readonly] 
**provisioning_state** | **str** | Azure lifecycle management | [optional] [readonly] 
**service_level** | **str** | The service level of the file system | [default to 'Premium']
**size** | **int** | Provisioned size of the pool (in bytes). Allowed values are in 4TiB chunks (value must be multiply of 4398046511104). | [default to 4398046511104]

## Example

```python
from openapi_client.models.pool_properties import PoolProperties

# TODO update the JSON string below
json = "{}"
# create an instance of PoolProperties from a JSON string
pool_properties_instance = PoolProperties.from_json(json)
# print the JSON string representation of the object
print(PoolProperties.to_json())

# convert the object into a dict
pool_properties_dict = pool_properties_instance.to_dict()
# create an instance of PoolProperties from a dict
pool_properties_from_dict = PoolProperties.from_dict(pool_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


