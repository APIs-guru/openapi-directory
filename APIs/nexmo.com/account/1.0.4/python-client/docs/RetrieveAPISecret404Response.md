# RetrieveAPISecret404Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detail** | **str** | More detail regarding this error, including the secret ID supplied | 
**instance** | **str** | Internal Trace ID | 
**title** | **str** | Description of the error | 
**type** | **str** | URL for further information | 

## Example

```python
from openapi_client.models.retrieve_api_secret404_response import RetrieveAPISecret404Response

# TODO update the JSON string below
json = "{}"
# create an instance of RetrieveAPISecret404Response from a JSON string
retrieve_api_secret404_response_instance = RetrieveAPISecret404Response.from_json(json)
# print the JSON string representation of the object
print(RetrieveAPISecret404Response.to_json())

# convert the object into a dict
retrieve_api_secret404_response_dict = retrieve_api_secret404_response_instance.to_dict()
# create an instance of RetrieveAPISecret404Response from a dict
retrieve_api_secret404_response_from_dict = RetrieveAPISecret404Response.from_dict(retrieve_api_secret404_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


