# GoogleCloudApigeeV1Environment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_proxy_type** | **str** | Optional. API Proxy type supported by the environment. The type can be set when creating the Environment and cannot be changed. | [optional] 
**created_at** | **str** | Output only. Creation time of this environment as milliseconds since epoch. | [optional] [readonly] 
**deployment_type** | **str** | Optional. Deployment type supported by the environment. The deployment type can be set when creating the environment and cannot be changed. When you enable archive deployment, you will be **prevented from performing** a [subset of actions](/apigee/docs/api-platform/local-development/overview#prevented-actions) within the environment, including: * Managing the deployment of API proxy or shared flow revisions * Creating, updating, or deleting resource files * Creating, updating, or deleting target servers | [optional] 
**description** | **str** | Optional. Description of the environment. | [optional] 
**display_name** | **str** | Optional. Display name for this environment. | [optional] 
**forward_proxy_uri** | **str** | Optional. URI of the forward proxy to be applied to the runtime instances in this environment. Must be in the format of {scheme}://{hostname}:{port}. Note that the scheme must be one of \&quot;http\&quot; or \&quot;https\&quot;, and the port must be supplied. To remove a forward proxy setting, update the field to an empty value. Note: At this time, PUT operations to add forwardProxyUri to an existing environment fail if the environment has nodeConfig set up. To successfully add the forwardProxyUri setting in this case, include the NodeConfig details with the request. | [optional] 
**has_attached_flow_hooks** | **bool** |  | [optional] 
**last_modified_at** | **str** | Output only. Last modification time of this environment as milliseconds since epoch. | [optional] [readonly] 
**name** | **str** | Required. Name of the environment. Values must match the regular expression &#x60;^[.\\\\p{Alnum}-_]{1,255}$&#x60; | [optional] 
**node_config** | [**GoogleCloudApigeeV1NodeConfig**](GoogleCloudApigeeV1NodeConfig.md) |  | [optional] 
**properties** | [**GoogleCloudApigeeV1Properties**](GoogleCloudApigeeV1Properties.md) |  | [optional] 
**state** | **str** | Output only. State of the environment. Values other than ACTIVE means the resource is not ready to use. | [optional] [readonly] 
**type** | **str** | Optional. EnvironmentType selected for the environment. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_environment import GoogleCloudApigeeV1Environment

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1Environment from a JSON string
google_cloud_apigee_v1_environment_instance = GoogleCloudApigeeV1Environment.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1Environment.to_json())

# convert the object into a dict
google_cloud_apigee_v1_environment_dict = google_cloud_apigee_v1_environment_instance.to_dict()
# create an instance of GoogleCloudApigeeV1Environment from a dict
google_cloud_apigee_v1_environment_from_dict = GoogleCloudApigeeV1Environment.from_dict(google_cloud_apigee_v1_environment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


