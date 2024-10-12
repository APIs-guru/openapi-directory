# RedactMessage403Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detail** | **str** | Additional information about the error | 
**instance** | **str** | Internal Trace ID | 
**title** | **str** | Generic error message | 
**type** | **str** | Link to error / remediation options | 

## Example

```python
from openapi_client.models.redact_message403_response import RedactMessage403Response

# TODO update the JSON string below
json = "{}"
# create an instance of RedactMessage403Response from a JSON string
redact_message403_response_instance = RedactMessage403Response.from_json(json)
# print the JSON string representation of the object
print(RedactMessage403Response.to_json())

# convert the object into a dict
redact_message403_response_dict = redact_message403_response_instance.to_dict()
# create an instance of RedactMessage403Response from a dict
redact_message403_response_from_dict = RedactMessage403Response.from_dict(redact_message403_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


