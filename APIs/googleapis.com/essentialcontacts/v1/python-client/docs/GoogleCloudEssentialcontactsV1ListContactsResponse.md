# GoogleCloudEssentialcontactsV1ListContactsResponse

Response message for the ListContacts method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contacts** | [**List[GoogleCloudEssentialcontactsV1Contact]**](GoogleCloudEssentialcontactsV1Contact.md) | The contacts for the specified resource. | [optional] 
**next_page_token** | **str** | If there are more results than those appearing in this response, then &#x60;next_page_token&#x60; is included. To get the next set of results, call this method again using the value of &#x60;next_page_token&#x60; as &#x60;page_token&#x60; and the rest of the parameters the same as the original request. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_essentialcontacts_v1_list_contacts_response import GoogleCloudEssentialcontactsV1ListContactsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudEssentialcontactsV1ListContactsResponse from a JSON string
google_cloud_essentialcontacts_v1_list_contacts_response_instance = GoogleCloudEssentialcontactsV1ListContactsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudEssentialcontactsV1ListContactsResponse.to_json())

# convert the object into a dict
google_cloud_essentialcontacts_v1_list_contacts_response_dict = google_cloud_essentialcontacts_v1_list_contacts_response_instance.to_dict()
# create an instance of GoogleCloudEssentialcontactsV1ListContactsResponse from a dict
google_cloud_essentialcontacts_v1_list_contacts_response_from_dict = GoogleCloudEssentialcontactsV1ListContactsResponse.from_dict(google_cloud_essentialcontacts_v1_list_contacts_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


