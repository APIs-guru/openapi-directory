# IoTSecurityAggregatedRecommendationList

List of IoT aggregated security recommendations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URI to fetch the next page. | [optional] [readonly] 
**value** | [**List[IoTSecurityAggregatedRecommendation]**](IoTSecurityAggregatedRecommendation.md) | List of aggregated alerts data | 

## Example

```python
from openapi_client.models.io_t_security_aggregated_recommendation_list import IoTSecurityAggregatedRecommendationList

# TODO update the JSON string below
json = "{}"
# create an instance of IoTSecurityAggregatedRecommendationList from a JSON string
io_t_security_aggregated_recommendation_list_instance = IoTSecurityAggregatedRecommendationList.from_json(json)
# print the JSON string representation of the object
print(IoTSecurityAggregatedRecommendationList.to_json())

# convert the object into a dict
io_t_security_aggregated_recommendation_list_dict = io_t_security_aggregated_recommendation_list_instance.to_dict()
# create an instance of IoTSecurityAggregatedRecommendationList from a dict
io_t_security_aggregated_recommendation_list_from_dict = IoTSecurityAggregatedRecommendationList.from_dict(io_t_security_aggregated_recommendation_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


