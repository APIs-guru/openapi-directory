# ChangesListResponse

The response to a request to enumerate Changes to a ResourceRecordSets collection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**changes** | [**List[Change]**](Change.md) | The requested changes. | [optional] 
**header** | [**ResponseHeader**](ResponseHeader.md) |  | [optional] 
**kind** | **str** | Type of resource. | [optional] [default to 'dns#changesListResponse']
**next_page_token** | **str** | The presence of this field indicates that there exist more results following your last page of results in pagination order. To fetch them, make another list request using this value as your pagination token. This lets you retrieve the complete contents of even very large collections one page at a time. However, if the contents of the collection change between the first and last paginated list request, the set of all elements returned are an inconsistent view of the collection. You cannot retrieve a \&quot;snapshot\&quot; of collections larger than the maximum page size. | [optional] 

## Example

```python
from openapi_client.models.changes_list_response import ChangesListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ChangesListResponse from a JSON string
changes_list_response_instance = ChangesListResponse.from_json(json)
# print the JSON string representation of the object
print(ChangesListResponse.to_json())

# convert the object into a dict
changes_list_response_dict = changes_list_response_instance.to_dict()
# create an instance of ChangesListResponse from a dict
changes_list_response_from_dict = ChangesListResponse.from_dict(changes_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


