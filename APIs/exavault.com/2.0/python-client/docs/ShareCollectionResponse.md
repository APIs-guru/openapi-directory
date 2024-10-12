# ShareCollectionResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[Share]**](Share.md) |  | [optional] 
**included** | [**List[ShareCollectionResponseIncludedInner]**](ShareCollectionResponseIncludedInner.md) |  | [optional] 
**response_status** | **int** | Http status code of the response. | [optional] 
**returned_results** | **int** | Number of returned results. | [optional] 
**total_results** | **int** | Total results found.  | [optional] 

## Example

```python
from openapi_client.models.share_collection_response import ShareCollectionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ShareCollectionResponse from a JSON string
share_collection_response_instance = ShareCollectionResponse.from_json(json)
# print the JSON string representation of the object
print(ShareCollectionResponse.to_json())

# convert the object into a dict
share_collection_response_dict = share_collection_response_instance.to_dict()
# create an instance of ShareCollectionResponse from a dict
share_collection_response_from_dict = ShareCollectionResponse.from_dict(share_collection_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


