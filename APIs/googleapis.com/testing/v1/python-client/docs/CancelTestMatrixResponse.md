# CancelTestMatrixResponse

Response containing the current state of the specified test matrix.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**test_state** | **str** | The current rolled-up state of the test matrix. If this state is already final, then the cancelation request will have no effect. | [optional] 

## Example

```python
from openapi_client.models.cancel_test_matrix_response import CancelTestMatrixResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CancelTestMatrixResponse from a JSON string
cancel_test_matrix_response_instance = CancelTestMatrixResponse.from_json(json)
# print the JSON string representation of the object
print(CancelTestMatrixResponse.to_json())

# convert the object into a dict
cancel_test_matrix_response_dict = cancel_test_matrix_response_instance.to_dict()
# create an instance of CancelTestMatrixResponse from a dict
cancel_test_matrix_response_from_dict = CancelTestMatrixResponse.from_dict(cancel_test_matrix_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


