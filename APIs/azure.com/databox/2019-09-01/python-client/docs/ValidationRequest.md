# ValidationRequest

Input request for all pre job creation validation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**individual_request_details** | [**List[ValidationInputRequest]**](ValidationInputRequest.md) | List of request details contain validationType and its request as key and value respectively. | 
**validation_category** | **str** | Identify the nature of validation. | 

## Example

```python
from openapi_client.models.validation_request import ValidationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ValidationRequest from a JSON string
validation_request_instance = ValidationRequest.from_json(json)
# print the JSON string representation of the object
print(ValidationRequest.to_json())

# convert the object into a dict
validation_request_dict = validation_request_instance.to_dict()
# create an instance of ValidationRequest from a dict
validation_request_from_dict = ValidationRequest.from_dict(validation_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


