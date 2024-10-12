# NetworkUnblockResponseNotFound

Not Found

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detail** | **str** | Verbose description of the server error. | [optional] 
**instance** | **str** | InstanceID | [optional] 
**title** | **str** | Full string text of the HTTP error code. | [optional] 
**type** | **str** | A URL link to the API documentation for this type of error. | [optional] 

## Example

```python
from openapi_client.models.network_unblock_response_not_found import NetworkUnblockResponseNotFound

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkUnblockResponseNotFound from a JSON string
network_unblock_response_not_found_instance = NetworkUnblockResponseNotFound.from_json(json)
# print the JSON string representation of the object
print(NetworkUnblockResponseNotFound.to_json())

# convert the object into a dict
network_unblock_response_not_found_dict = network_unblock_response_not_found_instance.to_dict()
# create an instance of NetworkUnblockResponseNotFound from a dict
network_unblock_response_not_found_from_dict = NetworkUnblockResponseNotFound.from_dict(network_unblock_response_not_found_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


