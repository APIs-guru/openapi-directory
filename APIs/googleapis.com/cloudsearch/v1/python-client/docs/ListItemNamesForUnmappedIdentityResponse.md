# ListItemNamesForUnmappedIdentityResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**item_names** | **List[str]** |  | [optional] 
**next_page_token** | **str** | Token to retrieve the next page of results, or empty if there are no more results in the list. | [optional] 

## Example

```python
from openapi_client.models.list_item_names_for_unmapped_identity_response import ListItemNamesForUnmappedIdentityResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListItemNamesForUnmappedIdentityResponse from a JSON string
list_item_names_for_unmapped_identity_response_instance = ListItemNamesForUnmappedIdentityResponse.from_json(json)
# print the JSON string representation of the object
print(ListItemNamesForUnmappedIdentityResponse.to_json())

# convert the object into a dict
list_item_names_for_unmapped_identity_response_dict = list_item_names_for_unmapped_identity_response_instance.to_dict()
# create an instance of ListItemNamesForUnmappedIdentityResponse from a dict
list_item_names_for_unmapped_identity_response_from_dict = ListItemNamesForUnmappedIdentityResponse.from_dict(list_item_names_for_unmapped_identity_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


