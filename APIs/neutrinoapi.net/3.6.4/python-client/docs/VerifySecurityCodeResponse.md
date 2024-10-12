# VerifySecurityCodeResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**verified** | **bool** | True if the code is valid | 

## Example

```python
from openapi_client.models.verify_security_code_response import VerifySecurityCodeResponse

# TODO update the JSON string below
json = "{}"
# create an instance of VerifySecurityCodeResponse from a JSON string
verify_security_code_response_instance = VerifySecurityCodeResponse.from_json(json)
# print the JSON string representation of the object
print(VerifySecurityCodeResponse.to_json())

# convert the object into a dict
verify_security_code_response_dict = verify_security_code_response_instance.to_dict()
# create an instance of VerifySecurityCodeResponse from a dict
verify_security_code_response_from_dict = VerifySecurityCodeResponse.from_dict(verify_security_code_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


