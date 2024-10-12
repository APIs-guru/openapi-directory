# ListCollectionIdsRequest

The request for Firestore.ListCollectionIds.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page_size** | **int** | The maximum number of results to return. | [optional] 
**page_token** | **str** | A page token. Must be a value from ListCollectionIdsResponse. | [optional] 
**read_time** | **str** | Reads documents as they were at the given time. This must be a microsecond precision timestamp within the past one hour, or if Point-in-Time Recovery is enabled, can additionally be a whole minute timestamp within the past 7 days. | [optional] 

## Example

```python
from openapi_client.models.list_collection_ids_request import ListCollectionIdsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ListCollectionIdsRequest from a JSON string
list_collection_ids_request_instance = ListCollectionIdsRequest.from_json(json)
# print the JSON string representation of the object
print(ListCollectionIdsRequest.to_json())

# convert the object into a dict
list_collection_ids_request_dict = list_collection_ids_request_instance.to_dict()
# create an instance of ListCollectionIdsRequest from a dict
list_collection_ids_request_from_dict = ListCollectionIdsRequest.from_dict(list_collection_ids_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


