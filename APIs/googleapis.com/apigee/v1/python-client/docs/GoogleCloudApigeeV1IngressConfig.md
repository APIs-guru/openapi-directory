# GoogleCloudApigeeV1IngressConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**environment_groups** | [**List[GoogleCloudApigeeV1EnvironmentGroupConfig]**](GoogleCloudApigeeV1EnvironmentGroupConfig.md) | List of environment groups in the organization. | [optional] 
**name** | **str** | Name of the resource in the following format: &#x60;organizations/{org}/deployedIngressConfig&#x60;. | [optional] 
**revision_create_time** | **str** | Time at which the IngressConfig revision was created. | [optional] 
**revision_id** | **str** | Revision id that defines the ordering on IngressConfig resources. The higher the revision, the more recently the configuration was deployed. | [optional] 
**uid** | **str** | A unique id for the ingress config that will only change if the organization is deleted and recreated. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_ingress_config import GoogleCloudApigeeV1IngressConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1IngressConfig from a JSON string
google_cloud_apigee_v1_ingress_config_instance = GoogleCloudApigeeV1IngressConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1IngressConfig.to_json())

# convert the object into a dict
google_cloud_apigee_v1_ingress_config_dict = google_cloud_apigee_v1_ingress_config_instance.to_dict()
# create an instance of GoogleCloudApigeeV1IngressConfig from a dict
google_cloud_apigee_v1_ingress_config_from_dict = GoogleCloudApigeeV1IngressConfig.from_dict(google_cloud_apigee_v1_ingress_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


