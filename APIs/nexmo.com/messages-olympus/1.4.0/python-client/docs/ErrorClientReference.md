# ErrorClientReference

Invalid client reference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detail** | **str** | Additional information about the error | 
**instance** | **str** | Internal Trace ID | 
**title** | **str** | Generic error message | 
**type** | **str** | Link to error / remediation options | 

## Example

```python
from openapi_client.models.error_client_reference import ErrorClientReference

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorClientReference from a JSON string
error_client_reference_instance = ErrorClientReference.from_json(json)
# print the JSON string representation of the object
print(ErrorClientReference.to_json())

# convert the object into a dict
error_client_reference_dict = error_client_reference_instance.to_dict()
# create an instance of ErrorClientReference from a dict
error_client_reference_from_dict = ErrorClientReference.from_dict(error_client_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


