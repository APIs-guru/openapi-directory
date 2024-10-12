# SetDataValidationRequest

Sets a data validation rule to every cell in the range. To clear validation in a range, call this with no rule specified.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**range** | [**GridRange**](GridRange.md) |  | [optional] 
**rule** | [**DataValidationRule**](DataValidationRule.md) |  | [optional] 

## Example

```python
from openapi_client.models.set_data_validation_request import SetDataValidationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SetDataValidationRequest from a JSON string
set_data_validation_request_instance = SetDataValidationRequest.from_json(json)
# print the JSON string representation of the object
print(SetDataValidationRequest.to_json())

# convert the object into a dict
set_data_validation_request_dict = set_data_validation_request_instance.to_dict()
# create an instance of SetDataValidationRequest from a dict
set_data_validation_request_from_dict = SetDataValidationRequest.from_dict(set_data_validation_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


