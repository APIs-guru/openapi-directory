# AdditionalTaxIdentifier


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country** | **str** | The ISO3166 country code to use this identifier for in case of consumerTaxMode. | [optional] 
**county** | **str** | The county/state inside the country code to use this identifier for in case of consumerTaxMode. | [optional] 
**id** | **int** | The Storecove assigned id for the AdditionalTaxIdentifier. | [optional] 
**identifier** | **str** | The identifier. | [optional] 
**scheme** | **str** | The scheme of the identifier. | [optional] 
**superscheme** | **str** | The superscheme of the identifier. | [optional] 

## Example

```python
from openapi_client.models.additional_tax_identifier import AdditionalTaxIdentifier

# TODO update the JSON string below
json = "{}"
# create an instance of AdditionalTaxIdentifier from a JSON string
additional_tax_identifier_instance = AdditionalTaxIdentifier.from_json(json)
# print the JSON string representation of the object
print(AdditionalTaxIdentifier.to_json())

# convert the object into a dict
additional_tax_identifier_dict = additional_tax_identifier_instance.to_dict()
# create an instance of AdditionalTaxIdentifier from a dict
additional_tax_identifier_from_dict = AdditionalTaxIdentifier.from_dict(additional_tax_identifier_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


