# UkAddressSuggestion

Represents a possible address given an autocomplete query.  UK Address Suggestions will return a UDPRN attribute if it references a deliverable endpoint found on Royal Mail's Postcode Address File dataset.  UK Address Suggestion will return a UMPRN if it references a multiple occupancy premise found on Royal Mail's Multiple Residence dataset. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Global unique internally generated identifier for an address | 
**suggestion** | **str** | Address suggestion for a given query. | 
**udprn** | **int** | UDPRN stands for ‘Unique Delivery Point Reference Number’. Royal Mail assigns a unique UDPRN code for each premise on PAF. Simple, unique reference number for each Delivery Point. Unlikely to be reused when an address expires.  Up to 8-digit numeric code.  A new UDPRN is automatically assigned to each new Delivery Point added to PAF. | 
**umprn** | **float** | Optionally returned field, representing the UMPRN of a Multiple Residence household | [optional] 
**urls** | [**UkAddressSuggestionUrls**](UkAddressSuggestionUrls.md) |  | 

## Example

```python
from openapi_client.models.uk_address_suggestion import UkAddressSuggestion

# TODO update the JSON string below
json = "{}"
# create an instance of UkAddressSuggestion from a JSON string
uk_address_suggestion_instance = UkAddressSuggestion.from_json(json)
# print the JSON string representation of the object
print(UkAddressSuggestion.to_json())

# convert the object into a dict
uk_address_suggestion_dict = uk_address_suggestion_instance.to_dict()
# create an instance of UkAddressSuggestion from a dict
uk_address_suggestion_from_dict = UkAddressSuggestion.from_dict(uk_address_suggestion_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


