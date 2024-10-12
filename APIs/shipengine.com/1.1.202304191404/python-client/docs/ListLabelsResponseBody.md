# ListLabelsResponseBody

A list label response body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**labels** | **List[object]** | The labels that matched the query criteria.  If no matching labels were found, then this array is empty; otherwise, it contains one page of results.  The last page of results may have fewer labels than the &#x60;page_size&#x60;.  | 
**links** | [**PaginationLink**](PaginationLink.md) |  | 
**page** | **int** | The current page number of results.  For example, if there are 80 results, and the page size is 25, then &#x60;page&#x60; could be 1, 2, 3, or 4.  The first three pages would contain 25 items each, and the fourth page would contain the five remaining items. | 
**pages** | **int** | The total number of pages of results.  For example, if there are 80 results, and the page size is 25, then &#x60;pages&#x60; would be 4.  The first three pages would contain 25 items each, and the fourth page would contain the five remaining items.  If there are no results, then &#x60;pages&#x60; will be zero. | 
**total** | **int** | The total number of items across all pages of results | 

## Example

```python
from openapi_client.models.list_labels_response_body import ListLabelsResponseBody

# TODO update the JSON string below
json = "{}"
# create an instance of ListLabelsResponseBody from a JSON string
list_labels_response_body_instance = ListLabelsResponseBody.from_json(json)
# print the JSON string representation of the object
print(ListLabelsResponseBody.to_json())

# convert the object into a dict
list_labels_response_body_dict = list_labels_response_body_instance.to_dict()
# create an instance of ListLabelsResponseBody from a dict
list_labels_response_body_from_dict = ListLabelsResponseBody.from_dict(list_labels_response_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


