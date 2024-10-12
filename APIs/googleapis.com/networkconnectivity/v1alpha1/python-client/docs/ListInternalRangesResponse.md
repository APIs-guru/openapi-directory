# ListInternalRangesResponse

Response for InternalRange.ListInternalRanges

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**internal_ranges** | [**List[InternalRange]**](InternalRange.md) | Internal range to be returned. | [optional] 
**next_page_token** | **str** | The next pagination token in the List response. It should be used as page_token for the following request. An empty value means no more result. | [optional] 
**unreachable** | **List[str]** | Locations that could not be reached. | [optional] 

## Example

```python
from openapi_client.models.list_internal_ranges_response import ListInternalRangesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListInternalRangesResponse from a JSON string
list_internal_ranges_response_instance = ListInternalRangesResponse.from_json(json)
# print the JSON string representation of the object
print(ListInternalRangesResponse.to_json())

# convert the object into a dict
list_internal_ranges_response_dict = list_internal_ranges_response_instance.to_dict()
# create an instance of ListInternalRangesResponse from a dict
list_internal_ranges_response_from_dict = ListInternalRangesResponse.from_dict(list_internal_ranges_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


