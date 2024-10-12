# SearchTargetingOptionsRequest

Request message for SearchTargetingOptions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**advertiser_id** | **str** | Required. The Advertiser this request is being made in the context of. | [optional] 
**business_chain_search_terms** | [**BusinessChainSearchTerms**](BusinessChainSearchTerms.md) |  | [optional] 
**geo_region_search_terms** | [**GeoRegionSearchTerms**](GeoRegionSearchTerms.md) |  | [optional] 
**page_size** | **int** | Requested page size. Must be between &#x60;1&#x60; and &#x60;200&#x60;. If unspecified will default to &#x60;100&#x60;. Returns error code &#x60;INVALID_ARGUMENT&#x60; if an invalid value is specified. | [optional] 
**page_token** | **str** | A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to &#x60;SearchTargetingOptions&#x60; method. If not specified, the first page of results will be returned. | [optional] 
**poi_search_terms** | [**PoiSearchTerms**](PoiSearchTerms.md) |  | [optional] 

## Example

```python
from openapi_client.models.search_targeting_options_request import SearchTargetingOptionsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SearchTargetingOptionsRequest from a JSON string
search_targeting_options_request_instance = SearchTargetingOptionsRequest.from_json(json)
# print the JSON string representation of the object
print(SearchTargetingOptionsRequest.to_json())

# convert the object into a dict
search_targeting_options_request_dict = search_targeting_options_request_instance.to_dict()
# create an instance of SearchTargetingOptionsRequest from a dict
search_targeting_options_request_from_dict = SearchTargetingOptionsRequest.from_dict(search_targeting_options_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


