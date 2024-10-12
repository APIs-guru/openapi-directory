# SystemService

A system service running on a compute.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**public_ip_address** | **str** | Public IP address | [optional] [readonly] 
**system_service_type** | **str** | The type of this system service. | [optional] [readonly] 
**version** | **str** | The version for this type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.system_service import SystemService

# TODO update the JSON string below
json = "{}"
# create an instance of SystemService from a JSON string
system_service_instance = SystemService.from_json(json)
# print the JSON string representation of the object
print(SystemService.to_json())

# convert the object into a dict
system_service_dict = system_service_instance.to_dict()
# create an instance of SystemService from a dict
system_service_from_dict = SystemService.from_dict(system_service_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


