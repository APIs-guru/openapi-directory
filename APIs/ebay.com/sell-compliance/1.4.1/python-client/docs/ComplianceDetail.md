# ComplianceDetail

This type is used by each listing violation that is returned under the violations container.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compliance_state** | **str** | The enumeration value returned in this field indicates if the listing violation is considered to be OUT_OF_COMPLIANCE with an eBay listing policy, or the listing is considered to be AT_RISK of becoming non-compliant against an eBay listing policy. Generally, OUT_OF_COMPLIANCE policy violations can prevent the seller from revising a listing until the underlying violation(s) can be remedied. When the compliance state is AT_RISK, the seller is not blocked from revising the listing, but the seller should correct the violation to prevent the listing from being blocked for revisions in the future. Note: This field is returned for most violations, but not all. In the case that this field is not returned, it can be assumed that the state of the listing violation is OUT_OF_COMPLIANCE. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/compliance/types/com:ComplianceStateEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**corrective_recommendations** | [**CorrectiveRecommendations**](CorrectiveRecommendations.md) |  | [optional] 
**message** | **str** | This field provides a textual summary of the listing violation. A message field is returned for each listing violation. This message will vary widely based on the compliance type and corresponding reason code. | [optional] 
**reason_code** | **str** | This value states the nature of the listing violation. A reasonCode value is returned for each listing violation, and each compliance type can have several reason codes and related messages. The reasonCode values vary by compliance type. The reason codes for each compliance type are summarized below. Aspects adoption The reason codes for ASPECTS_ADOPTION compliance indicate that for the given violation, aspects listed in the violationData container are either missing from the listing or they have invalid values. The reason codes specify whether the violation is for required aspects, recommended (preferred) aspects, or soon to be required aspects. MISSING_OR_INVALID_REQUIRED_ASPECTS MISSING_OR_INVALID_PREFERRED_ASPECTS MISSING_OR_INVALID_SOON_TO_BE_REQUIRED_ASPECTS HTTPS The reason codes for HTTPS compliance identify where in the listing the violation occurs. For HTTPS policy violations, the seller will just need to remove the HTTP link (or update to HTTPS) from the listing details or product details: NON_SECURE_HTTP_LINK_IN_LISTING NON_SECURE_HTTP_LINK_IN_PRODUCT Non-eBay links The reason codes for OUTSIDE_EBAY_BUYING_AND_SELLING compliance identify the specific type of data (e.g., telephone number) that violated the policy. For each of these violations, the seller will just need to revise the listing, removing this information: UNAPPROVED_DOMAIN_WEBLINK_IN_LISTING PHONE_NUMBER_IN_LISTING EMAIL_ADDRESS_IN_LISTING Product adoption Product Adoption is not enforced at this time. Product adoption conformance Product Adoption is not enforced at this time. Returns policy The only RETURNS_POLICY reason code is UNSUPPORTED_RETURNS_PERIOD. The seller will have to revise their listing (or return business policy) with a supported return period for the site and category. The GetCategoryFeatures call of the Trading API can be used to verify the supported return periods for a particular category. For most eBay categories, the minimum return period that can be stated in a Returns Policy is 14 days for domestic and international sales, but some categories require a minimum 30-day return period. | [optional] 
**variation** | [**VariationDetails**](VariationDetails.md) |  | [optional] 
**violation_data** | [**List[NameValueList]**](NameValueList.md) | This container provides more information about the listing violation, if applicable. The type of information that appears here will vary based on the compliance type and type of violation. For example, for ASPECTS_ADOPTION violations, this container lists the missing aspect(s) or aspect(s) with invalid values. | [optional] 

## Example

```python
from openapi_client.models.compliance_detail import ComplianceDetail

# TODO update the JSON string below
json = "{}"
# create an instance of ComplianceDetail from a JSON string
compliance_detail_instance = ComplianceDetail.from_json(json)
# print the JSON string representation of the object
print(ComplianceDetail.to_json())

# convert the object into a dict
compliance_detail_dict = compliance_detail_instance.to_dict()
# create an instance of ComplianceDetail from a dict
compliance_detail_from_dict = ComplianceDetail.from_dict(compliance_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


