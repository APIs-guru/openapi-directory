# IoTSpacesNameAvailabilityInfo

The properties indicating whether a given IoTSpaces service name is available.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | The detailed reason message. | [optional] 
**name_available** | **bool** | The value which indicates whether the provided name is available. | [optional] [readonly] 
**reason** | **str** | The reason for unavailability. | [optional] [readonly] 

## Example

```python
from openapi_client.models.io_t_spaces_name_availability_info import IoTSpacesNameAvailabilityInfo

# TODO update the JSON string below
json = "{}"
# create an instance of IoTSpacesNameAvailabilityInfo from a JSON string
io_t_spaces_name_availability_info_instance = IoTSpacesNameAvailabilityInfo.from_json(json)
# print the JSON string representation of the object
print(IoTSpacesNameAvailabilityInfo.to_json())

# convert the object into a dict
io_t_spaces_name_availability_info_dict = io_t_spaces_name_availability_info_instance.to_dict()
# create an instance of IoTSpacesNameAvailabilityInfo from a dict
io_t_spaces_name_availability_info_from_dict = IoTSpacesNameAvailabilityInfo.from_dict(io_t_spaces_name_availability_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


