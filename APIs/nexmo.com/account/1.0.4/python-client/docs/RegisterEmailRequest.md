# RegisterEmailRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_ids** | **List[str]** | An optional array of additional ApplicationID&#39;s that the value is to be assigned to. | [optional] 
**name** | **str** | An optional name to be attached to this binding | [optional] 
**provider** | **str** | The delivery method by which the value would be assigned. Always &#x60;email&#x60; | 
**value** | **str** | The email adress to attach to the application(s) | 

## Example

```python
from openapi_client.models.register_email_request import RegisterEmailRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RegisterEmailRequest from a JSON string
register_email_request_instance = RegisterEmailRequest.from_json(json)
# print the JSON string representation of the object
print(RegisterEmailRequest.to_json())

# convert the object into a dict
register_email_request_dict = register_email_request_instance.to_dict()
# create an instance of RegisterEmailRequest from a dict
register_email_request_from_dict = RegisterEmailRequest.from_dict(register_email_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


