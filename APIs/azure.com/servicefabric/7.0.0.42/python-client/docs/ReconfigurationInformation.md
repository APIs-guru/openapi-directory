# ReconfigurationInformation

Information about current reconfiguration like phase, type, previous configuration role of replica and reconfiguration start date time.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**previous_configuration_role** | [**ReplicaRole**](ReplicaRole.md) |  | [optional] 
**reconfiguration_phase** | [**ReconfigurationPhase**](ReconfigurationPhase.md) |  | [optional] 
**reconfiguration_start_time_utc** | **datetime** | Start time (in UTC) of the ongoing reconfiguration. If no reconfiguration is taking place then this value will be zero date-time. | [optional] 
**reconfiguration_type** | [**ReconfigurationType**](ReconfigurationType.md) |  | [optional] 

## Example

```python
from openapi_client.models.reconfiguration_information import ReconfigurationInformation

# TODO update the JSON string below
json = "{}"
# create an instance of ReconfigurationInformation from a JSON string
reconfiguration_information_instance = ReconfigurationInformation.from_json(json)
# print the JSON string representation of the object
print(ReconfigurationInformation.to_json())

# convert the object into a dict
reconfiguration_information_dict = reconfiguration_information_instance.to_dict()
# create an instance of ReconfigurationInformation from a dict
reconfiguration_information_from_dict = ReconfigurationInformation.from_dict(reconfiguration_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


