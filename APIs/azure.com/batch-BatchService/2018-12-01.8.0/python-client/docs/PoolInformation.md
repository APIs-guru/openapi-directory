# PoolInformation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_pool_specification** | [**AutoPoolSpecification**](AutoPoolSpecification.md) |  | [optional] 
**pool_id** | **str** | You must ensure that the pool referenced by this property exists. If the pool does not exist at the time the Batch service tries to schedule a job, no tasks for the job will run until you create a pool with that id. Note that the Batch service will not reject the job request; it will simply not run tasks until the pool exists. You must specify either the pool ID or the auto pool specification, but not both. | [optional] 

## Example

```python
from openapi_client.models.pool_information import PoolInformation

# TODO update the JSON string below
json = "{}"
# create an instance of PoolInformation from a JSON string
pool_information_instance = PoolInformation.from_json(json)
# print the JSON string representation of the object
print(PoolInformation.to_json())

# convert the object into a dict
pool_information_dict = pool_information_instance.to_dict()
# create an instance of PoolInformation from a dict
pool_information_from_dict = PoolInformation.from_dict(pool_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


