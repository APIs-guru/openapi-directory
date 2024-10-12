# AdditionalTaxIdentifierUpdate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identifier** | **str** | The identifier. | 
**third_party_password** | **str** | The password to use to authenticate to a system through which to send the document, or to obtain tax authority approval to send it. This field is currently relevant only for India and mandatory when creating an IN tax identifier. | [optional] 
**third_party_username** | **str** | The username to use to authenticate to a system through which to send the document, or to obtain tax authority approval to send it. This field is currently relevant only for India and mandatory when creating an IN tax identifier. | [optional] 

## Example

```python
from openapi_client.models.additional_tax_identifier_update import AdditionalTaxIdentifierUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of AdditionalTaxIdentifierUpdate from a JSON string
additional_tax_identifier_update_instance = AdditionalTaxIdentifierUpdate.from_json(json)
# print the JSON string representation of the object
print(AdditionalTaxIdentifierUpdate.to_json())

# convert the object into a dict
additional_tax_identifier_update_dict = additional_tax_identifier_update_instance.to_dict()
# create an instance of AdditionalTaxIdentifierUpdate from a dict
additional_tax_identifier_update_from_dict = AdditionalTaxIdentifierUpdate.from_dict(additional_tax_identifier_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


