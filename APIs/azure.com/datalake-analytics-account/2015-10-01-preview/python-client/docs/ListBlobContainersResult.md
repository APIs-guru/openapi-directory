# ListBlobContainersResult

The list of blob containers associated with the storage account attached to the Data Lake Analytics account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | the link (url) to the next page of results. | [optional] [readonly] 
**value** | [**List[BlobContainer]**](BlobContainer.md) | the results of the list operation | [optional] [readonly] 

## Example

```python
from openapi_client.models.list_blob_containers_result import ListBlobContainersResult

# TODO update the JSON string below
json = "{}"
# create an instance of ListBlobContainersResult from a JSON string
list_blob_containers_result_instance = ListBlobContainersResult.from_json(json)
# print the JSON string representation of the object
print(ListBlobContainersResult.to_json())

# convert the object into a dict
list_blob_containers_result_dict = list_blob_containers_result_instance.to_dict()
# create an instance of ListBlobContainersResult from a dict
list_blob_containers_result_from_dict = ListBlobContainersResult.from_dict(list_blob_containers_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


