# AnalysisServicesServers

An array of Analysis Services resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[AnalysisServicesServer]**](AnalysisServicesServer.md) | An array of Analysis Services resources. | 

## Example

```python
from openapi_client.models.analysis_services_servers import AnalysisServicesServers

# TODO update the JSON string below
json = "{}"
# create an instance of AnalysisServicesServers from a JSON string
analysis_services_servers_instance = AnalysisServicesServers.from_json(json)
# print the JSON string representation of the object
print(AnalysisServicesServers.to_json())

# convert the object into a dict
analysis_services_servers_dict = analysis_services_servers_instance.to_dict()
# create an instance of AnalysisServicesServers from a dict
analysis_services_servers_from_dict = AnalysisServicesServers.from_dict(analysis_services_servers_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


