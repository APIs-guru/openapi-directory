# ListSecretsResponse

Response message for SecretManagerService.ListSecrets.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token to retrieve the next page of results. Pass this value in ListSecretsRequest.page_token to retrieve the next page. | [optional] 
**secrets** | [**List[Secret]**](Secret.md) | The list of Secrets sorted in reverse by create_time (newest first). | [optional] 
**total_size** | **int** | The total number of Secrets. | [optional] 

## Example

```python
from openapi_client.models.list_secrets_response import ListSecretsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListSecretsResponse from a JSON string
list_secrets_response_instance = ListSecretsResponse.from_json(json)
# print the JSON string representation of the object
print(ListSecretsResponse.to_json())

# convert the object into a dict
list_secrets_response_dict = list_secrets_response_instance.to_dict()
# create an instance of ListSecretsResponse from a dict
list_secrets_response_from_dict = ListSecretsResponse.from_dict(list_secrets_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


