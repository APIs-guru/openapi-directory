# ServiceBusAuthentication


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sas_key** | **str** | Gets or sets the SAS key. | [optional] 
**sas_key_name** | **str** | Gets or sets the SAS key name. | [optional] 
**type** | **str** | Gets or sets the authentication type. | [optional] 

## Example

```python
from openapi_client.models.service_bus_authentication import ServiceBusAuthentication

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceBusAuthentication from a JSON string
service_bus_authentication_instance = ServiceBusAuthentication.from_json(json)
# print the JSON string representation of the object
print(ServiceBusAuthentication.to_json())

# convert the object into a dict
service_bus_authentication_dict = service_bus_authentication_instance.to_dict()
# create an instance of ServiceBusAuthentication from a dict
service_bus_authentication_from_dict = ServiceBusAuthentication.from_dict(service_bus_authentication_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


