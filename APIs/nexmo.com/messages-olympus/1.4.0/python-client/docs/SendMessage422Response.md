# SendMessage422Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detail** | **str** | Additional information about the error | 
**instance** | **str** | Internal Trace ID | 
**title** | **str** | Generic error message | 
**type** | **str** | Link to error / remediation options | 
**invalid_parameters** | [**List[ErrorMessageParamsInvalidParametersInner]**](ErrorMessageParamsInvalidParametersInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.send_message422_response import SendMessage422Response

# TODO update the JSON string below
json = "{}"
# create an instance of SendMessage422Response from a JSON string
send_message422_response_instance = SendMessage422Response.from_json(json)
# print the JSON string representation of the object
print(SendMessage422Response.to_json())

# convert the object into a dict
send_message422_response_dict = send_message422_response_instance.to_dict()
# create an instance of SendMessage422Response from a dict
send_message422_response_from_dict = SendMessage422Response.from_dict(send_message422_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


