# CloudApplianceConfiguration

The cloud appliance configuration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**CloudApplianceConfigurationProperties**](CloudApplianceConfigurationProperties.md) |  | 
**id** | **str** | The path ID that uniquely identifies the object. | [optional] [readonly] 
**kind** | **str** | The Kind of the object. Currently only Series8000 is supported | [optional] 
**name** | **str** | The name of the object. | [optional] [readonly] 
**type** | **str** | The hierarchical type of the object. | [optional] [readonly] 

## Example

```python
from openapi_client.models.cloud_appliance_configuration import CloudApplianceConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of CloudApplianceConfiguration from a JSON string
cloud_appliance_configuration_instance = CloudApplianceConfiguration.from_json(json)
# print the JSON string representation of the object
print(CloudApplianceConfiguration.to_json())

# convert the object into a dict
cloud_appliance_configuration_dict = cloud_appliance_configuration_instance.to_dict()
# create an instance of CloudApplianceConfiguration from a dict
cloud_appliance_configuration_from_dict = CloudApplianceConfiguration.from_dict(cloud_appliance_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


