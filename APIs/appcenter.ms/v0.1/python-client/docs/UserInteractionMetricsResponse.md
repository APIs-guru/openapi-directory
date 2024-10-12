# UserInteractionMetricsResponse

Response for retrieving user interaction metrics.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**has_more_than_1_release** | **bool** | check if the user&#39;s whole apps has more than 1 releases. | [optional] 
**less_than_100_apps** | **bool** | check if the user has less than 100 apps. | [optional] 

## Example

```python
from openapi_client.models.user_interaction_metrics_response import UserInteractionMetricsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UserInteractionMetricsResponse from a JSON string
user_interaction_metrics_response_instance = UserInteractionMetricsResponse.from_json(json)
# print the JSON string representation of the object
print(UserInteractionMetricsResponse.to_json())

# convert the object into a dict
user_interaction_metrics_response_dict = user_interaction_metrics_response_instance.to_dict()
# create an instance of UserInteractionMetricsResponse from a dict
user_interaction_metrics_response_from_dict = UserInteractionMetricsResponse.from_dict(user_interaction_metrics_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


