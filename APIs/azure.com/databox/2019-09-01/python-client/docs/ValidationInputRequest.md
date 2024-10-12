# ValidationInputRequest

Minimum fields that must be present in any type of validation request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**validation_type** | **str** | Identifies the type of validation request. | 

## Example

```python
from openapi_client.models.validation_input_request import ValidationInputRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ValidationInputRequest from a JSON string
validation_input_request_instance = ValidationInputRequest.from_json(json)
# print the JSON string representation of the object
print(ValidationInputRequest.to_json())

# convert the object into a dict
validation_input_request_dict = validation_input_request_instance.to_dict()
# create an instance of ValidationInputRequest from a dict
validation_input_request_from_dict = ValidationInputRequest.from_dict(validation_input_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


