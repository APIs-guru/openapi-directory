# AnalysisServicesServerUpdateParameters

Provision request specification

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**AnalysisServicesServerMutableProperties**](AnalysisServicesServerMutableProperties.md) |  | [optional] 
**sku** | [**ResourceSku**](ResourceSku.md) |  | [optional] 
**tags** | **Dict[str, str]** | Key-value pairs of additional provisioning properties. | [optional] 

## Example

```python
from openapi_client.models.analysis_services_server_update_parameters import AnalysisServicesServerUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of AnalysisServicesServerUpdateParameters from a JSON string
analysis_services_server_update_parameters_instance = AnalysisServicesServerUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(AnalysisServicesServerUpdateParameters.to_json())

# convert the object into a dict
analysis_services_server_update_parameters_dict = analysis_services_server_update_parameters_instance.to_dict()
# create an instance of AnalysisServicesServerUpdateParameters from a dict
analysis_services_server_update_parameters_from_dict = AnalysisServicesServerUpdateParameters.from_dict(analysis_services_server_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


