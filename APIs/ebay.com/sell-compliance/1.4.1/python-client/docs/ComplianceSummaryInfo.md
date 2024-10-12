# ComplianceSummaryInfo

This type is used by each unique eBay marketplace and compliance type combination that is returned in the getListingViolationsSummary response to indicate the total number of listing violations in regards to that eBay marketplace and compliance type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compliance_type** | **str** | This enumeration value indicates the type of compliance. See ComplianceTypeEnum for more information on each compliance type. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/compliance/types/com:ComplianceTypeEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**listing_count** | **int** | This integer value indicates the number of eBay listings that are currently violating the compliance type indicated in the complianceType field, for the eBay marketplace indicated in the marketplaceId field. | [optional] 
**marketplace_id** | **str** | This enumeration value indicates the eBay marketplace where the listing violations exist. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/compliance/types/bas:MarketplaceIdEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 

## Example

```python
from openapi_client.models.compliance_summary_info import ComplianceSummaryInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ComplianceSummaryInfo from a JSON string
compliance_summary_info_instance = ComplianceSummaryInfo.from_json(json)
# print the JSON string representation of the object
print(ComplianceSummaryInfo.to_json())

# convert the object into a dict
compliance_summary_info_dict = compliance_summary_info_instance.to_dict()
# create an instance of ComplianceSummaryInfo from a dict
compliance_summary_info_from_dict = ComplianceSummaryInfo.from_dict(compliance_summary_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


