# HierarchiesBatchRequest

Request to perform a single operation on a batch of hierarchies. Exactly one of \"get\", \"put\" or \"delete\" must be set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delete** | [**HierarchiesRequestBatchGetDelete**](HierarchiesRequestBatchGetDelete.md) |  | [optional] 
**get** | [**HierarchiesRequestBatchGetDelete**](HierarchiesRequestBatchGetDelete.md) |  | [optional] 
**put** | [**List[TimeSeriesHierarchy]**](TimeSeriesHierarchy.md) | \&quot;put\&quot; should be set while creating or updating hierarchies. | [optional] 

## Example

```python
from openapi_client.models.hierarchies_batch_request import HierarchiesBatchRequest

# TODO update the JSON string below
json = "{}"
# create an instance of HierarchiesBatchRequest from a JSON string
hierarchies_batch_request_instance = HierarchiesBatchRequest.from_json(json)
# print the JSON string representation of the object
print(HierarchiesBatchRequest.to_json())

# convert the object into a dict
hierarchies_batch_request_dict = hierarchies_batch_request_instance.to_dict()
# create an instance of HierarchiesBatchRequest from a dict
hierarchies_batch_request_from_dict = HierarchiesBatchRequest.from_dict(hierarchies_batch_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


