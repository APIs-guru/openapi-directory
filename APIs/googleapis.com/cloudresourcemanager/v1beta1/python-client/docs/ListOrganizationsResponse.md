# ListOrganizationsResponse

The response returned from the `ListOrganizations` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A pagination token to be used to retrieve the next page of results. If the result is too large to fit within the page size specified in the request, this field will be set with a token that can be used to fetch the next page of results. If this field is empty, it indicates that this response contains the last page of results. | [optional] 
**organizations** | [**List[Organization]**](Organization.md) | The list of Organizations that matched the list query, possibly paginated. | [optional] 

## Example

```python
from openapi_client.models.list_organizations_response import ListOrganizationsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListOrganizationsResponse from a JSON string
list_organizations_response_instance = ListOrganizationsResponse.from_json(json)
# print the JSON string representation of the object
print(ListOrganizationsResponse.to_json())

# convert the object into a dict
list_organizations_response_dict = list_organizations_response_instance.to_dict()
# create an instance of ListOrganizationsResponse from a dict
list_organizations_response_from_dict = ListOrganizationsResponse.from_dict(list_organizations_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


