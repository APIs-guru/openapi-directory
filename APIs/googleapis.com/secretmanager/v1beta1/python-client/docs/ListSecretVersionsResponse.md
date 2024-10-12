# ListSecretVersionsResponse

Response message for SecretManagerService.ListSecretVersions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token to retrieve the next page of results. Pass this value in ListSecretVersionsRequest.page_token to retrieve the next page. | [optional] 
**total_size** | **int** | The total number of SecretVersions. | [optional] 
**versions** | [**List[SecretVersion]**](SecretVersion.md) | The list of SecretVersions sorted in reverse by create_time (newest first). | [optional] 

## Example

```python
from openapi_client.models.list_secret_versions_response import ListSecretVersionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListSecretVersionsResponse from a JSON string
list_secret_versions_response_instance = ListSecretVersionsResponse.from_json(json)
# print the JSON string representation of the object
print(ListSecretVersionsResponse.to_json())

# convert the object into a dict
list_secret_versions_response_dict = list_secret_versions_response_instance.to_dict()
# create an instance of ListSecretVersionsResponse from a dict
list_secret_versions_response_from_dict = ListSecretVersionsResponse.from_dict(list_secret_versions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


