# MatrixResponseHintsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**details** | **str** | Details of this hint | [optional] 
**invalid_from_points** | **List[float]** | Optional. An array of from_point indices of points that could not be found. Will only be added if &#x60;fail_fast&#x3D;false&#x60; and some &#x60;from_point&#x60;s were not found.&#x60; | [optional] 
**invalid_to_points** | **List[float]** | Optional. An array of to_point indices of points that could not be found. Will only be added if &#x60;fail_fast&#x3D;false&#x60; and some &#x60;to_point&#x60;s were not found.&#x60; | [optional] 
**message** | **str** | Short description of this hint | [optional] 
**point_pairs** | **List[List[float]]** | Optional. An array of two-element arrays representing the from/to_point indices of points for which no connection could be found. Will only be added if &#x60;fail_fast&#x3D;false&#x60; and some connections were not found. | [optional] 

## Example

```python
from openapi_client.models.matrix_response_hints_inner import MatrixResponseHintsInner

# TODO update the JSON string below
json = "{}"
# create an instance of MatrixResponseHintsInner from a JSON string
matrix_response_hints_inner_instance = MatrixResponseHintsInner.from_json(json)
# print the JSON string representation of the object
print(MatrixResponseHintsInner.to_json())

# convert the object into a dict
matrix_response_hints_inner_dict = matrix_response_hints_inner_instance.to_dict()
# create an instance of MatrixResponseHintsInner from a dict
matrix_response_hints_inner_from_dict = MatrixResponseHintsInner.from_dict(matrix_response_hints_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


