# RetrieveAPISecrets200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**embedded** | [**RetrieveAPISecrets200ResponseEmbedded**](RetrieveAPISecrets200ResponseEmbedded.md) |  | [optional] 
**links** | [**SecretMgmtLinks**](SecretMgmtLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.retrieve_api_secrets200_response import RetrieveAPISecrets200Response

# TODO update the JSON string below
json = "{}"
# create an instance of RetrieveAPISecrets200Response from a JSON string
retrieve_api_secrets200_response_instance = RetrieveAPISecrets200Response.from_json(json)
# print the JSON string representation of the object
print(RetrieveAPISecrets200Response.to_json())

# convert the object into a dict
retrieve_api_secrets200_response_dict = retrieve_api_secrets200_response_instance.to_dict()
# create an instance of RetrieveAPISecrets200Response from a dict
retrieve_api_secrets200_response_from_dict = RetrieveAPISecrets200Response.from_dict(retrieve_api_secrets200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


