# ModelErrorResponse

The Model Management Service Error object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The error code. | [optional] 
**details** | [**List[ErrorDetails]**](ErrorDetails.md) | An array of error detail objects. | [optional] 
**message** | **str** | The error message. | [optional] 
**status_code** | **int** | The HTTP status code. | [optional] 

## Example

```python
from openapi_client.models.model_error_response import ModelErrorResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ModelErrorResponse from a JSON string
model_error_response_instance = ModelErrorResponse.from_json(json)
# print the JSON string representation of the object
print(ModelErrorResponse.to_json())

# convert the object into a dict
model_error_response_dict = model_error_response_instance.to_dict()
# create an instance of ModelErrorResponse from a dict
model_error_response_from_dict = ModelErrorResponse.from_dict(model_error_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


