# IoTSecurityDeviceRecommendation

Statistical information about the number of recommendations per device, per recommendation type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**devices_count** | **int** | Number of devices with this recommendation. | [optional] [readonly] 
**recommendation_display_name** | **str** | Display name of the recommendation. | [optional] [readonly] 
**reported_severity** | **str** | Assessed recommendation severity. | [optional] [readonly] 

## Example

```python
from openapi_client.models.io_t_security_device_recommendation import IoTSecurityDeviceRecommendation

# TODO update the JSON string below
json = "{}"
# create an instance of IoTSecurityDeviceRecommendation from a JSON string
io_t_security_device_recommendation_instance = IoTSecurityDeviceRecommendation.from_json(json)
# print the JSON string representation of the object
print(IoTSecurityDeviceRecommendation.to_json())

# convert the object into a dict
io_t_security_device_recommendation_dict = io_t_security_device_recommendation_instance.to_dict()
# create an instance of IoTSecurityDeviceRecommendation from a dict
io_t_security_device_recommendation_from_dict = IoTSecurityDeviceRecommendation.from_dict(io_t_security_device_recommendation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


