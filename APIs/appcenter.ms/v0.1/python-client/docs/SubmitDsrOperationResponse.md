# SubmitDsrOperationResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** | The status of the DSR operation | [optional] 

## Example

```python
from openapi_client.models.submit_dsr_operation_response import SubmitDsrOperationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SubmitDsrOperationResponse from a JSON string
submit_dsr_operation_response_instance = SubmitDsrOperationResponse.from_json(json)
# print the JSON string representation of the object
print(SubmitDsrOperationResponse.to_json())

# convert the object into a dict
submit_dsr_operation_response_dict = submit_dsr_operation_response_instance.to_dict()
# create an instance of SubmitDsrOperationResponse from a dict
submit_dsr_operation_response_from_dict = SubmitDsrOperationResponse.from_dict(submit_dsr_operation_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


