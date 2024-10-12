# OperationsListDefaultResponse

Response on Error

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | String that can be used to programmatically identify the error. | 
**details** | **str** | An array of JSON objects that MUST contain name/value pairs for code and message, and MAY contain a name/value pair for target, as described above.The contents of this section are service-defined but must adhere to the aforementioned schema. | [optional] 
**message** | **str** | Describes the error in detail and provides debugging information | 
**target** | **str** | The target of the particular error | [optional] 

## Example

```python
from openapi_client.models.operations_list_default_response import OperationsListDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of OperationsListDefaultResponse from a JSON string
operations_list_default_response_instance = OperationsListDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(OperationsListDefaultResponse.to_json())

# convert the object into a dict
operations_list_default_response_dict = operations_list_default_response_instance.to_dict()
# create an instance of OperationsListDefaultResponse from a dict
operations_list_default_response_from_dict = OperationsListDefaultResponse.from_dict(operations_list_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


