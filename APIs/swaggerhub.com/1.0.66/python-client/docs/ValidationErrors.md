# ValidationErrors

Represents a [standardization](https://support.smartbear.com/swaggerhub/docs/organizations/api-standardization.html) error or warning

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The error message | 
**line** | **int** | The line number (0-based) where the issue occurs. If, for some reason, the broken rule does not include a line number, defaults to 0. | 
**severity** | **str** | The issue type: &#x60;CRITICAL&#x60; (error) or &#x60;WARNING&#x60; | [optional] 

## Example

```python
from openapi_client.models.validation_errors import ValidationErrors

# TODO update the JSON string below
json = "{}"
# create an instance of ValidationErrors from a JSON string
validation_errors_instance = ValidationErrors.from_json(json)
# print the JSON string representation of the object
print(ValidationErrors.to_json())

# convert the object into a dict
validation_errors_dict = validation_errors_instance.to_dict()
# create an instance of ValidationErrors from a dict
validation_errors_from_dict = ValidationErrors.from_dict(validation_errors_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


