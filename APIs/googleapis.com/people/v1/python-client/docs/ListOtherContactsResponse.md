# ListOtherContactsResponse

The response to a request for the authenticated user's \"Other contacts\".

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**next_sync_token** | **str** | A token, which can be sent as &#x60;sync_token&#x60; to retrieve changes since the last request. Request must set &#x60;request_sync_token&#x60; to return the sync token. | [optional] 
**other_contacts** | [**List[Person]**](Person.md) | The list of \&quot;Other contacts\&quot; returned as Person resources. \&quot;Other contacts\&quot; support a limited subset of fields. See ListOtherContactsRequest.request_mask for more detailed information. | [optional] 
**total_size** | **int** | The total number of other contacts in the list without pagination. | [optional] 

## Example

```python
from openapi_client.models.list_other_contacts_response import ListOtherContactsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListOtherContactsResponse from a JSON string
list_other_contacts_response_instance = ListOtherContactsResponse.from_json(json)
# print the JSON string representation of the object
print(ListOtherContactsResponse.to_json())

# convert the object into a dict
list_other_contacts_response_dict = list_other_contacts_response_instance.to_dict()
# create an instance of ListOtherContactsResponse from a dict
list_other_contacts_response_from_dict = ListOtherContactsResponse.from_dict(list_other_contacts_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


