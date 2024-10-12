# GoogleCloudBeyondcorpAppconnectionsV1AppConnectionApplicationEndpoint

ApplicationEndpoint represents a remote application endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host** | **str** | Required. Hostname or IP address of the remote application endpoint. | [optional] 
**port** | **int** | Required. Port of the remote application endpoint. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_beyondcorp_appconnections_v1_app_connection_application_endpoint import GoogleCloudBeyondcorpAppconnectionsV1AppConnectionApplicationEndpoint

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudBeyondcorpAppconnectionsV1AppConnectionApplicationEndpoint from a JSON string
google_cloud_beyondcorp_appconnections_v1_app_connection_application_endpoint_instance = GoogleCloudBeyondcorpAppconnectionsV1AppConnectionApplicationEndpoint.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudBeyondcorpAppconnectionsV1AppConnectionApplicationEndpoint.to_json())

# convert the object into a dict
google_cloud_beyondcorp_appconnections_v1_app_connection_application_endpoint_dict = google_cloud_beyondcorp_appconnections_v1_app_connection_application_endpoint_instance.to_dict()
# create an instance of GoogleCloudBeyondcorpAppconnectionsV1AppConnectionApplicationEndpoint from a dict
google_cloud_beyondcorp_appconnections_v1_app_connection_application_endpoint_from_dict = GoogleCloudBeyondcorpAppconnectionsV1AppConnectionApplicationEndpoint.from_dict(google_cloud_beyondcorp_appconnections_v1_app_connection_application_endpoint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


