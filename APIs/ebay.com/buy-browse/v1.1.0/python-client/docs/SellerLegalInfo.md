# SellerLegalInfo

The type that defines the fields for the contact information for a seller.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | The seller&#39;s business email address. | [optional] 
**fax** | **str** | The seller&#39; business fax number. | [optional] 
**imprint** | **str** | This is a free-form string created by the seller. This is information often found on business cards, such as address. This is information used by some countries. | [optional] 
**legal_contact_first_name** | **str** | The seller&#39;s first name. | [optional] 
**legal_contact_last_name** | **str** | The seller&#39;s last name. | [optional] 
**name** | **str** | The name of the seller&#39;s business. | [optional] 
**phone** | **str** | The seller&#39;s business phone number. | [optional] 
**registration_number** | **str** | The seller&#39;s registration number. This is information used by some countries. | [optional] 
**seller_provided_legal_address** | [**LegalAddress**](LegalAddress.md) |  | [optional] 
**terms_of_service** | **str** | This is a free-form string created by the seller. This is the seller&#39;s terms or condition, which is in addition to the seller&#39;s return policies. | [optional] 
**vat_details** | [**List[VatDetail]**](VatDetail.md) | An array of the seller&#39;s VAT (value added tax) IDs and the issuing country. VAT is a tax added by some European countries. | [optional] 

## Example

```python
from openapi_client.models.seller_legal_info import SellerLegalInfo

# TODO update the JSON string below
json = "{}"
# create an instance of SellerLegalInfo from a JSON string
seller_legal_info_instance = SellerLegalInfo.from_json(json)
# print the JSON string representation of the object
print(SellerLegalInfo.to_json())

# convert the object into a dict
seller_legal_info_dict = seller_legal_info_instance.to_dict()
# create an instance of SellerLegalInfo from a dict
seller_legal_info_from_dict = SellerLegalInfo.from_dict(seller_legal_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


