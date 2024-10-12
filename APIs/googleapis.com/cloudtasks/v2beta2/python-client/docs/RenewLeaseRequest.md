# RenewLeaseRequest

Request message for renewing a lease using RenewLease.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lease_duration** | **str** | Required. The desired new lease duration, starting from now. The maximum lease duration is 1 week. &#x60;lease_duration&#x60; will be truncated to the nearest second. | [optional] 
**response_view** | **str** | The response_view specifies which subset of the Task will be returned. By default response_view is BASIC; not all information is retrieved by default because some data, such as payloads, might be desirable to return only when needed because of its large size or because of the sensitivity of data that it contains. Authorization for FULL requires &#x60;cloudtasks.tasks.fullView&#x60; [Google IAM](https://cloud.google.com/iam/) permission on the Task resource. | [optional] 
**schedule_time** | **str** | Required. The task&#39;s current schedule time, available in the schedule_time returned by LeaseTasks response or RenewLease response. This restriction is to ensure that your worker currently holds the lease. | [optional] 

## Example

```python
from openapi_client.models.renew_lease_request import RenewLeaseRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RenewLeaseRequest from a JSON string
renew_lease_request_instance = RenewLeaseRequest.from_json(json)
# print the JSON string representation of the object
print(RenewLeaseRequest.to_json())

# convert the object into a dict
renew_lease_request_dict = renew_lease_request_instance.to_dict()
# create an instance of RenewLeaseRequest from a dict
renew_lease_request_from_dict = RenewLeaseRequest.from_dict(renew_lease_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


