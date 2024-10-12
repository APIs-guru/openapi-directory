# FunctionsTest200Response

Describes the status of the test operation along with error information, if applicable.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**FunctionsTest200ResponseError**](FunctionsTest200ResponseError.md) |  | [optional] 
**status** | **str** | The status of the test operation. | [optional] [readonly] 

## Example

```python
from openapi_client.models.functions_test200_response import FunctionsTest200Response

# TODO update the JSON string below
json = "{}"
# create an instance of FunctionsTest200Response from a JSON string
functions_test200_response_instance = FunctionsTest200Response.from_json(json)
# print the JSON string representation of the object
print(FunctionsTest200Response.to_json())

# convert the object into a dict
functions_test200_response_dict = functions_test200_response_instance.to_dict()
# create an instance of FunctionsTest200Response from a dict
functions_test200_response_from_dict = FunctionsTest200Response.from_dict(functions_test200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


