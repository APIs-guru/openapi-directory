# ErrorInvalidJson

Invalid JSON

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detail** | **str** | Additional information about the error | 
**instance** | **str** | Internal Trace ID | 
**title** | **str** | Generic error message | 
**type** | **str** | Link to error / remediation options | 

## Example

```python
from openapi_client.models.error_invalid_json import ErrorInvalidJson

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorInvalidJson from a JSON string
error_invalid_json_instance = ErrorInvalidJson.from_json(json)
# print the JSON string representation of the object
print(ErrorInvalidJson.to_json())

# convert the object into a dict
error_invalid_json_dict = error_invalid_json_instance.to_dict()
# create an instance of ErrorInvalidJson from a dict
error_invalid_json_from_dict = ErrorInvalidJson.from_dict(error_invalid_json_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


