# SendReferralEmailRequestBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**emails** | **List[str]** |  | 
**message** | **str** |  | 

## Example

```python
from openapi_client.models.send_referral_email_request_body import SendReferralEmailRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of SendReferralEmailRequestBody from a JSON string
send_referral_email_request_body_instance = SendReferralEmailRequestBody.from_json(json)
# print the JSON string representation of the object
print(SendReferralEmailRequestBody.to_json())

# convert the object into a dict
send_referral_email_request_body_dict = send_referral_email_request_body_instance.to_dict()
# create an instance of SendReferralEmailRequestBody from a dict
send_referral_email_request_body_from_dict = SendReferralEmailRequestBody.from_dict(send_referral_email_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


