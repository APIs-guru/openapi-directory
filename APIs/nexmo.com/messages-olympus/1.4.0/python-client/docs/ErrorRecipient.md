# ErrorRecipient

Invalid recipient

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detail** | **str** | Additional information about the error | 
**instance** | **str** | Internal Trace ID | 
**title** | **str** | Generic error message | 
**type** | **str** | Link to error / remediation options | 

## Example

```python
from openapi_client.models.error_recipient import ErrorRecipient

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorRecipient from a JSON string
error_recipient_instance = ErrorRecipient.from_json(json)
# print the JSON string representation of the object
print(ErrorRecipient.to_json())

# convert the object into a dict
error_recipient_dict = error_recipient_instance.to_dict()
# create an instance of ErrorRecipient from a dict
error_recipient_from_dict = ErrorRecipient.from_dict(error_recipient_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


