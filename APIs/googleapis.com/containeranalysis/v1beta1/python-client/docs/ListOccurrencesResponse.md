# ListOccurrencesResponse

Response for listing occurrences.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | The next pagination token in the list response. It should be used as &#x60;page_token&#x60; for the following request. An empty value means no more results. | [optional] 
**occurrences** | [**List[Occurrence]**](Occurrence.md) | The occurrences requested. | [optional] 

## Example

```python
from openapi_client.models.list_occurrences_response import ListOccurrencesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListOccurrencesResponse from a JSON string
list_occurrences_response_instance = ListOccurrencesResponse.from_json(json)
# print the JSON string representation of the object
print(ListOccurrencesResponse.to_json())

# convert the object into a dict
list_occurrences_response_dict = list_occurrences_response_instance.to_dict()
# create an instance of ListOccurrencesResponse from a dict
list_occurrences_response_from_dict = ListOccurrencesResponse.from_dict(list_occurrences_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


