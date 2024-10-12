# ErrorInvalidId


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detail** | **str** | Additional information about the error | 
**instance** | **str** | Internal Trace ID | 
**title** | **str** | Generic error message | 
**type** | **str** | Link to error / remediation options | 

## Example

```python
from openapi_client.models.error_invalid_id import ErrorInvalidId

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorInvalidId from a JSON string
error_invalid_id_instance = ErrorInvalidId.from_json(json)
# print the JSON string representation of the object
print(ErrorInvalidId.to_json())

# convert the object into a dict
error_invalid_id_dict = error_invalid_id_instance.to_dict()
# create an instance of ErrorInvalidId from a dict
error_invalid_id_from_dict = ErrorInvalidId.from_dict(error_invalid_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


