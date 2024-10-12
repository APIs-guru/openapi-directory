# Address


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attention** | **str** | ‘Attn.’ (if applicable). Only applicable for B2B customers. | [optional] 
**city** | **str** | Customer’s city. | [optional] 
**country** | **str** | Customer’s country. This value overrides the purchase country if they are different. Should follow the standard of ISO 3166 alpha-2. E.g. GB, US, DE, SE. | [optional] 
**email** | **str** | Customer’s email address. | [optional] 
**family_name** | **str** | Customers family name in UTF-8 encoding. Cannot be only numbers, must be more than 1 character. Allowed special characters: -&#39;’. More information can be found [in this link](https://docs.klarna.com/klarna-payments/in-depth-knowledge/customer-data-requirements/#details-needed-per-market) | [optional] 
**given_name** | **str** | Customers given name in UTF-8 encoding. Cannot be only numbers, must be more than 1 character. Allowed special characters: -&#39;’. More information can be found [in this link](https://docs.klarna.com/klarna-payments/in-depth-knowledge/customer-data-requirements/#details-needed-per-market) | [optional] 
**organization_name** | **str** | Organization name (if applicable). Only applicable for B2B customers. | [optional] 
**phone** | **str** | Phone number. Preferably a mobile phone number. | [optional] 
**postal_code** | **str** | Customer’s postal code. Validation according to Universal Postal Union addressing systems. E.g. 12345, W1G OPW. | [optional] 
**region** | **str** | Customer’s region or state - Mandatory for US and AU market. Validations according to ISO 3166-2 format, e.g. OH, NJ, etc. | [optional] 
**street_address** | **str** | Customer’s street address. Regional formatting is required, as follows: UK/US/FR: 33 Cavendish Square Rest of EU: De Ruijterkade 7 | [optional] 
**street_address2** | **str** | Customer’s street address. Second Line.  | [optional] 
**title** | **str** | Customer’s Title. Allowed values per country: UK - \&quot;Mr\&quot;, \&quot;Ms\&quot; DE - \&quot;Herr\&quot;, \&quot;Frau\&quot; AT: \&quot;Herr, \&quot;Frau\&quot; CH: de-CH: \&quot;Herr, \&quot;Frau\&quot; it-CH: \&quot;Sig.\&quot;, \&quot;Sig.ra\&quot; fr-CH: \&quot;M\&quot;, \&quot;Mme\&quot;  BE: \&quot;Dhr.\&quot;, \&quot;Mevr.\&quot; NL: \&quot;Dhr.\&quot;, \&quot;Mevr.\&quot; | [optional] 

## Example

```python
from openapi_client.models.address import Address

# TODO update the JSON string below
json = "{}"
# create an instance of Address from a JSON string
address_instance = Address.from_json(json)
# print the JSON string representation of the object
print(Address.to_json())

# convert the object into a dict
address_dict = address_instance.to_dict()
# create an instance of Address from a dict
address_from_dict = Address.from_dict(address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


