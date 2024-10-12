# CredentialResults

The list of credential result response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kubeconfigs** | [**List[CredentialResult]**](CredentialResult.md) | Base64-encoded Kubernetes configuration file. | [optional] [readonly] 

## Example

```python
from openapi_client.models.credential_results import CredentialResults

# TODO update the JSON string below
json = "{}"
# create an instance of CredentialResults from a JSON string
credential_results_instance = CredentialResults.from_json(json)
# print the JSON string representation of the object
print(CredentialResults.to_json())

# convert the object into a dict
credential_results_dict = credential_results_instance.to_dict()
# create an instance of CredentialResults from a dict
credential_results_from_dict = CredentialResults.from_dict(credential_results_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


