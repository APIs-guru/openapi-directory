# ErrorsErrorSearch200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**List[ErrorsListForGroup200ResponseErrorsInner]**](ErrorsListForGroup200ResponseErrorsInner.md) |  | [optional] 
**has_more_results** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.errors_error_search200_response import ErrorsErrorSearch200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorsErrorSearch200Response from a JSON string
errors_error_search200_response_instance = ErrorsErrorSearch200Response.from_json(json)
# print the JSON string representation of the object
print(ErrorsErrorSearch200Response.to_json())

# convert the object into a dict
errors_error_search200_response_dict = errors_error_search200_response_instance.to_dict()
# create an instance of ErrorsErrorSearch200Response from a dict
errors_error_search200_response_from_dict = ErrorsErrorSearch200Response.from_dict(errors_error_search200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


