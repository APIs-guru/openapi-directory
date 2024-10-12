# IoTSecurityDeviceRecommendationsList

List of recommendations with the count of devices

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URI to fetch the next page. | [optional] [readonly] 
**value** | [**List[IoTSecurityDeviceRecommendation]**](IoTSecurityDeviceRecommendation.md) | List of aggregated recommendation data | 

## Example

```python
from openapi_client.models.io_t_security_device_recommendations_list import IoTSecurityDeviceRecommendationsList

# TODO update the JSON string below
json = "{}"
# create an instance of IoTSecurityDeviceRecommendationsList from a JSON string
io_t_security_device_recommendations_list_instance = IoTSecurityDeviceRecommendationsList.from_json(json)
# print the JSON string representation of the object
print(IoTSecurityDeviceRecommendationsList.to_json())

# convert the object into a dict
io_t_security_device_recommendations_list_dict = io_t_security_device_recommendations_list_instance.to_dict()
# create an instance of IoTSecurityDeviceRecommendationsList from a dict
io_t_security_device_recommendations_list_from_dict = IoTSecurityDeviceRecommendationsList.from_dict(io_t_security_device_recommendations_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


