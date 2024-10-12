# PaginatedDataStoreList

A paginated list of DataStores.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**continuation_token** | **str** | The token used in retrieving the next page.  If null, there are no additional pages. | [optional] 
**next_link** | **str** | The link to the next page constructed using the continuationToken.  If null, there are no additional pages. | [optional] 
**value** | [**List[DataStore]**](DataStore.md) | An array of objects of type DataStore. | [optional] 

## Example

```python
from openapi_client.models.paginated_data_store_list import PaginatedDataStoreList

# TODO update the JSON string below
json = "{}"
# create an instance of PaginatedDataStoreList from a JSON string
paginated_data_store_list_instance = PaginatedDataStoreList.from_json(json)
# print the JSON string representation of the object
print(PaginatedDataStoreList.to_json())

# convert the object into a dict
paginated_data_store_list_dict = paginated_data_store_list_instance.to_dict()
# create an instance of PaginatedDataStoreList from a dict
paginated_data_store_list_from_dict = PaginatedDataStoreList.from_dict(paginated_data_store_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


