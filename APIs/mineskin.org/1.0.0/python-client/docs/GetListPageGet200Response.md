# GetListPageGet200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter** | **str** |  | [optional] 
**page** | [**GetListPageGet200ResponsePage**](GetListPageGet200ResponsePage.md) |  | 
**skins** | [**List[PartialSkinInfo]**](PartialSkinInfo.md) |  | 

## Example

```python
from openapi_client.models.get_list_page_get200_response import GetListPageGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetListPageGet200Response from a JSON string
get_list_page_get200_response_instance = GetListPageGet200Response.from_json(json)
# print the JSON string representation of the object
print(GetListPageGet200Response.to_json())

# convert the object into a dict
get_list_page_get200_response_dict = get_list_page_get200_response_instance.to_dict()
# create an instance of GetListPageGet200Response from a dict
get_list_page_get200_response_from_dict = GetListPageGet200Response.from_dict(get_list_page_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


