# GoogleFirebaseAppdistroV1ListGroupsResponse

The response message for `ListGroups`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**groups** | [**List[GoogleFirebaseAppdistroV1Group]**](GoogleFirebaseAppdistroV1Group.md) | The groups listed. | [optional] 
**next_page_token** | **str** | A short-lived token, which can be sent as &#x60;pageToken&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.google_firebase_appdistro_v1_list_groups_response import GoogleFirebaseAppdistroV1ListGroupsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirebaseAppdistroV1ListGroupsResponse from a JSON string
google_firebase_appdistro_v1_list_groups_response_instance = GoogleFirebaseAppdistroV1ListGroupsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleFirebaseAppdistroV1ListGroupsResponse.to_json())

# convert the object into a dict
google_firebase_appdistro_v1_list_groups_response_dict = google_firebase_appdistro_v1_list_groups_response_instance.to_dict()
# create an instance of GoogleFirebaseAppdistroV1ListGroupsResponse from a dict
google_firebase_appdistro_v1_list_groups_response_from_dict = GoogleFirebaseAppdistroV1ListGroupsResponse.from_dict(google_firebase_appdistro_v1_list_groups_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


