# ConnectionProperties

Properties for a connection resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**failure_state** | [**ConnectionFailureState**](ConnectionFailureState.md) |  | [optional] 
**server_port** | [**PortReference**](PortReference.md) |  | [optional] 
**destination** | [**ResourceReference**](ResourceReference.md) |  | 
**end_time** | **datetime** | Relationship end time. | [optional] 
**source** | [**ResourceReference**](ResourceReference.md) |  | 
**start_time** | **datetime** | Relationship start time. | [optional] 

## Example

```python
from openapi_client.models.connection_properties import ConnectionProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionProperties from a JSON string
connection_properties_instance = ConnectionProperties.from_json(json)
# print the JSON string representation of the object
print(ConnectionProperties.to_json())

# convert the object into a dict
connection_properties_dict = connection_properties_instance.to_dict()
# create an instance of ConnectionProperties from a dict
connection_properties_from_dict = ConnectionProperties.from_dict(connection_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


