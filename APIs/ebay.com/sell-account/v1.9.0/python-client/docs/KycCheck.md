# KycCheck

This type is used to provide details about any KYC check that is applicable to the managed payments seller.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alert** | **str** | This field gives a short summary of what is required from the seller. An example might be, &#39;&lt;code&gt;Upload bank document now.&lt;/code&gt;&#39;. The &lt;b&gt;detailMessage&lt;/b&gt; field will often provide more details on what is required of the seller. | [optional] 
**data_required** | **str** | The enumeration value returned in this field categorizes the type of details needed for the KYC check. More information about the check is shown in the &lt;b&gt;detailMessage&lt;/b&gt; and other applicable, corresponding fields. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/account/types/kyc:DetailsType&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**detail_message** | **str** | This field gives a detailed message about what is required from the seller. An example might be, &#39;&lt;code&gt;Please upload a bank document by 2020-08-01 to get your account back in good standing.&lt;/code&gt;&#39;. | [optional] 
**due_date** | **str** | The timestamp in this field indicates the date by which the seller should resolve the KYC requirement.&lt;br&gt;&lt;br&gt;The timestamp in this field uses the UTC date and time format described in the &lt;a href&#x3D;\&quot;https://www.iso.org/iso-8601-date-and-time-format.html\&quot; target&#x3D;\&quot;_blank\&quot;&gt;ISO 8601 Standard&lt;/a&gt;. See below for this format and an example: &lt;br&gt;&lt;br&gt;&lt;i&gt;MM-DD-YYYY HH:MM:SS&lt;/i&gt;&lt;br/&gt;&lt;code&gt;06-05-2020 10:34:18&lt;/code&gt; | [optional] 
**remedy_url** | **str** | If applicable and available, a URL will be returned in this field, and the link will take the seller to an eBay page where they can provide the requested information. | [optional] 

## Example

```python
from openapi_client.models.kyc_check import KycCheck

# TODO update the JSON string below
json = "{}"
# create an instance of KycCheck from a JSON string
kyc_check_instance = KycCheck.from_json(json)
# print the JSON string representation of the object
print(KycCheck.to_json())

# convert the object into a dict
kyc_check_dict = kyc_check_instance.to_dict()
# create an instance of KycCheck from a dict
kyc_check_from_dict = KycCheck.from_dict(kyc_check_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


