# GetCollectionResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Collection**](Collection.md) |  | 
**status** | **str** | HTTP Response Status | 
**status_code** | **int** | HTTP Response Status Code | 

## Example

```python
from openapi_client.models.get_collection_response import GetCollectionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetCollectionResponse from a JSON string
get_collection_response_instance = GetCollectionResponse.from_json(json)
# print the JSON string representation of the object
print(GetCollectionResponse.to_json())

# convert the object into a dict
get_collection_response_dict = get_collection_response_instance.to_dict()
# create an instance of GetCollectionResponse from a dict
get_collection_response_from_dict = GetCollectionResponse.from_dict(get_collection_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


