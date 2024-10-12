# ListUnmappedIdentitiesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Token to retrieve the next page of results, or empty if there are no more results in the list. | [optional] 
**unmapped_identities** | [**List[UnmappedIdentity]**](UnmappedIdentity.md) |  | [optional] 

## Example

```python
from openapi_client.models.list_unmapped_identities_response import ListUnmappedIdentitiesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListUnmappedIdentitiesResponse from a JSON string
list_unmapped_identities_response_instance = ListUnmappedIdentitiesResponse.from_json(json)
# print the JSON string representation of the object
print(ListUnmappedIdentitiesResponse.to_json())

# convert the object into a dict
list_unmapped_identities_response_dict = list_unmapped_identities_response_instance.to_dict()
# create an instance of ListUnmappedIdentitiesResponse from a dict
list_unmapped_identities_response_from_dict = ListUnmappedIdentitiesResponse.from_dict(list_unmapped_identities_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


