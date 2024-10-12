# GoogleCloudConnectorsV1Connection

Connection represents an instance of connector.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_config** | [**GoogleCloudConnectorsV1AuthConfig**](GoogleCloudConnectorsV1AuthConfig.md) |  | [optional] 
**config_variables** | [**List[GoogleCloudConnectorsV1ConfigVariable]**](GoogleCloudConnectorsV1ConfigVariable.md) | Optional. Configuration for configuring the connection with an external system. | [optional] 
**connection_revision** | **str** | Output only. Connection revision. This field is only updated when the connection is created or updated by User. | [optional] [readonly] 
**connector_version** | **str** | Required. Connector version on which the connection is created. The format is: projects/*/locations/*/providers/*/connectors/*/versions/* Only global location is supported for ConnectorVersion resource. | [optional] 
**connector_version_launch_stage** | **str** | Output only. Flag to mark the version indicating the launch stage. | [optional] [readonly] 
**create_time** | **str** | Output only. Created time. | [optional] [readonly] 
**description** | **str** | Optional. Description of the resource. | [optional] 
**destination_configs** | [**List[GoogleCloudConnectorsV1DestinationConfig]**](GoogleCloudConnectorsV1DestinationConfig.md) | Optional. Configuration of the Connector&#39;s destination. Only accepted for Connectors that accepts user defined destination(s). | [optional] 
**envoy_image_location** | **str** | Output only. GCR location where the envoy image is stored. formatted like: gcr.io/{bucketName}/{imageName} | [optional] [readonly] 
**image_location** | **str** | Output only. GCR location where the runtime image is stored. formatted like: gcr.io/{bucketName}/{imageName} | [optional] [readonly] 
**labels** | **Dict[str, str]** | Optional. Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources | [optional] 
**lock_config** | [**GoogleCloudConnectorsV1LockConfig**](GoogleCloudConnectorsV1LockConfig.md) |  | [optional] 
**log_config** | [**GoogleCloudConnectorsV1LogConfig**](GoogleCloudConnectorsV1LogConfig.md) |  | [optional] 
**name** | **str** | Output only. Resource name of the Connection. Format: projects/{project}/locations/{location}/connections/{connection} | [optional] [readonly] 
**node_config** | [**GoogleCloudConnectorsV1NodeConfig**](GoogleCloudConnectorsV1NodeConfig.md) |  | [optional] 
**service_account** | **str** | Optional. Service account needed for runtime plane to access GCP resources. | [optional] 
**service_directory** | **str** | Output only. The name of the Service Directory service name. Used for Private Harpoon to resolve the ILB address. e.g. \&quot;projects/cloud-connectors-e2e-testing/locations/us-central1/namespaces/istio-system/services/istio-ingressgateway-connectors\&quot; | [optional] [readonly] 
**ssl_config** | [**GoogleCloudConnectorsV1SslConfig**](GoogleCloudConnectorsV1SslConfig.md) |  | [optional] 
**status** | [**GoogleCloudConnectorsV1ConnectionStatus**](GoogleCloudConnectorsV1ConnectionStatus.md) |  | [optional] 
**subscription_type** | **str** | Output only. This subscription type enum states the subscription type of the project. | [optional] [readonly] 
**suspended** | **bool** | Optional. Suspended indicates if a user has suspended a connection or not. | [optional] 
**update_time** | **str** | Output only. Updated time. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_connectors_v1_connection import GoogleCloudConnectorsV1Connection

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudConnectorsV1Connection from a JSON string
google_cloud_connectors_v1_connection_instance = GoogleCloudConnectorsV1Connection.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudConnectorsV1Connection.to_json())

# convert the object into a dict
google_cloud_connectors_v1_connection_dict = google_cloud_connectors_v1_connection_instance.to_dict()
# create an instance of GoogleCloudConnectorsV1Connection from a dict
google_cloud_connectors_v1_connection_from_dict = GoogleCloudConnectorsV1Connection.from_dict(google_cloud_connectors_v1_connection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


