# PagedListUserDetailsApplicationUser

A paged list. To access additional details append `[start-index:end-index]` to the expand request. For example, `?expand=sharedUsers[10:40]` returns a list starting at item 10 and finishing at item 40.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_index** | **int** | The index of the last item returned on the page. | [optional] [readonly] 
**items** | [**List[UserDetails]**](UserDetails.md) | The list of items. | [optional] [readonly] 
**max_results** | **int** | The maximum number of results that could be on the page. | [optional] [readonly] 
**size** | **int** | The number of items on the page. | [optional] [readonly] 
**start_index** | **int** | The index of the first item returned on the page. | [optional] [readonly] 

## Example

```python
from openapi_client.models.paged_list_user_details_application_user import PagedListUserDetailsApplicationUser

# TODO update the JSON string below
json = "{}"
# create an instance of PagedListUserDetailsApplicationUser from a JSON string
paged_list_user_details_application_user_instance = PagedListUserDetailsApplicationUser.from_json(json)
# print the JSON string representation of the object
print(PagedListUserDetailsApplicationUser.to_json())

# convert the object into a dict
paged_list_user_details_application_user_dict = paged_list_user_details_application_user_instance.to_dict()
# create an instance of PagedListUserDetailsApplicationUser from a dict
paged_list_user_details_application_user_from_dict = PagedListUserDetailsApplicationUser.from_dict(paged_list_user_details_application_user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


