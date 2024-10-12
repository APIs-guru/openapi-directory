# LookupSelfDeviceUsersResponse

Response containing resource names of the DeviceUsers associated with the caller's credentials.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer** | **str** | The customer Id that may be passed back to other Devices API methods such as List, Get, etc. | [optional] 
**names** | **List[str]** | [Resource names](https://cloud.google.com/apis/design/resource_names) of the DeviceUsers in the format: &#x60;devices/{device_id}/deviceUsers/{user_resource_id}&#x60;, where device_id is the unique ID assigned to a Device and user_resource_id is the unique user ID | [optional] 
**next_page_token** | **str** | Token to retrieve the next page of results. Empty if there are no more results. | [optional] 

## Example

```python
from openapi_client.models.lookup_self_device_users_response import LookupSelfDeviceUsersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of LookupSelfDeviceUsersResponse from a JSON string
lookup_self_device_users_response_instance = LookupSelfDeviceUsersResponse.from_json(json)
# print the JSON string representation of the object
print(LookupSelfDeviceUsersResponse.to_json())

# convert the object into a dict
lookup_self_device_users_response_dict = lookup_self_device_users_response_instance.to_dict()
# create an instance of LookupSelfDeviceUsersResponse from a dict
lookup_self_device_users_response_from_dict = LookupSelfDeviceUsersResponse.from_dict(lookup_self_device_users_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


