# ComputeSizeErrorDetails

Represents the error used to indicate why the target compute size is not applicable.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | The error message. | [optional] 
**severity** | **str** | The severity of the error. | [optional] 

## Example

```python
from openapi_client.models.compute_size_error_details import ComputeSizeErrorDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ComputeSizeErrorDetails from a JSON string
compute_size_error_details_instance = ComputeSizeErrorDetails.from_json(json)
# print the JSON string representation of the object
print(ComputeSizeErrorDetails.to_json())

# convert the object into a dict
compute_size_error_details_dict = compute_size_error_details_instance.to_dict()
# create an instance of ComputeSizeErrorDetails from a dict
compute_size_error_details_from_dict = ComputeSizeErrorDetails.from_dict(compute_size_error_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


