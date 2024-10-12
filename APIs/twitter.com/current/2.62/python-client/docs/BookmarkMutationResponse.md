# BookmarkMutationResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**BookmarkMutationResponseData**](BookmarkMutationResponseData.md) |  | [optional] 
**errors** | [**List[Problem]**](Problem.md) |  | [optional] 

## Example

```python
from openapi_client.models.bookmark_mutation_response import BookmarkMutationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BookmarkMutationResponse from a JSON string
bookmark_mutation_response_instance = BookmarkMutationResponse.from_json(json)
# print the JSON string representation of the object
print(BookmarkMutationResponse.to_json())

# convert the object into a dict
bookmark_mutation_response_dict = bookmark_mutation_response_instance.to_dict()
# create an instance of BookmarkMutationResponse from a dict
bookmark_mutation_response_from_dict = BookmarkMutationResponse.from_dict(bookmark_mutation_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


