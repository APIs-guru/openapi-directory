# RevokeDnsBindPermissionRequest

Request message for VmwareEngine.RevokeDnsBindPermission

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**principal** | [**Principal**](Principal.md) |  | [optional] 
**request_id** | **str** | Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn&#39;t result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). | [optional] 

## Example

```python
from openapi_client.models.revoke_dns_bind_permission_request import RevokeDnsBindPermissionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RevokeDnsBindPermissionRequest from a JSON string
revoke_dns_bind_permission_request_instance = RevokeDnsBindPermissionRequest.from_json(json)
# print the JSON string representation of the object
print(RevokeDnsBindPermissionRequest.to_json())

# convert the object into a dict
revoke_dns_bind_permission_request_dict = revoke_dns_bind_permission_request_instance.to_dict()
# create an instance of RevokeDnsBindPermissionRequest from a dict
revoke_dns_bind_permission_request_from_dict = RevokeDnsBindPermissionRequest.from_dict(revoke_dns_bind_permission_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


