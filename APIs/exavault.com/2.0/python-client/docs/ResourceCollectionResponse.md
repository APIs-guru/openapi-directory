# ResourceCollectionResponse

Response object for collection of resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[Resource]**](Resource.md) |  | [optional] 
**included** | [**List[ResourceCollectionResponseIncludedInner]**](ResourceCollectionResponseIncludedInner.md) |  | [optional] 
**response_status** | **int** | Http status code of the response. | [optional] 
**returned_results** | **int** | Count of returned results. | [optional] 
**total_results** | **int** | Total count of results found. | [optional] 

## Example

```python
from openapi_client.models.resource_collection_response import ResourceCollectionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceCollectionResponse from a JSON string
resource_collection_response_instance = ResourceCollectionResponse.from_json(json)
# print the JSON string representation of the object
print(ResourceCollectionResponse.to_json())

# convert the object into a dict
resource_collection_response_dict = resource_collection_response_instance.to_dict()
# create an instance of ResourceCollectionResponse from a dict
resource_collection_response_from_dict = ResourceCollectionResponse.from_dict(resource_collection_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


