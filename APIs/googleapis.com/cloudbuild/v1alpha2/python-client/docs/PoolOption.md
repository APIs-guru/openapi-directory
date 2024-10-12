# PoolOption

Details about how a build should be executed on a `WorkerPool`. See [running builds in a private pool](https://cloud.google.com/build/docs/private-pools/run-builds-in-private-pool) for more information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The &#x60;WorkerPool&#x60; resource to execute the build on. You must have &#x60;cloudbuild.workerpools.use&#x60; on the project hosting the WorkerPool. Format projects/{project}/locations/{location}/workerPools/{workerPoolId} | [optional] 

## Example

```python
from openapi_client.models.pool_option import PoolOption

# TODO update the JSON string below
json = "{}"
# create an instance of PoolOption from a JSON string
pool_option_instance = PoolOption.from_json(json)
# print the JSON string representation of the object
print(PoolOption.to_json())

# convert the object into a dict
pool_option_dict = pool_option_instance.to_dict()
# create an instance of PoolOption from a dict
pool_option_from_dict = PoolOption.from_dict(pool_option_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


