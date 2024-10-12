# SellerEligibilityMultiProgramResponse

The base response of the <b>getAdvertisingEligibility</b> method that contains the seller eligibility information for one or more advertising programs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**advertising_eligibility** | [**List[SellerEligibilityResponse]**](SellerEligibilityResponse.md) | An array of response fields that define the seller eligibility for eBay adverstising programs. | [optional] 

## Example

```python
from openapi_client.models.seller_eligibility_multi_program_response import SellerEligibilityMultiProgramResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SellerEligibilityMultiProgramResponse from a JSON string
seller_eligibility_multi_program_response_instance = SellerEligibilityMultiProgramResponse.from_json(json)
# print the JSON string representation of the object
print(SellerEligibilityMultiProgramResponse.to_json())

# convert the object into a dict
seller_eligibility_multi_program_response_dict = seller_eligibility_multi_program_response_instance.to_dict()
# create an instance of SellerEligibilityMultiProgramResponse from a dict
seller_eligibility_multi_program_response_from_dict = SellerEligibilityMultiProgramResponse.from_dict(seller_eligibility_multi_program_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


