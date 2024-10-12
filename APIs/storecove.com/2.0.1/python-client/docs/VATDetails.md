# VATDetails

DEPRECATED - use tax. The VAT details for the invoice line.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **float** | The amount of VAT for the invoice line. | [optional] 
**country** | **str** | The ISO 3166 country of the VAT for the invoice line. | [optional] 
**percentage** | **float** | The percentage of VAT for the invoice line. | [optional] 

## Example

```python
from openapi_client.models.vat_details import VATDetails

# TODO update the JSON string below
json = "{}"
# create an instance of VATDetails from a JSON string
vat_details_instance = VATDetails.from_json(json)
# print the JSON string representation of the object
print(VATDetails.to_json())

# convert the object into a dict
vat_details_dict = vat_details_instance.to_dict()
# create an instance of VATDetails from a dict
vat_details_from_dict = VATDetails.from_dict(vat_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


