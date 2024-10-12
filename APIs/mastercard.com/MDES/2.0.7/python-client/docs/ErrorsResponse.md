# ErrorsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**Errors**](Errors.md) |  | [optional] 

## Example

```python
from openapi_client.models.errors_response import ErrorsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorsResponse from a JSON string
errors_response_instance = ErrorsResponse.from_json(json)
# print the JSON string representation of the object
print(ErrorsResponse.to_json())

# convert the object into a dict
errors_response_dict = errors_response_instance.to_dict()
# create an instance of ErrorsResponse from a dict
errors_response_from_dict = ErrorsResponse.from_dict(errors_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


