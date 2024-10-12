# NetworkUnblock422Response


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
from openapi_client.models.network_unblock422_response import NetworkUnblock422Response

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkUnblock422Response from a JSON string
network_unblock422_response_instance = NetworkUnblock422Response.from_json(json)
# print the JSON string representation of the object
print(NetworkUnblock422Response.to_json())

# convert the object into a dict
network_unblock422_response_dict = network_unblock422_response_instance.to_dict()
# create an instance of NetworkUnblock422Response from a dict
network_unblock422_response_from_dict = NetworkUnblock422Response.from_dict(network_unblock422_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


