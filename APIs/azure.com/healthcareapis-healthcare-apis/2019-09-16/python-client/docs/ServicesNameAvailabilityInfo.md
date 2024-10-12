# ServicesNameAvailabilityInfo

The properties indicating whether a given service name is available.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | The detailed reason message. | [optional] 
**name_available** | **bool** | The value which indicates whether the provided name is available. | [optional] [readonly] 
**reason** | **str** | The reason for unavailability. | [optional] [readonly] 

## Example

```python
from openapi_client.models.services_name_availability_info import ServicesNameAvailabilityInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ServicesNameAvailabilityInfo from a JSON string
services_name_availability_info_instance = ServicesNameAvailabilityInfo.from_json(json)
# print the JSON string representation of the object
print(ServicesNameAvailabilityInfo.to_json())

# convert the object into a dict
services_name_availability_info_dict = services_name_availability_info_instance.to_dict()
# create an instance of ServicesNameAvailabilityInfo from a dict
services_name_availability_info_from_dict = ServicesNameAvailabilityInfo.from_dict(services_name_availability_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


