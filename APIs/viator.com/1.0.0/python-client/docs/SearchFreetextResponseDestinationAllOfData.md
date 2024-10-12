# SearchFreetextResponseDestinationAllOfData

**object** detailing **a destination** that matches the search criteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_currency_code** | **str** | **currency code** for the currency in which pricing is displayed | [optional] 
**destination_id** | **int** | **unique numeric identifier** of the destination - use this value as the &#x60;destId&#x60; input field for other Viator API services  | [optional] 
**destination_name** | **str** | **natural-language name** of the destination | [optional] 
**destination_type** | [**DestinationType**](DestinationType.md) |  | [optional] 
**destination_url_name** | **str** | ignore - (Viator only) | [optional] 
**iata_code** | **str** | **IATA airport code** for the destination - a three-letter code defined by the International Air Transport Association (IATA) used to identify many airports around the world - the IATA code is also known as an &#39;IATA location identifier&#39;, &#39;IATA station code&#39; or simply a &#39;location identifier&#39; - the IATA code is &amp;lt;u&amp;gt;not available&amp;lt;/u&amp;gt; for destinations with a destination type of &#x60;&#39;COUNTRY&#39;&#x60; or &#x60;&#39;REGION&#39;&#x60;, as there could be more than one airport within a destination  | [optional] 
**latitude** | **float** | **latitude component** of the destination&#39;s geolocation | [optional] 
**longitude** | **float** | **longitude component** of the destination&#39;s geolocation | [optional] 
**lookup_id** | **str** | **hierarchy location specifier** for the destination that is a concatenation of all &#x60;parentId&#x60; and &#x60;destinationId&#x60; codes - e.g. &#x60;&#39;8.77.673&#39;&#x60; for Chicago - format: [top level &#x60;parentId&#x60;].[any additional &#x60;parentId&#x60;].[&#x60;destinationId&#x60;]  | [optional] 
**parent_id** | **int** | **unique numeric identifier** of the destination&#39;s parent destination | [optional] 
**selectable** | **bool** | ignore - (Viator only) | [optional] 
**sort_order** | **int** | **sort order** for this response | [optional] 
**time_zone** | **str** | **time zone** of the destination | [optional] 

## Example

```python
from openapi_client.models.search_freetext_response_destination_all_of_data import SearchFreetextResponseDestinationAllOfData

# TODO update the JSON string below
json = "{}"
# create an instance of SearchFreetextResponseDestinationAllOfData from a JSON string
search_freetext_response_destination_all_of_data_instance = SearchFreetextResponseDestinationAllOfData.from_json(json)
# print the JSON string representation of the object
print(SearchFreetextResponseDestinationAllOfData.to_json())

# convert the object into a dict
search_freetext_response_destination_all_of_data_dict = search_freetext_response_destination_all_of_data_instance.to_dict()
# create an instance of SearchFreetextResponseDestinationAllOfData from a dict
search_freetext_response_destination_all_of_data_from_dict = SearchFreetextResponseDestinationAllOfData.from_dict(search_freetext_response_destination_all_of_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


