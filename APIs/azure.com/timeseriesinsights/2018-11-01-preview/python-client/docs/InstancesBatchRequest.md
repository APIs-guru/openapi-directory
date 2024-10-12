# InstancesBatchRequest

Request to perform a single operation on a batch of instances. Exactly one of \"get\", \"put\", \"update\" or \"delete\" must be set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delete** | [**InstancesRequestBatchGetOrDelete**](InstancesRequestBatchGetOrDelete.md) |  | [optional] 
**get** | [**InstancesRequestBatchGetOrDelete**](InstancesRequestBatchGetOrDelete.md) |  | [optional] 
**put** | [**List[TimeSeriesInstance]**](TimeSeriesInstance.md) | Time series instances to be created or updated. | [optional] 
**update** | [**List[TimeSeriesInstance]**](TimeSeriesInstance.md) | Time series instances to be updated onlRequest to perform a single operation on a batch of instances. y. If instance does not exist, an error is returned. | [optional] 

## Example

```python
from openapi_client.models.instances_batch_request import InstancesBatchRequest

# TODO update the JSON string below
json = "{}"
# create an instance of InstancesBatchRequest from a JSON string
instances_batch_request_instance = InstancesBatchRequest.from_json(json)
# print the JSON string representation of the object
print(InstancesBatchRequest.to_json())

# convert the object into a dict
instances_batch_request_dict = instances_batch_request_instance.to_dict()
# create an instance of InstancesBatchRequest from a dict
instances_batch_request_from_dict = InstancesBatchRequest.from_dict(instances_batch_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


