# AnalysisServicesServerProperties

Properties of Analysis Services resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provisioning_state** | **str** | The current deployment state of Analysis Services resource. The provisioningState is to indicate states for resource provisioning. | [optional] [readonly] 
**server_full_name** | **str** | The full name of the Analysis Services resource. | [optional] [readonly] 
**state** | **str** | The current state of Analysis Services resource. The state is to indicate more states outside of resource provisioning. | [optional] [readonly] 
**as_administrators** | [**ServerAdministrators**](ServerAdministrators.md) |  | [optional] 
**backup_blob_container_uri** | **str** | The SAS container URI to the backup container. | [optional] 
**gateway_details** | [**GatewayDetails**](GatewayDetails.md) |  | [optional] 

## Example

```python
from openapi_client.models.analysis_services_server_properties import AnalysisServicesServerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AnalysisServicesServerProperties from a JSON string
analysis_services_server_properties_instance = AnalysisServicesServerProperties.from_json(json)
# print the JSON string representation of the object
print(AnalysisServicesServerProperties.to_json())

# convert the object into a dict
analysis_services_server_properties_dict = analysis_services_server_properties_instance.to_dict()
# create an instance of AnalysisServicesServerProperties from a dict
analysis_services_server_properties_from_dict = AnalysisServicesServerProperties.from_dict(analysis_services_server_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


