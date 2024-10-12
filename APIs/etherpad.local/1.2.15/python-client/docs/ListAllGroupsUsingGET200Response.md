# ListAllGroupsUsingGET200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **int** |  | [optional] 
**data** | [**ListAllGroupsUsingGET200ResponseData**](ListAllGroupsUsingGET200ResponseData.md) |  | [optional] 
**message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.list_all_groups_using_get200_response import ListAllGroupsUsingGET200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ListAllGroupsUsingGET200Response from a JSON string
list_all_groups_using_get200_response_instance = ListAllGroupsUsingGET200Response.from_json(json)
# print the JSON string representation of the object
print(ListAllGroupsUsingGET200Response.to_json())

# convert the object into a dict
list_all_groups_using_get200_response_dict = list_all_groups_using_get200_response_instance.to_dict()
# create an instance of ListAllGroupsUsingGET200Response from a dict
list_all_groups_using_get200_response_from_dict = ListAllGroupsUsingGET200Response.from_dict(list_all_groups_using_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


