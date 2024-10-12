# AddVerificationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** |  | 
**type** | **str** |  | 
**sms** | **str** |  | 

## Example

```python
from openapi_client.models.add_verification_request import AddVerificationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddVerificationRequest from a JSON string
add_verification_request_instance = AddVerificationRequest.from_json(json)
# print the JSON string representation of the object
print(AddVerificationRequest.to_json())

# convert the object into a dict
add_verification_request_dict = add_verification_request_instance.to_dict()
# create an instance of AddVerificationRequest from a dict
add_verification_request_from_dict = AddVerificationRequest.from_dict(add_verification_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


