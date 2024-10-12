# MobilityServiceUpdate

The Mobility Service update details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**os_type** | **str** | The OS type. | [optional] 
**reboot_status** | **str** | The reboot status of the update - whether it is required or not. | [optional] 
**version** | **str** | The version of the latest update. | [optional] 

## Example

```python
from openapi_client.models.mobility_service_update import MobilityServiceUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of MobilityServiceUpdate from a JSON string
mobility_service_update_instance = MobilityServiceUpdate.from_json(json)
# print the JSON string representation of the object
print(MobilityServiceUpdate.to_json())

# convert the object into a dict
mobility_service_update_dict = mobility_service_update_instance.to_dict()
# create an instance of MobilityServiceUpdate from a dict
mobility_service_update_from_dict = MobilityServiceUpdate.from_dict(mobility_service_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


