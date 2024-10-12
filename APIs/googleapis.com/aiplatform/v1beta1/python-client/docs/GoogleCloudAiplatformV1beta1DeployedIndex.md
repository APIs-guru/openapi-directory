# GoogleCloudAiplatformV1beta1DeployedIndex

A deployment of an Index. IndexEndpoints contain one or more DeployedIndexes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**automatic_resources** | [**GoogleCloudAiplatformV1beta1AutomaticResources**](GoogleCloudAiplatformV1beta1AutomaticResources.md) |  | [optional] 
**create_time** | **str** | Output only. Timestamp when the DeployedIndex was created. | [optional] [readonly] 
**dedicated_resources** | [**GoogleCloudAiplatformV1beta1DedicatedResources**](GoogleCloudAiplatformV1beta1DedicatedResources.md) |  | [optional] 
**deployed_index_auth_config** | [**GoogleCloudAiplatformV1beta1DeployedIndexAuthConfig**](GoogleCloudAiplatformV1beta1DeployedIndexAuthConfig.md) |  | [optional] 
**deployment_group** | **str** | Optional. The deployment group can be no longer than 64 characters (eg: &#39;test&#39;, &#39;prod&#39;). If not set, we will use the &#39;default&#39; deployment group. Creating &#x60;deployment_groups&#x60; with &#x60;reserved_ip_ranges&#x60; is a recommended practice when the peered network has multiple peering ranges. This creates your deployments from predictable IP spaces for easier traffic administration. Also, one deployment_group (except &#39;default&#39;) can only be used with the same reserved_ip_ranges which means if the deployment_group has been used with reserved_ip_ranges: [a, b, c], using it with [a, b] or [d, e] is disallowed. Note: we only support up to 5 deployment groups(not including &#39;default&#39;). | [optional] 
**display_name** | **str** | The display name of the DeployedIndex. If not provided upon creation, the Index&#39;s display_name is used. | [optional] 
**enable_access_logging** | **bool** | Optional. If true, private endpoint&#39;s access logs are sent to Cloud Logging. These logs are like standard server access logs, containing information like timestamp and latency for each MatchRequest. Note that logs may incur a cost, especially if the deployed index receives a high queries per second rate (QPS). Estimate your costs before enabling this option. | [optional] 
**id** | **str** | Required. The user specified ID of the DeployedIndex. The ID can be up to 128 characters long and must start with a letter and only contain letters, numbers, and underscores. The ID must be unique within the project it is created in. | [optional] 
**index** | **str** | Required. The name of the Index this is the deployment of. We may refer to this Index as the DeployedIndex&#39;s \&quot;original\&quot; Index. | [optional] 
**index_sync_time** | **str** | Output only. The DeployedIndex may depend on various data on its original Index. Additionally when certain changes to the original Index are being done (e.g. when what the Index contains is being changed) the DeployedIndex may be asynchronously updated in the background to reflect these changes. If this timestamp&#39;s value is at least the Index.update_time of the original Index, it means that this DeployedIndex and the original Index are in sync. If this timestamp is older, then to see which updates this DeployedIndex already contains (and which it does not), one must list the operations that are running on the original Index. Only the successfully completed Operations with update_time equal or before this sync time are contained in this DeployedIndex. | [optional] [readonly] 
**private_endpoints** | [**GoogleCloudAiplatformV1beta1IndexPrivateEndpoints**](GoogleCloudAiplatformV1beta1IndexPrivateEndpoints.md) |  | [optional] 
**reserved_ip_ranges** | **List[str]** | Optional. A list of reserved ip ranges under the VPC network that can be used for this DeployedIndex. If set, we will deploy the index within the provided ip ranges. Otherwise, the index might be deployed to any ip ranges under the provided VPC network. The value should be the name of the address (https://cloud.google.com/compute/docs/reference/rest/v1/addresses) Example: [&#39;vertex-ai-ip-range&#39;]. For more information about subnets and network IP ranges, please see https://cloud.google.com/vpc/docs/subnets#manually_created_subnet_ip_ranges. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_deployed_index import GoogleCloudAiplatformV1beta1DeployedIndex

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1DeployedIndex from a JSON string
google_cloud_aiplatform_v1beta1_deployed_index_instance = GoogleCloudAiplatformV1beta1DeployedIndex.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1DeployedIndex.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_deployed_index_dict = google_cloud_aiplatform_v1beta1_deployed_index_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1DeployedIndex from a dict
google_cloud_aiplatform_v1beta1_deployed_index_from_dict = GoogleCloudAiplatformV1beta1DeployedIndex.from_dict(google_cloud_aiplatform_v1beta1_deployed_index_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


