# AddEmailVerificationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.add_email_verification_request import AddEmailVerificationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddEmailVerificationRequest from a JSON string
add_email_verification_request_instance = AddEmailVerificationRequest.from_json(json)
# print the JSON string representation of the object
print(AddEmailVerificationRequest.to_json())

# convert the object into a dict
add_email_verification_request_dict = add_email_verification_request_instance.to_dict()
# create an instance of AddEmailVerificationRequest from a dict
add_email_verification_request_from_dict = AddEmailVerificationRequest.from_dict(add_email_verification_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


