# LegalEntityCreate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**advertisements** | **List[str]** | A list of document types to advertise. Use if this LegalEntity needs the ability to receive more than only invoice documents. | [optional] [default to ["invoice"]]
**city** | **str** | The city. | 
**country** | [**Country**](Country.md) |  | 
**county** | **str** | County, if applicable | [optional] 
**line1** | **str** | The first address line. | 
**line2** | **str** | The second address line, if applicable | [optional] 
**party_name** | **str** | The name of the company. | 
**public** | **bool** | Whether or not this LegalEntity is public. Public means it will be entered into the PEPPOL directory at https://directory.peppol.eu/ | [optional] [default to True]
**rea** | [**Rea**](Rea.md) |  | [optional] 
**tenant_id** | **str** | The id of the tenant, to be used in case of single-tenant solutions that share webhook URLs. This property will included in webhook events. | [optional] 
**third_party_password** | **str** | The password to use to authenticate to a system through which to send the document, or to obtain tax authority approval to send it. This field is currently relevant only for India and mandatory when creating an IN LegalEntity. | [optional] 
**third_party_username** | **str** | The username to use to authenticate to a system through which to send the document, or to obtain tax authority approval to send it. This field is currently relevant only for India and mandatory when creating an IN LegalEntity. | [optional] 
**zip** | **str** | The zipcode. | 

## Example

```python
from openapi_client.models.legal_entity_create import LegalEntityCreate

# TODO update the JSON string below
json = "{}"
# create an instance of LegalEntityCreate from a JSON string
legal_entity_create_instance = LegalEntityCreate.from_json(json)
# print the JSON string representation of the object
print(LegalEntityCreate.to_json())

# convert the object into a dict
legal_entity_create_dict = legal_entity_create_instance.to_dict()
# create an instance of LegalEntityCreate from a dict
legal_entity_create_from_dict = LegalEntityCreate.from_dict(legal_entity_create_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


