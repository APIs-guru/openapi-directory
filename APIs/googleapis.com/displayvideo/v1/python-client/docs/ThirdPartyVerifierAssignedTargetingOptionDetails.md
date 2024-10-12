# ThirdPartyVerifierAssignedTargetingOptionDetails

Assigned third party verifier targeting option details. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_THIRD_PARTY_VERIFIER`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adloox** | [**Adloox**](Adloox.md) |  | [optional] 
**double_verify** | [**DoubleVerify**](DoubleVerify.md) |  | [optional] 
**integral_ad_science** | [**IntegralAdScience**](IntegralAdScience.md) |  | [optional] 

## Example

```python
from openapi_client.models.third_party_verifier_assigned_targeting_option_details import ThirdPartyVerifierAssignedTargetingOptionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ThirdPartyVerifierAssignedTargetingOptionDetails from a JSON string
third_party_verifier_assigned_targeting_option_details_instance = ThirdPartyVerifierAssignedTargetingOptionDetails.from_json(json)
# print the JSON string representation of the object
print(ThirdPartyVerifierAssignedTargetingOptionDetails.to_json())

# convert the object into a dict
third_party_verifier_assigned_targeting_option_details_dict = third_party_verifier_assigned_targeting_option_details_instance.to_dict()
# create an instance of ThirdPartyVerifierAssignedTargetingOptionDetails from a dict
third_party_verifier_assigned_targeting_option_details_from_dict = ThirdPartyVerifierAssignedTargetingOptionDetails.from_dict(third_party_verifier_assigned_targeting_option_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


