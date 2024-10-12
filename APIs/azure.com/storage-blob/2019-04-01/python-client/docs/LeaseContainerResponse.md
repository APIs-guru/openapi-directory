# LeaseContainerResponse

Lease Container response schema.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lease_id** | **str** | Returned unique lease ID that must be included with any request to delete the container, or to renew, change, or release the lease. | [optional] 
**lease_time_seconds** | **str** | Approximate time remaining in the lease period, in seconds. | [optional] 

## Example

```python
from openapi_client.models.lease_container_response import LeaseContainerResponse

# TODO update the JSON string below
json = "{}"
# create an instance of LeaseContainerResponse from a JSON string
lease_container_response_instance = LeaseContainerResponse.from_json(json)
# print the JSON string representation of the object
print(LeaseContainerResponse.to_json())

# convert the object into a dict
lease_container_response_dict = lease_container_response_instance.to_dict()
# create an instance of LeaseContainerResponse from a dict
lease_container_response_from_dict = LeaseContainerResponse.from_dict(lease_container_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


