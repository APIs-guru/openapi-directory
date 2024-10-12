# ClientDiscoveryDisplay

Localized display information of an operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description of the operation having details of what operation is about. | [optional] 
**operation** | **str** | Operations Name itself. | [optional] 
**provider** | **str** | Name of the provider for display purposes | [optional] 
**resource** | **str** | ResourceType for which this Operation can be performed. | [optional] 

## Example

```python
from openapi_client.models.client_discovery_display import ClientDiscoveryDisplay

# TODO update the JSON string below
json = "{}"
# create an instance of ClientDiscoveryDisplay from a JSON string
client_discovery_display_instance = ClientDiscoveryDisplay.from_json(json)
# print the JSON string representation of the object
print(ClientDiscoveryDisplay.to_json())

# convert the object into a dict
client_discovery_display_dict = client_discovery_display_instance.to_dict()
# create an instance of ClientDiscoveryDisplay from a dict
client_discovery_display_from_dict = ClientDiscoveryDisplay.from_dict(client_discovery_display_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


