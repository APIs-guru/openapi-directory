# InnerErrorModel

An object containing more specific information about the error. As per Microsoft One API guidelines - https://github.com/Microsoft/api-guidelines/blob/vNext/Guidelines.md#7102-error-condition-responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | A more specific error code than was provided by the containing error. | [optional] 
**inner_error** | [**InnerErrorModel**](InnerErrorModel.md) |  | [optional] 

## Example

```python
from openapi_client.models.inner_error_model import InnerErrorModel

# TODO update the JSON string below
json = "{}"
# create an instance of InnerErrorModel from a JSON string
inner_error_model_instance = InnerErrorModel.from_json(json)
# print the JSON string representation of the object
print(InnerErrorModel.to_json())

# convert the object into a dict
inner_error_model_dict = inner_error_model_instance.to_dict()
# create an instance of InnerErrorModel from a dict
inner_error_model_from_dict = InnerErrorModel.from_dict(inner_error_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


