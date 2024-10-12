# ComplianceViolation

This type is used by each listing violation that is returned under the listingViolations container.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compliance_type** | **str** | This enumeration value indicates the compliance type of listing violation. See ComplianceTypeEnum for more information on each compliance type. This will always be returned for each listing violation that is found. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/compliance/types/com:ComplianceTypeEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**listing_id** | **str** | The unique identifier of the eBay listing that currently has the corresponding listing violation{s). This field will always be returned for each listing that has one or more violations. | [optional] 
**offer_id** | **str** | Note: This field is for future use, and will not be returned, even for listings created through the Inventory API. The unique identifier of the offer. This field is only applicable and returned for listings that were created through the Inventory API. To convert an Inventory Item object into an eBay listing, an Offer object must be created and published. | [optional] 
**sku** | **str** | The seller-defined SKU value of the product in the listing with the violation{s). This field is only returned if defined in the listing. SKU values are optional in listings except when creating listings using the Inventory API model. | [optional] 
**violations** | [**List[ComplianceDetail]**](ComplianceDetail.md) | This container consists of an array of one or more listing violations applicable to the eBay listing specified in the listingId field. This array is returned for each eBay listing that has one or more violations. For each returned violation, the fields that are returned and the details that are given will depend on the listing violation. | [optional] 

## Example

```python
from openapi_client.models.compliance_violation import ComplianceViolation

# TODO update the JSON string below
json = "{}"
# create an instance of ComplianceViolation from a JSON string
compliance_violation_instance = ComplianceViolation.from_json(json)
# print the JSON string representation of the object
print(ComplianceViolation.to_json())

# convert the object into a dict
compliance_violation_dict = compliance_violation_instance.to_dict()
# create an instance of ComplianceViolation from a dict
compliance_violation_from_dict = ComplianceViolation.from_dict(compliance_violation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


