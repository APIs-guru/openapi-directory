# RestartInstanceRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_id** | **str** | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). | [optional] 
**validate_only** | **bool** | Optional. If set, performs request validation (e.g. permission checks and any other type of validation), but do not actually execute the restart. | [optional] 

## Example

```python
from openapi_client.models.restart_instance_request import RestartInstanceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RestartInstanceRequest from a JSON string
restart_instance_request_instance = RestartInstanceRequest.from_json(json)
# print the JSON string representation of the object
print(RestartInstanceRequest.to_json())

# convert the object into a dict
restart_instance_request_dict = restart_instance_request_instance.to_dict()
# create an instance of RestartInstanceRequest from a dict
restart_instance_request_from_dict = RestartInstanceRequest.from_dict(restart_instance_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


