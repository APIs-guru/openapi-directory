# ErrorErrorModel

Error model information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** |  | 
**details** | [**List[ErrorDetailsModel]**](ErrorDetailsModel.md) | List of error message details. | [optional] 
**inner_error** | **str** |  | [optional] 
**message** | **str** | Error message. | [optional] 

## Example

```python
from openapi_client.models.error_error_model import ErrorErrorModel

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorErrorModel from a JSON string
error_error_model_instance = ErrorErrorModel.from_json(json)
# print the JSON string representation of the object
print(ErrorErrorModel.to_json())

# convert the object into a dict
error_error_model_dict = error_error_model_instance.to_dict()
# create an instance of ErrorErrorModel from a dict
error_error_model_from_dict = ErrorErrorModel.from_dict(error_error_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


