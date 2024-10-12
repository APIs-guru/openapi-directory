# NetworkUnblockResponseUnprocessableNetwork

Invalid Network

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detail** | **str** | Verbose description of the server error. | [optional] 
**instance** | **str** | The Instance ID | [optional] 
**invalid_parameters** | [**List[NetworkUnblockResponseInvalidDurationInvalidParametersInner]**](NetworkUnblockResponseInvalidDurationInvalidParametersInner.md) | Detailed payload of errors. | [optional] 
**title** | **str** | Full string text of the HTTP error code. | [optional] 
**type** | **str** | A URL link to the API documentation for this type of error. | [optional] 

## Example

```python
from openapi_client.models.network_unblock_response_unprocessable_network import NetworkUnblockResponseUnprocessableNetwork

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkUnblockResponseUnprocessableNetwork from a JSON string
network_unblock_response_unprocessable_network_instance = NetworkUnblockResponseUnprocessableNetwork.from_json(json)
# print the JSON string representation of the object
print(NetworkUnblockResponseUnprocessableNetwork.to_json())

# convert the object into a dict
network_unblock_response_unprocessable_network_dict = network_unblock_response_unprocessable_network_instance.to_dict()
# create an instance of NetworkUnblockResponseUnprocessableNetwork from a dict
network_unblock_response_unprocessable_network_from_dict = NetworkUnblockResponseUnprocessableNetwork.from_dict(network_unblock_response_unprocessable_network_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


