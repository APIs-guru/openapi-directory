# ListCollectionIdsResponse

The response from Firestore.ListCollectionIds.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**collection_ids** | **List[str]** | The collection ids. | [optional] 
**next_page_token** | **str** | A page token that may be used to continue the list. | [optional] 

## Example

```python
from openapi_client.models.list_collection_ids_response import ListCollectionIdsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListCollectionIdsResponse from a JSON string
list_collection_ids_response_instance = ListCollectionIdsResponse.from_json(json)
# print the JSON string representation of the object
print(ListCollectionIdsResponse.to_json())

# convert the object into a dict
list_collection_ids_response_dict = list_collection_ids_response_instance.to_dict()
# create an instance of ListCollectionIdsResponse from a dict
list_collection_ids_response_from_dict = ListCollectionIdsResponse.from_dict(list_collection_ids_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


