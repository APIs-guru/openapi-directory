# MatrixErrorDetail

Describes a single error or issue with a matrix.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | Output only. A human-readable message about how the error in the TestMatrix. Expands on the &#x60;reason&#x60; field with additional details and possible options to fix the issue. | [optional] [readonly] 
**reason** | **str** | Output only. The reason for the error. This is a constant value in UPPER_SNAKE_CASE that identifies the cause of the error. | [optional] [readonly] 

## Example

```python
from openapi_client.models.matrix_error_detail import MatrixErrorDetail

# TODO update the JSON string below
json = "{}"
# create an instance of MatrixErrorDetail from a JSON string
matrix_error_detail_instance = MatrixErrorDetail.from_json(json)
# print the JSON string representation of the object
print(MatrixErrorDetail.to_json())

# convert the object into a dict
matrix_error_detail_dict = matrix_error_detail_instance.to_dict()
# create an instance of MatrixErrorDetail from a dict
matrix_error_detail_from_dict = MatrixErrorDetail.from_dict(matrix_error_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


