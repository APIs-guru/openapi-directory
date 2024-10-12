# RejectHubSpokeResponse

The response for HubService.RejectHubSpoke.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**spoke** | [**Spoke**](Spoke.md) |  | [optional] 

## Example

```python
from openapi_client.models.reject_hub_spoke_response import RejectHubSpokeResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RejectHubSpokeResponse from a JSON string
reject_hub_spoke_response_instance = RejectHubSpokeResponse.from_json(json)
# print the JSON string representation of the object
print(RejectHubSpokeResponse.to_json())

# convert the object into a dict
reject_hub_spoke_response_dict = reject_hub_spoke_response_instance.to_dict()
# create an instance of RejectHubSpokeResponse from a dict
reject_hub_spoke_response_from_dict = RejectHubSpokeResponse.from_dict(reject_hub_spoke_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


