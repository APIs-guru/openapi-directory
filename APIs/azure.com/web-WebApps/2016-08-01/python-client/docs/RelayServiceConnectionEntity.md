# RelayServiceConnectionEntity

Hybrid Connection for an App Service app.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | RelayServiceConnectionEntity resource specific properties | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**name** | **str** | Resource Name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.relay_service_connection_entity import RelayServiceConnectionEntity

# TODO update the JSON string below
json = "{}"
# create an instance of RelayServiceConnectionEntity from a JSON string
relay_service_connection_entity_instance = RelayServiceConnectionEntity.from_json(json)
# print the JSON string representation of the object
print(RelayServiceConnectionEntity.to_json())

# convert the object into a dict
relay_service_connection_entity_dict = relay_service_connection_entity_instance.to_dict()
# create an instance of RelayServiceConnectionEntity from a dict
relay_service_connection_entity_from_dict = RelayServiceConnectionEntity.from_dict(relay_service_connection_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


