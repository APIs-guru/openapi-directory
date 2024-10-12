# RecommendationConfigurationProperties

Recommendation configuration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] [readonly] 
**recommendation_type** | **str** | The recommendation type. | 
**status** | **str** | Recommendation status. The recommendation is not generated when the status is disabled | [default to 'Enabled']

## Example

```python
from openapi_client.models.recommendation_configuration_properties import RecommendationConfigurationProperties

# TODO update the JSON string below
json = "{}"
# create an instance of RecommendationConfigurationProperties from a JSON string
recommendation_configuration_properties_instance = RecommendationConfigurationProperties.from_json(json)
# print the JSON string representation of the object
print(RecommendationConfigurationProperties.to_json())

# convert the object into a dict
recommendation_configuration_properties_dict = recommendation_configuration_properties_instance.to_dict()
# create an instance of RecommendationConfigurationProperties from a dict
recommendation_configuration_properties_from_dict = RecommendationConfigurationProperties.from_dict(recommendation_configuration_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


