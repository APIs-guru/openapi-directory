# ListCseIdentitiesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cse_identities** | [**List[CseIdentity]**](CseIdentity.md) | One page of the list of CSE identities configured for the user. | [optional] 
**next_page_token** | **str** | Pagination token to be passed to a subsequent ListCseIdentities call in order to retrieve the next page of identities. If this value is not returned or is the empty string, then no further pages remain. | [optional] 

## Example

```python
from openapi_client.models.list_cse_identities_response import ListCseIdentitiesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListCseIdentitiesResponse from a JSON string
list_cse_identities_response_instance = ListCseIdentitiesResponse.from_json(json)
# print the JSON string representation of the object
print(ListCseIdentitiesResponse.to_json())

# convert the object into a dict
list_cse_identities_response_dict = list_cse_identities_response_instance.to_dict()
# create an instance of ListCseIdentitiesResponse from a dict
list_cse_identities_response_from_dict = ListCseIdentitiesResponse.from_dict(list_cse_identities_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


