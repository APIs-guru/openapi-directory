# IoTSecurityAggregatedRecommendation

Security Solution Recommendation Information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**IoTSecurityAggregatedRecommendationProperties**](IoTSecurityAggregatedRecommendationProperties.md) |  | [optional] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**name** | **str** | Resource name | [optional] [readonly] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.io_t_security_aggregated_recommendation import IoTSecurityAggregatedRecommendation

# TODO update the JSON string below
json = "{}"
# create an instance of IoTSecurityAggregatedRecommendation from a JSON string
io_t_security_aggregated_recommendation_instance = IoTSecurityAggregatedRecommendation.from_json(json)
# print the JSON string representation of the object
print(IoTSecurityAggregatedRecommendation.to_json())

# convert the object into a dict
io_t_security_aggregated_recommendation_dict = io_t_security_aggregated_recommendation_instance.to_dict()
# create an instance of IoTSecurityAggregatedRecommendation from a dict
io_t_security_aggregated_recommendation_from_dict = IoTSecurityAggregatedRecommendation.from_dict(io_t_security_aggregated_recommendation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


