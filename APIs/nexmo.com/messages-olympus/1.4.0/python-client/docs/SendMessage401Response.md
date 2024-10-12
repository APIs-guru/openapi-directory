# SendMessage401Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detail** | **str** | Additional information about the error | [optional] 
**instance** | **str** | Internal Trace ID | 
**title** | **str** | Generic error message | 
**type** | **str** | Link to error / remediation options | 

## Example

```python
from openapi_client.models.send_message401_response import SendMessage401Response

# TODO update the JSON string below
json = "{}"
# create an instance of SendMessage401Response from a JSON string
send_message401_response_instance = SendMessage401Response.from_json(json)
# print the JSON string representation of the object
print(SendMessage401Response.to_json())

# convert the object into a dict
send_message401_response_dict = send_message401_response_instance.to_dict()
# create an instance of SendMessage401Response from a dict
send_message401_response_from_dict = SendMessage401Response.from_dict(send_message401_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


