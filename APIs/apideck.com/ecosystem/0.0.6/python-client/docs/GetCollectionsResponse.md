# GetCollectionsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[Collection]**](Collection.md) |  | 
**status** | **str** | HTTP Response Status | 
**status_code** | **int** | HTTP Response Status Code | 

## Example

```python
from openapi_client.models.get_collections_response import GetCollectionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetCollectionsResponse from a JSON string
get_collections_response_instance = GetCollectionsResponse.from_json(json)
# print the JSON string representation of the object
print(GetCollectionsResponse.to_json())

# convert the object into a dict
get_collections_response_dict = get_collections_response_instance.to_dict()
# create an instance of GetCollectionsResponse from a dict
get_collections_response_from_dict = GetCollectionsResponse.from_dict(get_collections_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


