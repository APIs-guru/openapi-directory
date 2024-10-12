# CardBarcodeSectionDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first_bottom_detail** | [**BarcodeSectionDetail**](BarcodeSectionDetail.md) |  | [optional] 
**first_top_detail** | [**BarcodeSectionDetail**](BarcodeSectionDetail.md) |  | [optional] 
**second_top_detail** | [**BarcodeSectionDetail**](BarcodeSectionDetail.md) |  | [optional] 

## Example

```python
from openapi_client.models.card_barcode_section_details import CardBarcodeSectionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of CardBarcodeSectionDetails from a JSON string
card_barcode_section_details_instance = CardBarcodeSectionDetails.from_json(json)
# print the JSON string representation of the object
print(CardBarcodeSectionDetails.to_json())

# convert the object into a dict
card_barcode_section_details_dict = card_barcode_section_details_instance.to_dict()
# create an instance of CardBarcodeSectionDetails from a dict
card_barcode_section_details_from_dict = CardBarcodeSectionDetails.from_dict(card_barcode_section_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


