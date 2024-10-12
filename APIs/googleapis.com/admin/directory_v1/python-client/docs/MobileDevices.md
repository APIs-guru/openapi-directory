# MobileDevices


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | ETag of the resource. | [optional] 
**kind** | **str** | Kind of resource this is. | [optional] [default to 'admin#directory#mobiledevices']
**mobiledevices** | [**List[MobileDevice]**](MobileDevice.md) | A list of Mobile Device objects. | [optional] 
**next_page_token** | **str** | Token used to access next page of this result. | [optional] 

## Example

```python
from openapi_client.models.mobile_devices import MobileDevices

# TODO update the JSON string below
json = "{}"
# create an instance of MobileDevices from a JSON string
mobile_devices_instance = MobileDevices.from_json(json)
# print the JSON string representation of the object
print(MobileDevices.to_json())

# convert the object into a dict
mobile_devices_dict = mobile_devices_instance.to_dict()
# create an instance of MobileDevices from a dict
mobile_devices_from_dict = MobileDevices.from_dict(mobile_devices_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


