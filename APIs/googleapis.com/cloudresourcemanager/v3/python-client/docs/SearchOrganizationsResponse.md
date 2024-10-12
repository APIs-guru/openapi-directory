# SearchOrganizationsResponse

The response returned from the `SearchOrganizations` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A pagination token to be used to retrieve the next page of results. If the result is too large to fit within the page size specified in the request, this field will be set with a token that can be used to fetch the next page of results. If this field is empty, it indicates that this response contains the last page of results. | [optional] 
**organizations** | [**List[Organization]**](Organization.md) | The list of Organizations that matched the search query, possibly paginated. | [optional] 

## Example

```python
from openapi_client.models.search_organizations_response import SearchOrganizationsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SearchOrganizationsResponse from a JSON string
search_organizations_response_instance = SearchOrganizationsResponse.from_json(json)
# print the JSON string representation of the object
print(SearchOrganizationsResponse.to_json())

# convert the object into a dict
search_organizations_response_dict = search_organizations_response_instance.to_dict()
# create an instance of SearchOrganizationsResponse from a dict
search_organizations_response_from_dict = SearchOrganizationsResponse.from_dict(search_organizations_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


