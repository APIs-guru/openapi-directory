# RegisterRealtimeApiData

Container class for the register realtime API API

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_url** | **str** | The URL of your endpoint. To this endpoint all the values are send to. | [optional] 
**basic_auth_password** | **str** | The Password (basic auth) of your endpoint. Leave empty of none. | [optional] 
**basic_auth_username** | **str** | The Username (basic auth) of your endpoint. Leave empty of none. | [optional] 
**id** | **str** | The ID of the registration | [optional] 
**meter_id** | **str** | The ID of the Meter. Just used if the RegistrationType is \&quot;SingleMeterRegistration\&quot;. | [optional] 
**registration_type** | **str** | The Type of this registration (per meter, per user, ...) | [optional] 
**serial_number** | **str** | The serial number of the Meter. Just used if the RegistrationType is \&quot;SingleMeterRegistration\&quot; and the MeterId is null.               Example: 1 SME 01 63000000 or 6300000 | [optional] 

## Example

```python
from openapi_client.models.register_realtime_api_data import RegisterRealtimeApiData

# TODO update the JSON string below
json = "{}"
# create an instance of RegisterRealtimeApiData from a JSON string
register_realtime_api_data_instance = RegisterRealtimeApiData.from_json(json)
# print the JSON string representation of the object
print(RegisterRealtimeApiData.to_json())

# convert the object into a dict
register_realtime_api_data_dict = register_realtime_api_data_instance.to_dict()
# create an instance of RegisterRealtimeApiData from a dict
register_realtime_api_data_from_dict = RegisterRealtimeApiData.from_dict(register_realtime_api_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


