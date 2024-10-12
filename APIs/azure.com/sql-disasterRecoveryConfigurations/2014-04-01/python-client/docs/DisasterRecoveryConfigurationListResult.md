# DisasterRecoveryConfigurationListResult

Represents the response to a List disaster recovery configuration request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[DisasterRecoveryConfiguration]**](DisasterRecoveryConfiguration.md) | The list of disaster recovery configurations housed under the server. | [optional] 

## Example

```python
from openapi_client.models.disaster_recovery_configuration_list_result import DisasterRecoveryConfigurationListResult

# TODO update the JSON string below
json = "{}"
# create an instance of DisasterRecoveryConfigurationListResult from a JSON string
disaster_recovery_configuration_list_result_instance = DisasterRecoveryConfigurationListResult.from_json(json)
# print the JSON string representation of the object
print(DisasterRecoveryConfigurationListResult.to_json())

# convert the object into a dict
disaster_recovery_configuration_list_result_dict = disaster_recovery_configuration_list_result_instance.to_dict()
# create an instance of DisasterRecoveryConfigurationListResult from a dict
disaster_recovery_configuration_list_result_from_dict = DisasterRecoveryConfigurationListResult.from_dict(disaster_recovery_configuration_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


