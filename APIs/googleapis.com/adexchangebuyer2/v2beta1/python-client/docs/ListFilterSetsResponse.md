# ListFilterSetsResponse

Response message for listing filter sets.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter_sets** | [**List[FilterSet]**](FilterSet.md) | The filter sets belonging to the buyer. | [optional] 
**next_page_token** | **str** | A token to retrieve the next page of results. Pass this value in the ListFilterSetsRequest.pageToken field in the subsequent call to the accounts.filterSets.list method to retrieve the next page of results. | [optional] 

## Example

```python
from openapi_client.models.list_filter_sets_response import ListFilterSetsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListFilterSetsResponse from a JSON string
list_filter_sets_response_instance = ListFilterSetsResponse.from_json(json)
# print the JSON string representation of the object
print(ListFilterSetsResponse.to_json())

# convert the object into a dict
list_filter_sets_response_dict = list_filter_sets_response_instance.to_dict()
# create an instance of ListFilterSetsResponse from a dict
list_filter_sets_response_from_dict = ListFilterSetsResponse.from_dict(list_filter_sets_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


