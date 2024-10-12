# AnalysisServicesServerMutableProperties

An object that represents a set of mutable Analysis Services resource properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**as_administrators** | [**ServerAdministrators**](ServerAdministrators.md) |  | [optional] 
**backup_blob_container_uri** | **str** | The container URI of backup blob. | [optional] 

## Example

```python
from openapi_client.models.analysis_services_server_mutable_properties import AnalysisServicesServerMutableProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AnalysisServicesServerMutableProperties from a JSON string
analysis_services_server_mutable_properties_instance = AnalysisServicesServerMutableProperties.from_json(json)
# print the JSON string representation of the object
print(AnalysisServicesServerMutableProperties.to_json())

# convert the object into a dict
analysis_services_server_mutable_properties_dict = analysis_services_server_mutable_properties_instance.to_dict()
# create an instance of AnalysisServicesServerMutableProperties from a dict
analysis_services_server_mutable_properties_from_dict = AnalysisServicesServerMutableProperties.from_dict(analysis_services_server_mutable_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


