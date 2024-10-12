# RejectHubSpokeRequest

The request for HubService.RejectHubSpoke.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**details** | **str** | Optional. Additional information provided by the hub administrator. | [optional] 
**request_id** | **str** | Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that a request doesn&#39;t result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check to see whether the original operation was received. If it was, the server ignores the second request. This behavior prevents clients from mistakenly creating duplicate commitments. The request ID must be a valid UUID, with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). | [optional] 
**spoke_uri** | **str** | Required. The URI of the spoke to reject from the hub. | [optional] 

## Example

```python
from openapi_client.models.reject_hub_spoke_request import RejectHubSpokeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RejectHubSpokeRequest from a JSON string
reject_hub_spoke_request_instance = RejectHubSpokeRequest.from_json(json)
# print the JSON string representation of the object
print(RejectHubSpokeRequest.to_json())

# convert the object into a dict
reject_hub_spoke_request_dict = reject_hub_spoke_request_instance.to_dict()
# create an instance of RejectHubSpokeRequest from a dict
reject_hub_spoke_request_from_dict = RejectHubSpokeRequest.from_dict(reject_hub_spoke_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


