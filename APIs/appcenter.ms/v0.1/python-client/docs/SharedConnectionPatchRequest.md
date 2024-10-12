# SharedConnectionPatchRequest

Shared connection patch request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **object** | Represents the data for connecting to service | 
**display_name** | **str** | Display name of the shared connection | [optional] 

## Example

```python
from openapi_client.models.shared_connection_patch_request import SharedConnectionPatchRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SharedConnectionPatchRequest from a JSON string
shared_connection_patch_request_instance = SharedConnectionPatchRequest.from_json(json)
# print the JSON string representation of the object
print(SharedConnectionPatchRequest.to_json())

# convert the object into a dict
shared_connection_patch_request_dict = shared_connection_patch_request_instance.to_dict()
# create an instance of SharedConnectionPatchRequest from a dict
shared_connection_patch_request_from_dict = SharedConnectionPatchRequest.from_dict(shared_connection_patch_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


