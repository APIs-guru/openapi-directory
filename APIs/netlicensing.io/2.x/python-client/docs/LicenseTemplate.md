# LicenseTemplate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **bool** | If set to &#39;false&#39;, the License Template is disabled. Licensee can not obtain any new Licenses off this License Template. | [optional] 
**automatic** | **bool** | If set to &#39;true&#39;, every new Licensee automatically gets one License out of this License Template on creation. Automatic Licenses must have their price set to 0. | [optional] 
**currency** | **str** | Specifies currency for the License price. Check data types to discover which currencies are supported. | [optional] 
**hidden** | **bool** | If set to &#39;true&#39;, this License Template is not shown in NetLicensing Shop as offered for purchase. | [optional] 
**hidden_licenses** | **bool** | If set to &#39;true&#39;, Licenses from this License Template are not visible to the end customer, but participate in validation. | [optional] 
**license_type** | **str** | Type of Licenses created from this License Template | [optional] 
**name** | **str** | Name for the Licensed item. | [optional] 
**number** | **str** | Unique number (across all Product of a Vendor) that identifies the License Template. Vendor can assign this number when creating a License Template or let NetLicensing generate one. Read-only after creation of the first License from this License Template. | [optional] 
**price** | **float** | &#39;price&#39; for the License. If &gt;0, it must always be accompanied by the currency specification. | [optional] 

## Example

```python
from openapi_client.models.license_template import LicenseTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of LicenseTemplate from a JSON string
license_template_instance = LicenseTemplate.from_json(json)
# print the JSON string representation of the object
print(LicenseTemplate.to_json())

# convert the object into a dict
license_template_dict = license_template_instance.to_dict()
# create an instance of LicenseTemplate from a dict
license_template_from_dict = LicenseTemplate.from_dict(license_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


