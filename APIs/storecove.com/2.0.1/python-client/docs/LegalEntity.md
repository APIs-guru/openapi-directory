# LegalEntity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**advertisements** | **List[str]** | A list of document types to advertise. Use if this LegalEntity needs the ability to receive more than only invoice documents. | [optional] [default to [invoice]]
**city** | **str** | The city. | [optional] 
**country** | [**Country**](Country.md) |  | [optional] 
**county** | **str** | County, if applicable | [optional] 
**id** | **int** | The Storecove assigned id for the LegalEntity. | [optional] 
**line1** | **str** | The first address line. | [optional] 
**line2** | **str** | The second address line, if applicable | [optional] 
**party_name** | **str** | The name of the company. | [optional] 
**public** | **bool** | Whether or not this LegalEntity is public. Public means it will be listed in the PEPPOL directory at https://directory.peppol.eu/ which is normally what you want. If you have a good reason to not want the LegalEntity listed, provide false. This property is ignored when for country SG, where it is always true. | [optional] [default to True]
**rea** | [**Rea**](Rea.md) |  | [optional] 
**smart_inbox** | **str** | DEPRECATED. Use the &lt;&lt;_openapi_receiveddocuments_resource&gt;&gt; endpoint. The email address of the Smart Inbox for this LegalEntity. | [optional] 
**tenant_id** | **str** | The id of the tenant, to be used in case of multi-tenant solutions. This property will included in webhook events. | [optional] 
**third_party_password** | **str** | The password to use to authenticate to a system through which to send the document, or to obtain tax authority approval to send it. This field is currently relevant only for India and mandatory when creating an IN LegalEntity. | [optional] 
**third_party_username** | **str** | The username to use to authenticate to a system through which to send the document, or to obtain tax authority approval to send it. This field is currently relevant only for India and mandatory when creating an IN LegalEntity. | [optional] 
**zip** | **str** | The zipcode. | [optional] 
**peppol_identifiers** | [**List[PeppolIdentifier]**](PeppolIdentifier.md) |  | [optional] 
**additional_tax_identifiers** | [**List[AdditionalTaxIdentifier]**](AdditionalTaxIdentifier.md) |  | [optional] 
**api_keys** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.legal_entity import LegalEntity

# TODO update the JSON string below
json = "{}"
# create an instance of LegalEntity from a JSON string
legal_entity_instance = LegalEntity.from_json(json)
# print the JSON string representation of the object
print(LegalEntity.to_json())

# convert the object into a dict
legal_entity_dict = legal_entity_instance.to_dict()
# create an instance of LegalEntity from a dict
legal_entity_from_dict = LegalEntity.from_dict(legal_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


