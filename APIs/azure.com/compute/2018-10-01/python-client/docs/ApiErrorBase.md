# ApiErrorBase

Api error base.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The error code. | [optional] 
**message** | **str** | The error message. | [optional] 
**target** | **str** | The target of the particular error. | [optional] 

## Example

```python
from openapi_client.models.api_error_base import ApiErrorBase

# TODO update the JSON string below
json = "{}"
# create an instance of ApiErrorBase from a JSON string
api_error_base_instance = ApiErrorBase.from_json(json)
# print the JSON string representation of the object
print(ApiErrorBase.to_json())

# convert the object into a dict
api_error_base_dict = api_error_base_instance.to_dict()
# create an instance of ApiErrorBase from a dict
api_error_base_from_dict = ApiErrorBase.from_dict(api_error_base_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


