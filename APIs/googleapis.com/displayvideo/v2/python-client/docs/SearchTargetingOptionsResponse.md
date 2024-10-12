# SearchTargetingOptionsResponse

Response message for SearchTargetingOptions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to &#x60;SearchTargetingOptions&#x60; method to retrieve the next page of results. | [optional] 
**targeting_options** | [**List[TargetingOption]**](TargetingOption.md) | The list of targeting options that match the search criteria. This list will be absent if empty. | [optional] 

## Example

```python
from openapi_client.models.search_targeting_options_response import SearchTargetingOptionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SearchTargetingOptionsResponse from a JSON string
search_targeting_options_response_instance = SearchTargetingOptionsResponse.from_json(json)
# print the JSON string representation of the object
print(SearchTargetingOptionsResponse.to_json())

# convert the object into a dict
search_targeting_options_response_dict = search_targeting_options_response_instance.to_dict()
# create an instance of SearchTargetingOptionsResponse from a dict
search_targeting_options_response_from_dict = SearchTargetingOptionsResponse.from_dict(search_targeting_options_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


