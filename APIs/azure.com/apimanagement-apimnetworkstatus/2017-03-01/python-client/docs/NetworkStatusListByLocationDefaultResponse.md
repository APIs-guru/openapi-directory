# NetworkStatusListByLocationDefaultResponse

Error Body contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Service-defined error code. This code serves as a sub-status for the HTTP error code specified in the response. | [optional] 
**details** | [**List[NetworkStatusListByLocationDefaultResponseDetailsInner]**](NetworkStatusListByLocationDefaultResponseDetailsInner.md) | The list of invalid fields send in request, in case of validation error. | [optional] 
**message** | **str** | Human-readable representation of the error. | [optional] 

## Example

```python
from openapi_client.models.network_status_list_by_location_default_response import NetworkStatusListByLocationDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkStatusListByLocationDefaultResponse from a JSON string
network_status_list_by_location_default_response_instance = NetworkStatusListByLocationDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(NetworkStatusListByLocationDefaultResponse.to_json())

# convert the object into a dict
network_status_list_by_location_default_response_dict = network_status_list_by_location_default_response_instance.to_dict()
# create an instance of NetworkStatusListByLocationDefaultResponse from a dict
network_status_list_by_location_default_response_from_dict = NetworkStatusListByLocationDefaultResponse.from_dict(network_status_list_by_location_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


