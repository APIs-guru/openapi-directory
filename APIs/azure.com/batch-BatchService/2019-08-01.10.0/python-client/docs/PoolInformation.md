# PoolInformation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_pool_specification** | [**AutoPoolSpecification**](AutoPoolSpecification.md) |  | [optional] 
**pool_id** | **str** | You must ensure that the Pool referenced by this property exists. If the Pool does not exist at the time the Batch service tries to schedule a Job, no Tasks for the Job will run until you create a Pool with that id. Note that the Batch service will not reject the Job request; it will simply not run Tasks until the Pool exists. You must specify either the Pool ID or the auto Pool specification, but not both. | [optional] 

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


