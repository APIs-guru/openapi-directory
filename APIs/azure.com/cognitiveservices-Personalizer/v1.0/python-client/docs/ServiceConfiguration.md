# ServiceConfiguration

The configuration of the service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_reward** | **float** | The reward given if a reward is not received within the specified wait time. | 
**exploration_percentage** | **float** | The percentage of rank responses that will use exploration. | 
**log_mirror_enabled** | **bool** | Flag indicates whether log mirroring is enabled. | [optional] 
**log_mirror_sas_uri** | **str** | Azure storage account container SAS URI for log mirroring. | [optional] 
**log_retention_days** | **int** | Number of days historical logs are to be maintained. -1 implies the logs will never be deleted. | 
**model_export_frequency** | **str** | Personalizer will start using the most updated trained model for online ranks automatically every specified time period.  For example, PT5M (5 mins). For information about the time format,  see http://en.wikipedia.org/wiki/ISO_8601#Durations | 
**reward_aggregation** | **str** | The function used to process rewards, if multiple reward scores are received before rewardWaitTime is over. | 
**reward_wait_time** | **str** | The time span waited until a request is marked with the default reward.  For example, PT5M (5 mins). For information about the time format,  see http://en.wikipedia.org/wiki/ISO_8601#Durations | 

## Example

```python
from openapi_client.models.service_configuration import ServiceConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceConfiguration from a JSON string
service_configuration_instance = ServiceConfiguration.from_json(json)
# print the JSON string representation of the object
print(ServiceConfiguration.to_json())

# convert the object into a dict
service_configuration_dict = service_configuration_instance.to_dict()
# create an instance of ServiceConfiguration from a dict
service_configuration_from_dict = ServiceConfiguration.from_dict(service_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


