# ValidateRequest

Resource validation request content.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | Expected location of the resource. | 
**name** | **str** | Resource name to verify. | 
**properties** | [**ValidateProperties**](ValidateProperties.md) |  | 
**type** | **str** | Resource type used for verification. | 

## Example

```python
from openapi_client.models.validate_request import ValidateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ValidateRequest from a JSON string
validate_request_instance = ValidateRequest.from_json(json)
# print the JSON string representation of the object
print(ValidateRequest.to_json())

# convert the object into a dict
validate_request_dict = validate_request_instance.to_dict()
# create an instance of ValidateRequest from a dict
validate_request_from_dict = ValidateRequest.from_dict(validate_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


