# AnalysisServicesServer

Represents an instance of an Analysis Services resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**AnalysisServicesServerProperties**](AnalysisServicesServerProperties.md) |  | [optional] 
**id** | **str** | An identifier that represents the Analysis Services resource. | [optional] [readonly] 
**location** | **str** | Location of the Analysis Services resource. | 
**name** | **str** | The name of the Analysis Services resource. | [optional] [readonly] 
**sku** | [**ResourceSku**](ResourceSku.md) |  | 
**tags** | **Dict[str, str]** | Key-value pairs of additional resource provisioning properties. | [optional] 
**type** | **str** | The type of the Analysis Services resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.analysis_services_server import AnalysisServicesServer

# TODO update the JSON string below
json = "{}"
# create an instance of AnalysisServicesServer from a JSON string
analysis_services_server_instance = AnalysisServicesServer.from_json(json)
# print the JSON string representation of the object
print(AnalysisServicesServer.to_json())

# convert the object into a dict
analysis_services_server_dict = analysis_services_server_instance.to_dict()
# create an instance of AnalysisServicesServer from a dict
analysis_services_server_from_dict = AnalysisServicesServer.from_dict(analysis_services_server_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


