# AppAvailabilityInfo

The properties indicating whether a given IoT Central application name or subdomain is available.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | The detailed reason message. | [optional] [readonly] 
**name_available** | **bool** | The value which indicates whether the provided name is available. | [optional] [readonly] 
**reason** | **str** | The reason for unavailability. | [optional] [readonly] 

## Example

```python
from openapi_client.models.app_availability_info import AppAvailabilityInfo

# TODO update the JSON string below
json = "{}"
# create an instance of AppAvailabilityInfo from a JSON string
app_availability_info_instance = AppAvailabilityInfo.from_json(json)
# print the JSON string representation of the object
print(AppAvailabilityInfo.to_json())

# convert the object into a dict
app_availability_info_dict = app_availability_info_instance.to_dict()
# create an instance of AppAvailabilityInfo from a dict
app_availability_info_from_dict = AppAvailabilityInfo.from_dict(app_availability_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


