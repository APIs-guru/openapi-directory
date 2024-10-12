# IotHubNameAvailabilityInfo

The properties indicating whether a given IoT hub name is available.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | The detailed reason message. | [optional] 
**name_available** | **bool** | The value which indicates whether the provided name is available. | [optional] [readonly] 
**reason** | **str** | The reason for unavailability. | [optional] [readonly] 

## Example

```python
from openapi_client.models.iot_hub_name_availability_info import IotHubNameAvailabilityInfo

# TODO update the JSON string below
json = "{}"
# create an instance of IotHubNameAvailabilityInfo from a JSON string
iot_hub_name_availability_info_instance = IotHubNameAvailabilityInfo.from_json(json)
# print the JSON string representation of the object
print(IotHubNameAvailabilityInfo.to_json())

# convert the object into a dict
iot_hub_name_availability_info_dict = iot_hub_name_availability_info_instance.to_dict()
# create an instance of IotHubNameAvailabilityInfo from a dict
iot_hub_name_availability_info_from_dict = IotHubNameAvailabilityInfo.from_dict(iot_hub_name_availability_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


