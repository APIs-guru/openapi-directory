# VoiceOfMerchantState

Response message for VoiceOfMerchant.GetVoiceOfMerchantState.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comply_with_guidelines** | [**ComplyWithGuidelines**](ComplyWithGuidelines.md) |  | [optional] 
**has_business_authority** | **bool** | Indicates whether the location has the authority (ownership) over the business on Google. If true, another location cannot take over and become the dominant listing on Maps. However, edits will not become live unless Voice of Merchant is gained (i.e. has_voice_of_merchant is true). | [optional] 
**has_voice_of_merchant** | **bool** | Indicates whether the location is in good standing and has control over the business on Google. Any edits made to the location will propagate to Maps after passing the review phase. | [optional] 
**resolve_ownership_conflict** | **object** | Indicates that the location duplicates another location that is in good standing. | [optional] 
**verify** | [**Verify**](Verify.md) |  | [optional] 
**wait_for_voice_of_merchant** | **object** | Indicates that the location will gain voice of merchant after passing review. | [optional] 

## Example

```python
from openapi_client.models.voice_of_merchant_state import VoiceOfMerchantState

# TODO update the JSON string below
json = "{}"
# create an instance of VoiceOfMerchantState from a JSON string
voice_of_merchant_state_instance = VoiceOfMerchantState.from_json(json)
# print the JSON string representation of the object
print(VoiceOfMerchantState.to_json())

# convert the object into a dict
voice_of_merchant_state_dict = voice_of_merchant_state_instance.to_dict()
# create an instance of VoiceOfMerchantState from a dict
voice_of_merchant_state_from_dict = VoiceOfMerchantState.from_dict(voice_of_merchant_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


