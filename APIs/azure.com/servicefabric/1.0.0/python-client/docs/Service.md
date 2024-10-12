# Service

The service

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**has_persisted_state** | **bool** |  | [optional] 
**health_state** | [**HealthState**](HealthState.md) |  | [optional] 
**id** | **str** |  | [optional] 
**is_service_group** | **bool** |  | [optional] 
**manifest_version** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**service_kind** | [**ServiceKind**](ServiceKind.md) |  | [optional] 
**service_status** | **str** |  | [optional] 
**type_name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.service import Service

# TODO update the JSON string below
json = "{}"
# create an instance of Service from a JSON string
service_instance = Service.from_json(json)
# print the JSON string representation of the object
print(Service.to_json())

# convert the object into a dict
service_dict = service_instance.to_dict()
# create an instance of Service from a dict
service_from_dict = Service.from_dict(service_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


