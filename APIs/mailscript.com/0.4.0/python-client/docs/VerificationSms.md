# VerificationSms


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**sms** | **str** |  | [optional] 
**type** | **str** |  | [optional] 
**verified** | **bool** |  | [optional] 
**verified_at** | **datetime** |  | [optional] 
**verified_by** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.verification_sms import VerificationSms

# TODO update the JSON string below
json = "{}"
# create an instance of VerificationSms from a JSON string
verification_sms_instance = VerificationSms.from_json(json)
# print the JSON string representation of the object
print(VerificationSms.to_json())

# convert the object into a dict
verification_sms_dict = verification_sms_instance.to_dict()
# create an instance of VerificationSms from a dict
verification_sms_from_dict = VerificationSms.from_dict(verification_sms_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


