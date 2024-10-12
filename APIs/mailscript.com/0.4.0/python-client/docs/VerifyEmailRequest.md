# VerifyEmailRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** |  | 
**email** | **str** |  | 

## Example

```python
from openapi_client.models.verify_email_request import VerifyEmailRequest

# TODO update the JSON string below
json = "{}"
# create an instance of VerifyEmailRequest from a JSON string
verify_email_request_instance = VerifyEmailRequest.from_json(json)
# print the JSON string representation of the object
print(VerifyEmailRequest.to_json())

# convert the object into a dict
verify_email_request_dict = verify_email_request_instance.to_dict()
# create an instance of VerifyEmailRequest from a dict
verify_email_request_from_dict = VerifyEmailRequest.from_dict(verify_email_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


