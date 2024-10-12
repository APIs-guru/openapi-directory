# RefreshRuntimeTokenInternalRequest

Request for getting a new access token.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vm_id** | **str** | Required. The VM hardware token for authenticating the VM. https://cloud.google.com/compute/docs/instances/verifying-instance-identity | [optional] 

## Example

```python
from openapi_client.models.refresh_runtime_token_internal_request import RefreshRuntimeTokenInternalRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RefreshRuntimeTokenInternalRequest from a JSON string
refresh_runtime_token_internal_request_instance = RefreshRuntimeTokenInternalRequest.from_json(json)
# print the JSON string representation of the object
print(RefreshRuntimeTokenInternalRequest.to_json())

# convert the object into a dict
refresh_runtime_token_internal_request_dict = refresh_runtime_token_internal_request_instance.to_dict()
# create an instance of RefreshRuntimeTokenInternalRequest from a dict
refresh_runtime_token_internal_request_from_dict = RefreshRuntimeTokenInternalRequest.from_dict(refresh_runtime_token_internal_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


