# ErrorInternal


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detail** | **str** | Additional information about the error | 
**instance** | **str** | Internal Trace ID | 
**title** | **str** | Generic error message | 
**type** | **str** | Link to error / remediation options | 

## Example

```python
from openapi_client.models.error_internal import ErrorInternal

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorInternal from a JSON string
error_internal_instance = ErrorInternal.from_json(json)
# print the JSON string representation of the object
print(ErrorInternal.to_json())

# convert the object into a dict
error_internal_dict = error_internal_instance.to_dict()
# create an instance of ErrorInternal from a dict
error_internal_from_dict = ErrorInternal.from_dict(error_internal_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


