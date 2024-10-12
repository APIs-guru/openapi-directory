# MatrixResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**distances** | **List[List[float]]** | The distance matrix for the specified points in the same order as the time matrix. The distances are in meters. If &#x60;fail_fast&#x3D;false&#x60; the matrix will contain &#x60;null&#x60; for connections that could not be found. | [optional] 
**hints** | [**List[MatrixResponseHintsInner]**](MatrixResponseHintsInner.md) | Optional. Additional response data. | [optional] 
**info** | [**ResponseInfo**](ResponseInfo.md) |  | [optional] 
**times** | **List[List[float]]** | The time matrix for the specified points in the order [[from1-&gt;to1, from1-&gt;to2, ...], [from2-&gt;to1, from2-&gt;to2, ...], ...]. The times are in seconds. If &#x60;fail_fast&#x3D;false&#x60; the matrix will contain &#x60;null&#x60; for connections that could not be found. | [optional] 
**weights** | **List[List[float]]** | The weight matrix for the specified points in the same order as the time matrix. The weights for different vehicles can have a different unit but the weights array is perfectly suited as input for Vehicle Routing Problems as it is currently faster to calculate. If &#x60;fail_fast&#x3D;false&#x60; the matrix will contain &#x60;null&#x60; for connections that could not be found. | [optional] 

## Example

```python
from openapi_client.models.matrix_response import MatrixResponse

# TODO update the JSON string below
json = "{}"
# create an instance of MatrixResponse from a JSON string
matrix_response_instance = MatrixResponse.from_json(json)
# print the JSON string representation of the object
print(MatrixResponse.to_json())

# convert the object into a dict
matrix_response_dict = matrix_response_instance.to_dict()
# create an instance of MatrixResponse from a dict
matrix_response_from_dict = MatrixResponse.from_dict(matrix_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


