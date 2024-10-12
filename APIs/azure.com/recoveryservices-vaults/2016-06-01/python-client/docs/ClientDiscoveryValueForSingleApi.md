# ClientDiscoveryValueForSingleApi

Available operation details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display** | [**ClientDiscoveryDisplay**](ClientDiscoveryDisplay.md) |  | [optional] 
**name** | **str** | Name of the Operation. | [optional] 
**origin** | **str** | The intended executor of the operation;governs the display of the operation in the RBAC UX and the audit logs UX | [optional] 
**properties** | [**ClientDiscoveryForProperties**](ClientDiscoveryForProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.client_discovery_value_for_single_api import ClientDiscoveryValueForSingleApi

# TODO update the JSON string below
json = "{}"
# create an instance of ClientDiscoveryValueForSingleApi from a JSON string
client_discovery_value_for_single_api_instance = ClientDiscoveryValueForSingleApi.from_json(json)
# print the JSON string representation of the object
print(ClientDiscoveryValueForSingleApi.to_json())

# convert the object into a dict
client_discovery_value_for_single_api_dict = client_discovery_value_for_single_api_instance.to_dict()
# create an instance of ClientDiscoveryValueForSingleApi from a dict
client_discovery_value_for_single_api_from_dict = ClientDiscoveryValueForSingleApi.from_dict(client_discovery_value_for_single_api_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


