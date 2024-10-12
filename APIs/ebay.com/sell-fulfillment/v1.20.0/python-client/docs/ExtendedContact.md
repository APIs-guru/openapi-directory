# ExtendedContact

This type contains shipping and contact information for a buyer or an eBay shipping partner.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**company_name** | **str** | The company name associated with the buyer or eBay shipping partner. This field is only returned if defined/applicable to the buyer or eBay shipping partner. | [optional] 
**contact_address** | [**Address**](Address.md) |  | [optional] 
**email** | **str** | This field contains the email address of the buyer. This address will be returned for up to 14 days from order creation. If an order is more than 14 days old, no address is returned.&lt;br&gt;&lt;br&gt;&lt;span class&#x3D;\&quot;tablenote\&quot;&gt; &lt;strong&gt;Note:&lt;/strong&gt; If returned, this field contains the email address of the buyer, even for Global Shipping Program shipments.&lt;br&gt;&lt;br&gt;The &lt;b&gt;email&lt;/b&gt; will not be returned for any order that is more than 90 days old.&lt;/span&gt; | [optional] 
**full_name** | **str** | The full name of the buyer or eBay shipping partner.&lt;br&gt;&lt;br&gt;&lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;strong&gt;Note:&lt;/strong&gt; The &lt;b&gt;fullName&lt;/b&gt; will not be returned for any order that is more than 90 days old.&lt;/span&gt; | [optional] 
**primary_phone** | [**PhoneNumber**](PhoneNumber.md) |  | [optional] 

## Example

```python
from openapi_client.models.extended_contact import ExtendedContact

# TODO update the JSON string below
json = "{}"
# create an instance of ExtendedContact from a JSON string
extended_contact_instance = ExtendedContact.from_json(json)
# print the JSON string representation of the object
print(ExtendedContact.to_json())

# convert the object into a dict
extended_contact_dict = extended_contact_instance.to_dict()
# create an instance of ExtendedContact from a dict
extended_contact_from_dict = ExtendedContact.from_dict(extended_contact_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


