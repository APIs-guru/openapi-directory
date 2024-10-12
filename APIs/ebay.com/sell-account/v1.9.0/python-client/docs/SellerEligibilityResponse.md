# SellerEligibilityResponse

A type that is used to provide the seller's eligibility status for an eBay advertising program.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**program_type** | **str** | The eBay advertising program for which a seller may be eligible. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/account/types/plser:AdvertisingProgramEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**reason** | **str** | The reason why a seller is ineligible for the specified eBay advertising program.&lt;br /&gt;&lt;br /&gt;This field is only returned if the seller is ineligible for the eBay advertising program. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/account/types/plser:SellerIneligibleReasonEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**status** | **str** | The seller elibibilty status for the specified eBay advertising program. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/account/types/cmlib:SellerEligibilityEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 

## Example

```python
from openapi_client.models.seller_eligibility_response import SellerEligibilityResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SellerEligibilityResponse from a JSON string
seller_eligibility_response_instance = SellerEligibilityResponse.from_json(json)
# print the JSON string representation of the object
print(SellerEligibilityResponse.to_json())

# convert the object into a dict
seller_eligibility_response_dict = seller_eligibility_response_instance.to_dict()
# create an instance of SellerEligibilityResponse from a dict
seller_eligibility_response_from_dict = SellerEligibilityResponse.from_dict(seller_eligibility_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


