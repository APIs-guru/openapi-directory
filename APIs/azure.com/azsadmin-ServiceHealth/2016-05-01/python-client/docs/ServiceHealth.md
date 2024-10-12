# ServiceHealth

Holds information about the health of a service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ServiceHealthModel**](ServiceHealthModel.md) |  | [optional] 
**location** | **str** | The Azure Region where the resource lives | [optional] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**id** | **str** | Fully qualified resource Id for the resource | [optional] [readonly] 
**name** | **str** | The name of the resource | [optional] [readonly] 
**type** | **str** | The type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.service_health import ServiceHealth

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceHealth from a JSON string
service_health_instance = ServiceHealth.from_json(json)
# print the JSON string representation of the object
print(ServiceHealth.to_json())

# convert the object into a dict
service_health_dict = service_health_instance.to_dict()
# create an instance of ServiceHealth from a dict
service_health_from_dict = ServiceHealth.from_dict(service_health_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


