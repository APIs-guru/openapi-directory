# AcceptHubSpokeResponse

The response for HubService.AcceptHubSpoke.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**spoke** | [**Spoke**](Spoke.md) |  | [optional] 

## Example

```python
from openapi_client.models.accept_hub_spoke_response import AcceptHubSpokeResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AcceptHubSpokeResponse from a JSON string
accept_hub_spoke_response_instance = AcceptHubSpokeResponse.from_json(json)
# print the JSON string representation of the object
print(AcceptHubSpokeResponse.to_json())

# convert the object into a dict
accept_hub_spoke_response_dict = accept_hub_spoke_response_instance.to_dict()
# create an instance of AcceptHubSpokeResponse from a dict
accept_hub_spoke_response_from_dict = AcceptHubSpokeResponse.from_dict(accept_hub_spoke_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


