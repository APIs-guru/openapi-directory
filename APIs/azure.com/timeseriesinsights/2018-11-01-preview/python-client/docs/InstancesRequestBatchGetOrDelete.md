# InstancesRequestBatchGetOrDelete

Request to get or delete instances by time series IDs or time series names. Exactly one of \"timeSeriesIds\" or \"names\" must be set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**names** | **List[str]** | List of names of the time series instances to return or delete. | [optional] 
**time_series_ids** | **List[List[object]]** | List of time series IDs of the time series instances to return or delete. | [optional] 

## Example

```python
from openapi_client.models.instances_request_batch_get_or_delete import InstancesRequestBatchGetOrDelete

# TODO update the JSON string below
json = "{}"
# create an instance of InstancesRequestBatchGetOrDelete from a JSON string
instances_request_batch_get_or_delete_instance = InstancesRequestBatchGetOrDelete.from_json(json)
# print the JSON string representation of the object
print(InstancesRequestBatchGetOrDelete.to_json())

# convert the object into a dict
instances_request_batch_get_or_delete_dict = instances_request_batch_get_or_delete_instance.to_dict()
# create an instance of InstancesRequestBatchGetOrDelete from a dict
instances_request_batch_get_or_delete_from_dict = InstancesRequestBatchGetOrDelete.from_dict(instances_request_batch_get_or_delete_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


