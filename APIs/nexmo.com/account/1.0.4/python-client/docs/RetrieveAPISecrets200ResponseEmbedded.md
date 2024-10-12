# RetrieveAPISecrets200ResponseEmbedded

The single `secrets` key returns an array of API secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**secrets** | [**List[SecretInfo]**](SecretInfo.md) | Array of API secrets | [optional] 

## Example

```python
from openapi_client.models.retrieve_api_secrets200_response_embedded import RetrieveAPISecrets200ResponseEmbedded

# TODO update the JSON string below
json = "{}"
# create an instance of RetrieveAPISecrets200ResponseEmbedded from a JSON string
retrieve_api_secrets200_response_embedded_instance = RetrieveAPISecrets200ResponseEmbedded.from_json(json)
# print the JSON string representation of the object
print(RetrieveAPISecrets200ResponseEmbedded.to_json())

# convert the object into a dict
retrieve_api_secrets200_response_embedded_dict = retrieve_api_secrets200_response_embedded_instance.to_dict()
# create an instance of RetrieveAPISecrets200ResponseEmbedded from a dict
retrieve_api_secrets200_response_embedded_from_dict = RetrieveAPISecrets200ResponseEmbedded.from_dict(retrieve_api_secrets200_response_embedded_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


