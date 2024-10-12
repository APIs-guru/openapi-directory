# GoogleCloudBeyondcorpAppconnectionsV1ListAppConnectionsResponse

Response message for BeyondCorp.ListAppConnections.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_connections** | [**List[GoogleCloudBeyondcorpAppconnectionsV1AppConnection]**](GoogleCloudBeyondcorpAppconnectionsV1AppConnection.md) | A list of BeyondCorp AppConnections in the project. | [optional] 
**next_page_token** | **str** | A token to retrieve the next page of results, or empty if there are no more results in the list. | [optional] 
**unreachable** | **List[str]** | A list of locations that could not be reached. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_beyondcorp_appconnections_v1_list_app_connections_response import GoogleCloudBeyondcorpAppconnectionsV1ListAppConnectionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudBeyondcorpAppconnectionsV1ListAppConnectionsResponse from a JSON string
google_cloud_beyondcorp_appconnections_v1_list_app_connections_response_instance = GoogleCloudBeyondcorpAppconnectionsV1ListAppConnectionsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudBeyondcorpAppconnectionsV1ListAppConnectionsResponse.to_json())

# convert the object into a dict
google_cloud_beyondcorp_appconnections_v1_list_app_connections_response_dict = google_cloud_beyondcorp_appconnections_v1_list_app_connections_response_instance.to_dict()
# create an instance of GoogleCloudBeyondcorpAppconnectionsV1ListAppConnectionsResponse from a dict
google_cloud_beyondcorp_appconnections_v1_list_app_connections_response_from_dict = GoogleCloudBeyondcorpAppconnectionsV1ListAppConnectionsResponse.from_dict(google_cloud_beyondcorp_appconnections_v1_list_app_connections_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


