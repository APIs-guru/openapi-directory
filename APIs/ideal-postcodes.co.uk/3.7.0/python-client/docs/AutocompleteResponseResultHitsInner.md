# AutocompleteResponseResultHitsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Global unique internally generated identifier for an address | 
**suggestion** | **str** | Address suggestion for a given query. | 
**urls** | [**UkAddressSuggestionUrls**](UkAddressSuggestionUrls.md) |  | 
**udprn** | **int** | UDPRN stands for ‘Unique Delivery Point Reference Number’. Royal Mail assigns a unique UDPRN code for each premise on PAF. Simple, unique reference number for each Delivery Point. Unlikely to be reused when an address expires.  Up to 8-digit numeric code.  A new UDPRN is automatically assigned to each new Delivery Point added to PAF. | 
**umprn** | **float** | Optionally returned field, representing the UMPRN of a Multiple Residence household | [optional] 

## Example

```python
from openapi_client.models.autocomplete_response_result_hits_inner import AutocompleteResponseResultHitsInner

# TODO update the JSON string below
json = "{}"
# create an instance of AutocompleteResponseResultHitsInner from a JSON string
autocomplete_response_result_hits_inner_instance = AutocompleteResponseResultHitsInner.from_json(json)
# print the JSON string representation of the object
print(AutocompleteResponseResultHitsInner.to_json())

# convert the object into a dict
autocomplete_response_result_hits_inner_dict = autocomplete_response_result_hits_inner_instance.to_dict()
# create an instance of AutocompleteResponseResultHitsInner from a dict
autocomplete_response_result_hits_inner_from_dict = AutocompleteResponseResultHitsInner.from_dict(autocomplete_response_result_hits_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


