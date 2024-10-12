# ListAuthorizedOrgsDescsResponse

A response to `ListAuthorizedOrgsDescsRequest`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorized_orgs_descs** | [**List[AuthorizedOrgsDesc]**](AuthorizedOrgsDesc.md) | List of all the Authorized Orgs Desc instances. | [optional] 
**next_page_token** | **str** | The pagination token to retrieve the next page of results. If the value is empty, no further results remain. | [optional] 

## Example

```python
from openapi_client.models.list_authorized_orgs_descs_response import ListAuthorizedOrgsDescsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListAuthorizedOrgsDescsResponse from a JSON string
list_authorized_orgs_descs_response_instance = ListAuthorizedOrgsDescsResponse.from_json(json)
# print the JSON string representation of the object
print(ListAuthorizedOrgsDescsResponse.to_json())

# convert the object into a dict
list_authorized_orgs_descs_response_dict = list_authorized_orgs_descs_response_instance.to_dict()
# create an instance of ListAuthorizedOrgsDescsResponse from a dict
list_authorized_orgs_descs_response_from_dict = ListAuthorizedOrgsDescsResponse.from_dict(list_authorized_orgs_descs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


