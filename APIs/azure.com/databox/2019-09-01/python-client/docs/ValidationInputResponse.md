# ValidationInputResponse

Minimum properties that should be present in each individual validation response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**Error**](Error.md) |  | [optional] 
**validation_type** | **str** | Identifies the type of validation response. | 

## Example

```python
from openapi_client.models.validation_input_response import ValidationInputResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ValidationInputResponse from a JSON string
validation_input_response_instance = ValidationInputResponse.from_json(json)
# print the JSON string representation of the object
print(ValidationInputResponse.to_json())

# convert the object into a dict
validation_input_response_dict = validation_input_response_instance.to_dict()
# create an instance of ValidationInputResponse from a dict
validation_input_response_from_dict = ValidationInputResponse.from_dict(validation_input_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


