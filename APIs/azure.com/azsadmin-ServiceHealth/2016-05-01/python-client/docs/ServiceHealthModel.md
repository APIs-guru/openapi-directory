# ServiceHealthModel

Holds information about the health of a service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Name of the service. | [optional] 
**infra_uri** | **str** | The route prefix to the service. | [optional] 
**service_location** | **str** | Location of the service. | [optional] 
**alert_summary** | [**ServiceHealthModelAllOfAlertSummary**](ServiceHealthModelAllOfAlertSummary.md) |  | [optional] 
**health_state** | **str** | Health state. | [optional] 
**namespace** | **str** | Namespace of the health resource. | [optional] 
**registration_id** | **str** | Registration ID. | [optional] 
**route_prefix** | **str** | Route prefix. | [optional] 

## Example

```python
from openapi_client.models.service_health_model import ServiceHealthModel

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceHealthModel from a JSON string
service_health_model_instance = ServiceHealthModel.from_json(json)
# print the JSON string representation of the object
print(ServiceHealthModel.to_json())

# convert the object into a dict
service_health_model_dict = service_health_model_instance.to_dict()
# create an instance of ServiceHealthModel from a dict
service_health_model_from_dict = ServiceHealthModel.from_dict(service_health_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


