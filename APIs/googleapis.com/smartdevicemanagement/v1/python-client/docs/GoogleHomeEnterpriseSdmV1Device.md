# GoogleHomeEnterpriseSdmV1Device

Device resource represents an instance of enterprise managed device in the property.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Required. The resource name of the device. For example: \&quot;enterprises/XYZ/devices/123\&quot;. | [optional] 
**parent_relations** | [**List[GoogleHomeEnterpriseSdmV1ParentRelation]**](GoogleHomeEnterpriseSdmV1ParentRelation.md) | Assignee details of the device. | [optional] 
**traits** | **Dict[str, object]** | Output only. Device traits. | [optional] [readonly] 
**type** | **str** | Output only. Type of the device for general display purposes. For example: \&quot;THERMOSTAT\&quot;. The device type should not be used to deduce or infer functionality of the actual device it is assigned to. Instead, use the returned traits for the device. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_home_enterprise_sdm_v1_device import GoogleHomeEnterpriseSdmV1Device

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleHomeEnterpriseSdmV1Device from a JSON string
google_home_enterprise_sdm_v1_device_instance = GoogleHomeEnterpriseSdmV1Device.from_json(json)
# print the JSON string representation of the object
print(GoogleHomeEnterpriseSdmV1Device.to_json())

# convert the object into a dict
google_home_enterprise_sdm_v1_device_dict = google_home_enterprise_sdm_v1_device_instance.to_dict()
# create an instance of GoogleHomeEnterpriseSdmV1Device from a dict
google_home_enterprise_sdm_v1_device_from_dict = GoogleHomeEnterpriseSdmV1Device.from_dict(google_home_enterprise_sdm_v1_device_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


