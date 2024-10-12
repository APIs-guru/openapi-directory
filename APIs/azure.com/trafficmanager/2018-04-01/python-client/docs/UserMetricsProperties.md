# UserMetricsProperties

Class representing a Traffic Manager Real User Metrics key response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | The key returned by the User Metrics operation. | [optional] 

## Example

```python
from openapi_client.models.user_metrics_properties import UserMetricsProperties

# TODO update the JSON string below
json = "{}"
# create an instance of UserMetricsProperties from a JSON string
user_metrics_properties_instance = UserMetricsProperties.from_json(json)
# print the JSON string representation of the object
print(UserMetricsProperties.to_json())

# convert the object into a dict
user_metrics_properties_dict = user_metrics_properties_instance.to_dict()
# create an instance of UserMetricsProperties from a dict
user_metrics_properties_from_dict = UserMetricsProperties.from_dict(user_metrics_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


