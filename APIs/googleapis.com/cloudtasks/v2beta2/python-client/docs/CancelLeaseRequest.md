# CancelLeaseRequest

Request message for canceling a lease using CancelLease.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**response_view** | **str** | The response_view specifies which subset of the Task will be returned. By default response_view is BASIC; not all information is retrieved by default because some data, such as payloads, might be desirable to return only when needed because of its large size or because of the sensitivity of data that it contains. Authorization for FULL requires &#x60;cloudtasks.tasks.fullView&#x60; [Google IAM](https://cloud.google.com/iam/) permission on the Task resource. | [optional] 
**schedule_time** | **str** | Required. The task&#39;s current schedule time, available in the schedule_time returned by LeaseTasks response or RenewLease response. This restriction is to ensure that your worker currently holds the lease. | [optional] 

## Example

```python
from openapi_client.models.cancel_lease_request import CancelLeaseRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CancelLeaseRequest from a JSON string
cancel_lease_request_instance = CancelLeaseRequest.from_json(json)
# print the JSON string representation of the object
print(CancelLeaseRequest.to_json())

# convert the object into a dict
cancel_lease_request_dict = cancel_lease_request_instance.to_dict()
# create an instance of CancelLeaseRequest from a dict
cancel_lease_request_from_dict = CancelLeaseRequest.from_dict(cancel_lease_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


