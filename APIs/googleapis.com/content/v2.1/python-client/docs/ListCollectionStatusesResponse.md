# ListCollectionStatusesResponse

Response message for the ListCollectionStatuses method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**resources** | [**List[CollectionStatus]**](CollectionStatus.md) | The collectionstatuses listed. | [optional] 

## Example

```python
from openapi_client.models.list_collection_statuses_response import ListCollectionStatusesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListCollectionStatusesResponse from a JSON string
list_collection_statuses_response_instance = ListCollectionStatusesResponse.from_json(json)
# print the JSON string representation of the object
print(ListCollectionStatusesResponse.to_json())

# convert the object into a dict
list_collection_statuses_response_dict = list_collection_statuses_response_instance.to_dict()
# create an instance of ListCollectionStatusesResponse from a dict
list_collection_statuses_response_from_dict = ListCollectionStatusesResponse.from_dict(list_collection_statuses_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


