# TrafficManagerUserMetricsKeyModel

Class representing a Traffic Manager Real User Metrics key response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Fully qualified resource Id for the resource. Ex - /providers/Microsoft.Network/trafficManagerUserMetricsKeys | [optional] 
**key** | **str** | The key returned by the Real User Metrics operation. | [optional] 
**name** | **str** | The word default. | [optional] 
**type** | **str** | The type of the resource. Ex- Microsoft.Network/trafficManagerUserMetricsKeys. | [optional] 

## Example

```python
from openapi_client.models.traffic_manager_user_metrics_key_model import TrafficManagerUserMetricsKeyModel

# TODO update the JSON string below
json = "{}"
# create an instance of TrafficManagerUserMetricsKeyModel from a JSON string
traffic_manager_user_metrics_key_model_instance = TrafficManagerUserMetricsKeyModel.from_json(json)
# print the JSON string representation of the object
print(TrafficManagerUserMetricsKeyModel.to_json())

# convert the object into a dict
traffic_manager_user_metrics_key_model_dict = traffic_manager_user_metrics_key_model_instance.to_dict()
# create an instance of TrafficManagerUserMetricsKeyModel from a dict
traffic_manager_user_metrics_key_model_from_dict = TrafficManagerUserMetricsKeyModel.from_dict(traffic_manager_user_metrics_key_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


