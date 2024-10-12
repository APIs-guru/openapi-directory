# ComputeRepositoryAccessTokenStatusResponse

`ComputeRepositoryAccessTokenStatus` response message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**token_status** | **str** | Indicates the status of the Git access token. | [optional] 

## Example

```python
from openapi_client.models.compute_repository_access_token_status_response import ComputeRepositoryAccessTokenStatusResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ComputeRepositoryAccessTokenStatusResponse from a JSON string
compute_repository_access_token_status_response_instance = ComputeRepositoryAccessTokenStatusResponse.from_json(json)
# print the JSON string representation of the object
print(ComputeRepositoryAccessTokenStatusResponse.to_json())

# convert the object into a dict
compute_repository_access_token_status_response_dict = compute_repository_access_token_status_response_instance.to_dict()
# create an instance of ComputeRepositoryAccessTokenStatusResponse from a dict
compute_repository_access_token_status_response_from_dict = ComputeRepositoryAccessTokenStatusResponse.from_dict(compute_repository_access_token_status_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


