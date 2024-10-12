# GoogleCloudBeyondcorpAppconnectorsV1ListAppConnectorsResponse

Response message for BeyondCorp.ListAppConnectors.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_connectors** | [**List[GoogleCloudBeyondcorpAppconnectorsV1AppConnector]**](GoogleCloudBeyondcorpAppconnectorsV1AppConnector.md) | A list of BeyondCorp AppConnectors in the project. | [optional] 
**next_page_token** | **str** | A token to retrieve the next page of results, or empty if there are no more results in the list. | [optional] 
**unreachable** | **List[str]** | A list of locations that could not be reached. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_beyondcorp_appconnectors_v1_list_app_connectors_response import GoogleCloudBeyondcorpAppconnectorsV1ListAppConnectorsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudBeyondcorpAppconnectorsV1ListAppConnectorsResponse from a JSON string
google_cloud_beyondcorp_appconnectors_v1_list_app_connectors_response_instance = GoogleCloudBeyondcorpAppconnectorsV1ListAppConnectorsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudBeyondcorpAppconnectorsV1ListAppConnectorsResponse.to_json())

# convert the object into a dict
google_cloud_beyondcorp_appconnectors_v1_list_app_connectors_response_dict = google_cloud_beyondcorp_appconnectors_v1_list_app_connectors_response_instance.to_dict()
# create an instance of GoogleCloudBeyondcorpAppconnectorsV1ListAppConnectorsResponse from a dict
google_cloud_beyondcorp_appconnectors_v1_list_app_connectors_response_from_dict = GoogleCloudBeyondcorpAppconnectorsV1ListAppConnectorsResponse.from_dict(google_cloud_beyondcorp_appconnectors_v1_list_app_connectors_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


