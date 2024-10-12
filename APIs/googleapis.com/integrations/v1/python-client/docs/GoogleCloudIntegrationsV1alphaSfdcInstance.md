# GoogleCloudIntegrationsV1alphaSfdcInstance

The SfdcInstance resource use to hold channels and connection config data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_config_id** | **List[str]** | A list of AuthConfigs that can be tried to open the channel to SFDC | [optional] 
**create_time** | **str** | Output only. Time when the instance is created | [optional] [readonly] 
**delete_time** | **str** | Output only. Time when the instance was deleted. Empty if not deleted. | [optional] [readonly] 
**description** | **str** | A description of the sfdc instance. | [optional] 
**display_name** | **str** | User selected unique name/alias to easily reference an instance. | [optional] 
**name** | **str** | Resource name of the SFDC instance projects/{project}/locations/{location}/sfdcInstances/{sfdcInstance}. | [optional] 
**service_authority** | **str** | URL used for API calls after authentication (the login authority is configured within the referenced AuthConfig). | [optional] 
**sfdc_org_id** | **str** | The SFDC Org Id. This is defined in salesforce. | [optional] 
**update_time** | **str** | Output only. Time when the instance was last updated | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_integrations_v1alpha_sfdc_instance import GoogleCloudIntegrationsV1alphaSfdcInstance

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIntegrationsV1alphaSfdcInstance from a JSON string
google_cloud_integrations_v1alpha_sfdc_instance_instance = GoogleCloudIntegrationsV1alphaSfdcInstance.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIntegrationsV1alphaSfdcInstance.to_json())

# convert the object into a dict
google_cloud_integrations_v1alpha_sfdc_instance_dict = google_cloud_integrations_v1alpha_sfdc_instance_instance.to_dict()
# create an instance of GoogleCloudIntegrationsV1alphaSfdcInstance from a dict
google_cloud_integrations_v1alpha_sfdc_instance_from_dict = GoogleCloudIntegrationsV1alphaSfdcInstance.from_dict(google_cloud_integrations_v1alpha_sfdc_instance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


