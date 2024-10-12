# IPConfiguration

IPConfiguration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated | [optional] 
**name** | **str** | Gets name of the resource that is unique within a resource group. This name can be used to access the resource | [optional] 
**properties** | [**IPConfigurationPropertiesFormat**](IPConfigurationPropertiesFormat.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] 

## Example

```python
from openapi_client.models.ip_configuration import IPConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of IPConfiguration from a JSON string
ip_configuration_instance = IPConfiguration.from_json(json)
# print the JSON string representation of the object
print(IPConfiguration.to_json())

# convert the object into a dict
ip_configuration_dict = ip_configuration_instance.to_dict()
# create an instance of IPConfiguration from a dict
ip_configuration_from_dict = IPConfiguration.from_dict(ip_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


