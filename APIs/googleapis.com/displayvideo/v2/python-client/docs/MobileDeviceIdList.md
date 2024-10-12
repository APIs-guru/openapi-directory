# MobileDeviceIdList

Wrapper message for a list of mobile device IDs defining Customer Match audience members.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consent** | [**Consent**](Consent.md) |  | [optional] 
**mobile_device_ids** | **List[str]** | A list of mobile device IDs defining Customer Match audience members. The size of mobile_device_ids mustn&#39;t be greater than 500,000. | [optional] 

## Example

```python
from openapi_client.models.mobile_device_id_list import MobileDeviceIdList

# TODO update the JSON string below
json = "{}"
# create an instance of MobileDeviceIdList from a JSON string
mobile_device_id_list_instance = MobileDeviceIdList.from_json(json)
# print the JSON string representation of the object
print(MobileDeviceIdList.to_json())

# convert the object into a dict
mobile_device_id_list_dict = mobile_device_id_list_instance.to_dict()
# create an instance of MobileDeviceIdList from a dict
mobile_device_id_list_from_dict = MobileDeviceIdList.from_dict(mobile_device_id_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


