# AddSmsVerificationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sms** | **str** |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.add_sms_verification_request import AddSmsVerificationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddSmsVerificationRequest from a JSON string
add_sms_verification_request_instance = AddSmsVerificationRequest.from_json(json)
# print the JSON string representation of the object
print(AddSmsVerificationRequest.to_json())

# convert the object into a dict
add_sms_verification_request_dict = add_sms_verification_request_instance.to_dict()
# create an instance of AddSmsVerificationRequest from a dict
add_sms_verification_request_from_dict = AddSmsVerificationRequest.from_dict(add_sms_verification_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


