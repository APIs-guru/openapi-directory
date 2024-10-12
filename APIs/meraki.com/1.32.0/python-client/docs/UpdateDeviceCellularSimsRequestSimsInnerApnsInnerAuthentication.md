# UpdateDeviceCellularSimsRequestSimsInnerApnsInnerAuthentication

APN authentication configurations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**password** | **str** | APN password, if type is set (if APN password is not supplied, the password is left unchanged). | [optional] 
**type** | **str** | APN auth type. | [optional] [default to 'none']
**username** | **str** | APN username, if type is set. | [optional] 

## Example

```python
from openapi_client.models.update_device_cellular_sims_request_sims_inner_apns_inner_authentication import UpdateDeviceCellularSimsRequestSimsInnerApnsInnerAuthentication

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateDeviceCellularSimsRequestSimsInnerApnsInnerAuthentication from a JSON string
update_device_cellular_sims_request_sims_inner_apns_inner_authentication_instance = UpdateDeviceCellularSimsRequestSimsInnerApnsInnerAuthentication.from_json(json)
# print the JSON string representation of the object
print(UpdateDeviceCellularSimsRequestSimsInnerApnsInnerAuthentication.to_json())

# convert the object into a dict
update_device_cellular_sims_request_sims_inner_apns_inner_authentication_dict = update_device_cellular_sims_request_sims_inner_apns_inner_authentication_instance.to_dict()
# create an instance of UpdateDeviceCellularSimsRequestSimsInnerApnsInnerAuthentication from a dict
update_device_cellular_sims_request_sims_inner_apns_inner_authentication_from_dict = UpdateDeviceCellularSimsRequestSimsInnerApnsInnerAuthentication.from_dict(update_device_cellular_sims_request_sims_inner_apns_inner_authentication_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


