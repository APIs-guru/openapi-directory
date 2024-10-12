# VerificationEmail


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**type** | **str** |  | [optional] 
**verified** | **bool** |  | [optional] 
**verified_at** | **datetime** |  | [optional] 
**verified_by** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.verification_email import VerificationEmail

# TODO update the JSON string below
json = "{}"
# create an instance of VerificationEmail from a JSON string
verification_email_instance = VerificationEmail.from_json(json)
# print the JSON string representation of the object
print(VerificationEmail.to_json())

# convert the object into a dict
verification_email_dict = verification_email_instance.to_dict()
# create an instance of VerificationEmail from a dict
verification_email_from_dict = VerificationEmail.from_dict(verification_email_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


