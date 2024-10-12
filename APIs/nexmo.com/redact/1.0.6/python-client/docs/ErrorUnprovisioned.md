# ErrorUnprovisioned

Unprovisioned

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detail** | **str** | Additional information about the error | 
**instance** | **str** | Internal Trace ID | 
**title** | **str** | Generic error message | 
**type** | **str** | Link to error / remediation options | 

## Example

```python
from openapi_client.models.error_unprovisioned import ErrorUnprovisioned

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorUnprovisioned from a JSON string
error_unprovisioned_instance = ErrorUnprovisioned.from_json(json)
# print the JSON string representation of the object
print(ErrorUnprovisioned.to_json())

# convert the object into a dict
error_unprovisioned_dict = error_unprovisioned_instance.to_dict()
# create an instance of ErrorUnprovisioned from a dict
error_unprovisioned_from_dict = ErrorUnprovisioned.from_dict(error_unprovisioned_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


