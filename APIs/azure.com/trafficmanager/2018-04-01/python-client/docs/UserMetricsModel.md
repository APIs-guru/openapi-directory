# UserMetricsModel

Class representing Traffic Manager User Metrics.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**UserMetricsProperties**](UserMetricsProperties.md) |  | [optional] 
**id** | **str** | Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficManagerProfiles/{resourceName} | [optional] 
**name** | **str** | The name of the resource | [optional] 
**type** | **str** | The type of the resource. Ex- Microsoft.Network/trafficManagerProfiles. | [optional] 

## Example

```python
from openapi_client.models.user_metrics_model import UserMetricsModel

# TODO update the JSON string below
json = "{}"
# create an instance of UserMetricsModel from a JSON string
user_metrics_model_instance = UserMetricsModel.from_json(json)
# print the JSON string representation of the object
print(UserMetricsModel.to_json())

# convert the object into a dict
user_metrics_model_dict = user_metrics_model_instance.to_dict()
# create an instance of UserMetricsModel from a dict
user_metrics_model_from_dict = UserMetricsModel.from_dict(user_metrics_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


