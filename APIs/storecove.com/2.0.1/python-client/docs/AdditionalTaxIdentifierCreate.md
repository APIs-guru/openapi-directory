# AdditionalTaxIdentifierCreate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country** | **str** | The ISO3166 country code to use this identifier for in case of consumerTaxMode. | 
**county** | **str** | The county/state inside the country code to use this identifier for in case of consumerTaxMode. Leave empty to create an additional tax identifier for the entire country. For India, use the two last characters of ISO 3166-2:IN (https://en.wikipedia.org/wiki/States_and_union_territories_of_India). | [optional] 
**identifier** | **str** | The identifier. | 
**scheme** | **str** | The scheme of the identifier. | 
**superscheme** | **str** | The superscheme of the identifier. Should always be \&quot;iso6523-actorid-upis\&quot;. | 
**third_party_password** | **str** | The password to use to authenticate to a system through which to send the document, or to obtain tax authority approval to send it. This field is currently relevant only for India and mandatory when creating an IN tax identifier. | [optional] 
**third_party_username** | **str** | The username to use to authenticate to a system through which to send the document, or to obtain tax authority approval to send it. This field is currently relevant only for India and mandatory when creating an IN tax identifier. | [optional] 

## Example

```python
from openapi_client.models.additional_tax_identifier_create import AdditionalTaxIdentifierCreate

# TODO update the JSON string below
json = "{}"
# create an instance of AdditionalTaxIdentifierCreate from a JSON string
additional_tax_identifier_create_instance = AdditionalTaxIdentifierCreate.from_json(json)
# print the JSON string representation of the object
print(AdditionalTaxIdentifierCreate.to_json())

# convert the object into a dict
additional_tax_identifier_create_dict = additional_tax_identifier_create_instance.to_dict()
# create an instance of AdditionalTaxIdentifierCreate from a dict
additional_tax_identifier_create_from_dict = AdditionalTaxIdentifierCreate.from_dict(additional_tax_identifier_create_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


