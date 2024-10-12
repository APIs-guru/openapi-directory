# GoogleCloudBeyondcorpAppconnectorsV1AppConnectorPrincipalInfo

PrincipalInfo represents an Identity oneof.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**service_account** | [**GoogleCloudBeyondcorpAppconnectorsV1AppConnectorPrincipalInfoServiceAccount**](GoogleCloudBeyondcorpAppconnectorsV1AppConnectorPrincipalInfoServiceAccount.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_beyondcorp_appconnectors_v1_app_connector_principal_info import GoogleCloudBeyondcorpAppconnectorsV1AppConnectorPrincipalInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudBeyondcorpAppconnectorsV1AppConnectorPrincipalInfo from a JSON string
google_cloud_beyondcorp_appconnectors_v1_app_connector_principal_info_instance = GoogleCloudBeyondcorpAppconnectorsV1AppConnectorPrincipalInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudBeyondcorpAppconnectorsV1AppConnectorPrincipalInfo.to_json())

# convert the object into a dict
google_cloud_beyondcorp_appconnectors_v1_app_connector_principal_info_dict = google_cloud_beyondcorp_appconnectors_v1_app_connector_principal_info_instance.to_dict()
# create an instance of GoogleCloudBeyondcorpAppconnectorsV1AppConnectorPrincipalInfo from a dict
google_cloud_beyondcorp_appconnectors_v1_app_connector_principal_info_from_dict = GoogleCloudBeyondcorpAppconnectorsV1AppConnectorPrincipalInfo.from_dict(google_cloud_beyondcorp_appconnectors_v1_app_connector_principal_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


