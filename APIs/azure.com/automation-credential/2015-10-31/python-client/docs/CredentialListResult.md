# CredentialListResult

The response model for the list credential operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Gets or sets the next link. | [optional] 
**value** | [**List[Credential]**](Credential.md) | Gets or sets a list of credentials. | [optional] 

## Example

```python
from openapi_client.models.credential_list_result import CredentialListResult

# TODO update the JSON string below
json = "{}"
# create an instance of CredentialListResult from a JSON string
credential_list_result_instance = CredentialListResult.from_json(json)
# print the JSON string representation of the object
print(CredentialListResult.to_json())

# convert the object into a dict
credential_list_result_dict = credential_list_result_instance.to_dict()
# create an instance of CredentialListResult from a dict
credential_list_result_from_dict = CredentialListResult.from_dict(credential_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


