# ClientDiscoveryResponse

Operations List response which contains list of available APIs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to the next chunk of the response | [optional] 
**value** | [**List[ClientDiscoveryValueForSingleApi]**](ClientDiscoveryValueForSingleApi.md) | List of available operations. | [optional] 

## Example

```python
from openapi_client.models.client_discovery_response import ClientDiscoveryResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ClientDiscoveryResponse from a JSON string
client_discovery_response_instance = ClientDiscoveryResponse.from_json(json)
# print the JSON string representation of the object
print(ClientDiscoveryResponse.to_json())

# convert the object into a dict
client_discovery_response_dict = client_discovery_response_instance.to_dict()
# create an instance of ClientDiscoveryResponse from a dict
client_discovery_response_from_dict = ClientDiscoveryResponse.from_dict(client_discovery_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


