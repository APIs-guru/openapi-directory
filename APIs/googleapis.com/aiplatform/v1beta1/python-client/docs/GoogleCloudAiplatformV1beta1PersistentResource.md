# GoogleCloudAiplatformV1beta1PersistentResource

Represents long-lasting resources that are dedicated to users to runs custom workloads. A PersistentResource can have multiple node pools and each node pool can have its own machine spec.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Time when the PersistentResource was created. | [optional] [readonly] 
**display_name** | **str** | Optional. The display name of the PersistentResource. The name can be up to 128 characters long and can consist of any UTF-8 characters. | [optional] 
**encryption_spec** | [**GoogleCloudAiplatformV1beta1EncryptionSpec**](GoogleCloudAiplatformV1beta1EncryptionSpec.md) |  | [optional] 
**error** | [**GoogleRpcStatus**](GoogleRpcStatus.md) |  | [optional] 
**labels** | **Dict[str, str]** | Optional. The labels with user-defined metadata to organize PersistentResource. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. See https://goo.gl/xmQnxf for more information and examples of labels. | [optional] 
**name** | **str** | Immutable. Resource name of a PersistentResource. | [optional] 
**network** | **str** | Optional. The full name of the Compute Engine [network](/compute/docs/networks-and-firewalls#networks) to peered with Vertex AI to host the persistent resources. For example, &#x60;projects/12345/global/networks/myVPC&#x60;. [Format](/compute/docs/reference/rest/v1/networks/insert) is of the form &#x60;projects/{project}/global/networks/{network}&#x60;. Where {project} is a project number, as in &#x60;12345&#x60;, and {network} is a network name. To specify this field, you must have already [configured VPC Network Peering for Vertex AI](https://cloud.google.com/vertex-ai/docs/general/vpc-peering). If this field is left unspecified, the resources aren&#39;t peered with any network. | [optional] 
**reserved_ip_ranges** | **List[str]** | Optional. A list of names for the reserved IP ranges under the VPC network that can be used for this persistent resource. If set, we will deploy the persistent resource within the provided IP ranges. Otherwise, the persistent resource is deployed to any IP ranges under the provided VPC network. Example: [&#39;vertex-ai-ip-range&#39;]. | [optional] 
**resource_pools** | [**List[GoogleCloudAiplatformV1beta1ResourcePool]**](GoogleCloudAiplatformV1beta1ResourcePool.md) | Required. The spec of the pools of different resources. | [optional] 
**resource_runtime** | [**GoogleCloudAiplatformV1beta1ResourceRuntime**](GoogleCloudAiplatformV1beta1ResourceRuntime.md) |  | [optional] 
**resource_runtime_spec** | [**GoogleCloudAiplatformV1beta1ResourceRuntimeSpec**](GoogleCloudAiplatformV1beta1ResourceRuntimeSpec.md) |  | [optional] 
**start_time** | **str** | Output only. Time when the PersistentResource for the first time entered the &#x60;RUNNING&#x60; state. | [optional] [readonly] 
**state** | **str** | Output only. The detailed state of a Study. | [optional] [readonly] 
**update_time** | **str** | Output only. Time when the PersistentResource was most recently updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_persistent_resource import GoogleCloudAiplatformV1beta1PersistentResource

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1PersistentResource from a JSON string
google_cloud_aiplatform_v1beta1_persistent_resource_instance = GoogleCloudAiplatformV1beta1PersistentResource.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1PersistentResource.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_persistent_resource_dict = google_cloud_aiplatform_v1beta1_persistent_resource_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1PersistentResource from a dict
google_cloud_aiplatform_v1beta1_persistent_resource_from_dict = GoogleCloudAiplatformV1beta1PersistentResource.from_dict(google_cloud_aiplatform_v1beta1_persistent_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


