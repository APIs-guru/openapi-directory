# RetrieveAPISecrets401Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detail** | **str** | More detail regarding this error, including the expected value | [optional] 
**instance** | **str** | Internal Trace ID | [optional] 
**title** | **str** | Description of the error | [optional] 
**type** | **str** | URL for further information | [optional] 

## Example

```python
from openapi_client.models.retrieve_api_secrets401_response import RetrieveAPISecrets401Response

# TODO update the JSON string below
json = "{}"
# create an instance of RetrieveAPISecrets401Response from a JSON string
retrieve_api_secrets401_response_instance = RetrieveAPISecrets401Response.from_json(json)
# print the JSON string representation of the object
print(RetrieveAPISecrets401Response.to_json())

# convert the object into a dict
retrieve_api_secrets401_response_dict = retrieve_api_secrets401_response_instance.to_dict()
# create an instance of RetrieveAPISecrets401Response from a dict
retrieve_api_secrets401_response_from_dict = RetrieveAPISecrets401Response.from_dict(retrieve_api_secrets401_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


