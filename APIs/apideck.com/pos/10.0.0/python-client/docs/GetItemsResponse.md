# GetItemsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[Item]**](Item.md) |  | 
**links** | [**Links**](Links.md) |  | [optional] 
**meta** | [**Meta**](Meta.md) |  | [optional] 
**operation** | **str** | Operation performed | 
**resource** | **str** | Unified API resource name | 
**service** | **str** | Apideck ID of service provider | 
**status** | **str** | HTTP Response Status | 
**status_code** | **int** | HTTP Response Status Code | 

## Example

```python
from openapi_client.models.get_items_response import GetItemsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetItemsResponse from a JSON string
get_items_response_instance = GetItemsResponse.from_json(json)
# print the JSON string representation of the object
print(GetItemsResponse.to_json())

# convert the object into a dict
get_items_response_dict = get_items_response_instance.to_dict()
# create an instance of GetItemsResponse from a dict
get_items_response_from_dict = GetItemsResponse.from_dict(get_items_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


