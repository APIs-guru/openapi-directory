# PoolPatchProperties

Patchable pool properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**service_level** | **str** | The service level of the file system | [optional] [default to 'Premium']
**size** | **int** | Provisioned size of the pool (in bytes). Allowed values are in 4TiB chunks (value must be multiply of 4398046511104). | [optional] [default to 4398046511104]

## Example

```python
from openapi_client.models.pool_patch_properties import PoolPatchProperties

# TODO update the JSON string below
json = "{}"
# create an instance of PoolPatchProperties from a JSON string
pool_patch_properties_instance = PoolPatchProperties.from_json(json)
# print the JSON string representation of the object
print(PoolPatchProperties.to_json())

# convert the object into a dict
pool_patch_properties_dict = pool_patch_properties_instance.to_dict()
# create an instance of PoolPatchProperties from a dict
pool_patch_properties_from_dict = PoolPatchProperties.from_dict(pool_patch_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


