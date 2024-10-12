# GetStoreResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**EcommerceStore**](EcommerceStore.md) |  | 
**operation** | **str** | Operation performed | 
**resource** | **str** | Unified API resource name | 
**service** | **str** | Apideck ID of service provider | 
**status** | **str** | HTTP Response Status | 
**status_code** | **int** | HTTP Response Status Code | 

## Example

```python
from openapi_client.models.get_store_response import GetStoreResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetStoreResponse from a JSON string
get_store_response_instance = GetStoreResponse.from_json(json)
# print the JSON string representation of the object
print(GetStoreResponse.to_json())

# convert the object into a dict
get_store_response_dict = get_store_response_instance.to_dict()
# create an instance of GetStoreResponse from a dict
get_store_response_from_dict = GetStoreResponse.from_dict(get_store_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


