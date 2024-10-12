# DisasterRecoveryConfiguration

Represents a disaster recovery configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | Location of the server that contains this disaster recovery configuration. | [optional] [readonly] 
**properties** | [**DisasterRecoveryConfigurationProperties**](DisasterRecoveryConfigurationProperties.md) |  | 
**type** | **str** | Type of resource this is. | [optional] [readonly] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 

## Example

```python
from openapi_client.models.disaster_recovery_configuration import DisasterRecoveryConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of DisasterRecoveryConfiguration from a JSON string
disaster_recovery_configuration_instance = DisasterRecoveryConfiguration.from_json(json)
# print the JSON string representation of the object
print(DisasterRecoveryConfiguration.to_json())

# convert the object into a dict
disaster_recovery_configuration_dict = disaster_recovery_configuration_instance.to_dict()
# create an instance of DisasterRecoveryConfiguration from a dict
disaster_recovery_configuration_from_dict = DisasterRecoveryConfiguration.from_dict(disaster_recovery_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


