# UkAddressSuggestionUrls


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**udprn** | **str** | URL to retrieve the entire details for a given address suggestion by the UDPRN | 
**umprn** | **str** | Optionally returned field, to retrieve the entire details for a suggested Multiple Residence household | [optional] 

## Example

```python
from openapi_client.models.uk_address_suggestion_urls import UkAddressSuggestionUrls

# TODO update the JSON string below
json = "{}"
# create an instance of UkAddressSuggestionUrls from a JSON string
uk_address_suggestion_urls_instance = UkAddressSuggestionUrls.from_json(json)
# print the JSON string representation of the object
print(UkAddressSuggestionUrls.to_json())

# convert the object into a dict
uk_address_suggestion_urls_dict = uk_address_suggestion_urls_instance.to_dict()
# create an instance of UkAddressSuggestionUrls from a dict
uk_address_suggestion_urls_from_dict = UkAddressSuggestionUrls.from_dict(uk_address_suggestion_urls_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


