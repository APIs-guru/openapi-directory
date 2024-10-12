# LeaseContainerRequest

Lease Container request schema.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** | Specifies the lease action. Can be one of the available actions. | 
**break_period** | **int** | Optional. For a break action, proposed duration the lease should continue before it is broken, in seconds, between 0 and 60. | [optional] 
**lease_duration** | **int** | Required for acquire. Specifies the duration of the lease, in seconds, or negative one (-1) for a lease that never expires. | [optional] 
**lease_id** | **str** | Identifies the lease. Can be specified in any valid GUID string format. | [optional] 
**proposed_lease_id** | **str** | Optional for acquire, required for change. Proposed lease ID, in a GUID string format. | [optional] 

## Example

```python
from openapi_client.models.lease_container_request import LeaseContainerRequest

# TODO update the JSON string below
json = "{}"
# create an instance of LeaseContainerRequest from a JSON string
lease_container_request_instance = LeaseContainerRequest.from_json(json)
# print the JSON string representation of the object
print(LeaseContainerRequest.to_json())

# convert the object into a dict
lease_container_request_dict = lease_container_request_instance.to_dict()
# create an instance of LeaseContainerRequest from a dict
lease_container_request_from_dict = LeaseContainerRequest.from_dict(lease_container_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


