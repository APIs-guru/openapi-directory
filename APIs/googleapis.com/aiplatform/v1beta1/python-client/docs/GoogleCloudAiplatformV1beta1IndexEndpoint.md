# GoogleCloudAiplatformV1beta1IndexEndpoint

Indexes are deployed into it. An IndexEndpoint can have multiple DeployedIndexes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Timestamp when this IndexEndpoint was created. | [optional] [readonly] 
**deployed_indexes** | [**List[GoogleCloudAiplatformV1beta1DeployedIndex]**](GoogleCloudAiplatformV1beta1DeployedIndex.md) | Output only. The indexes deployed in this endpoint. | [optional] [readonly] 
**description** | **str** | The description of the IndexEndpoint. | [optional] 
**display_name** | **str** | Required. The display name of the IndexEndpoint. The name can be up to 128 characters long and can consist of any UTF-8 characters. | [optional] 
**enable_private_service_connect** | **bool** | Optional. Deprecated: If true, expose the IndexEndpoint via private service connect. Only one of the fields, network or enable_private_service_connect, can be set. | [optional] 
**encryption_spec** | [**GoogleCloudAiplatformV1beta1EncryptionSpec**](GoogleCloudAiplatformV1beta1EncryptionSpec.md) |  | [optional] 
**etag** | **str** | Used to perform consistent read-modify-write updates. If not set, a blind \&quot;overwrite\&quot; update happens. | [optional] 
**labels** | **Dict[str, str]** | The labels with user-defined metadata to organize your IndexEndpoints. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. See https://goo.gl/xmQnxf for more information and examples of labels. | [optional] 
**name** | **str** | Output only. The resource name of the IndexEndpoint. | [optional] [readonly] 
**network** | **str** | Optional. The full name of the Google Compute Engine [network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks) to which the IndexEndpoint should be peered. Private services access must already be configured for the network. If left unspecified, the Endpoint is not peered with any network. network and private_service_connect_config are mutually exclusive. [Format](https://cloud.google.com/compute/docs/reference/rest/v1/networks/insert): &#x60;projects/{project}/global/networks/{network}&#x60;. Where {project} is a project number, as in &#39;12345&#39;, and {network} is network name. | [optional] 
**private_service_connect_config** | [**GoogleCloudAiplatformV1beta1PrivateServiceConnectConfig**](GoogleCloudAiplatformV1beta1PrivateServiceConnectConfig.md) |  | [optional] 
**public_endpoint_domain_name** | **str** | Output only. If public_endpoint_enabled is true, this field will be populated with the domain name to use for this index endpoint. | [optional] [readonly] 
**public_endpoint_enabled** | **bool** | Optional. If true, the deployed index will be accessible through public endpoint. | [optional] 
**update_time** | **str** | Output only. Timestamp when this IndexEndpoint was last updated. This timestamp is not updated when the endpoint&#39;s DeployedIndexes are updated, e.g. due to updates of the original Indexes they are the deployments of. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_index_endpoint import GoogleCloudAiplatformV1beta1IndexEndpoint

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1IndexEndpoint from a JSON string
google_cloud_aiplatform_v1beta1_index_endpoint_instance = GoogleCloudAiplatformV1beta1IndexEndpoint.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1IndexEndpoint.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_index_endpoint_dict = google_cloud_aiplatform_v1beta1_index_endpoint_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1IndexEndpoint from a dict
google_cloud_aiplatform_v1beta1_index_endpoint_from_dict = GoogleCloudAiplatformV1beta1IndexEndpoint.from_dict(google_cloud_aiplatform_v1beta1_index_endpoint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


