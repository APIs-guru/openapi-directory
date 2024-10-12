# MemcacheParameters


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Output only. The unique ID associated with this set of parameters. Users can use this id to determine if the parameters associated with the instance differ from the parameters associated with the nodes. A discrepancy between parameter ids can inform users that they may need to take action to apply parameters on nodes. | [optional] [readonly] 
**params** | **Dict[str, str]** | User defined set of parameters to use in the memcached process. | [optional] 

## Example

```python
from openapi_client.models.memcache_parameters import MemcacheParameters

# TODO update the JSON string below
json = "{}"
# create an instance of MemcacheParameters from a JSON string
memcache_parameters_instance = MemcacheParameters.from_json(json)
# print the JSON string representation of the object
print(MemcacheParameters.to_json())

# convert the object into a dict
memcache_parameters_dict = memcache_parameters_instance.to_dict()
# create an instance of MemcacheParameters from a dict
memcache_parameters_from_dict = MemcacheParameters.from_dict(memcache_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


