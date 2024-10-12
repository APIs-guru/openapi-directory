# CreateAPISecret400Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detail** | **str** | More detail regarding this error, including the API key supplied | [optional] 
**instance** | **str** | Internal Trace ID | [optional] 
**invalid_parameters** | [**List[CreateAPISecret400ResponseInvalidParametersInner]**](CreateAPISecret400ResponseInvalidParametersInner.md) | Array of the parameters that are considered invalid, and explanations of why | [optional] 
**title** | **str** | Description of the error | [optional] 
**type** | **str** | URL for further information | [optional] 

## Example

```python
from openapi_client.models.create_api_secret400_response import CreateAPISecret400Response

# TODO update the JSON string below
json = "{}"
# create an instance of CreateAPISecret400Response from a JSON string
create_api_secret400_response_instance = CreateAPISecret400Response.from_json(json)
# print the JSON string representation of the object
print(CreateAPISecret400Response.to_json())

# convert the object into a dict
create_api_secret400_response_dict = create_api_secret400_response_instance.to_dict()
# create an instance of CreateAPISecret400Response from a dict
create_api_secret400_response_from_dict = CreateAPISecret400Response.from_dict(create_api_secret400_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


