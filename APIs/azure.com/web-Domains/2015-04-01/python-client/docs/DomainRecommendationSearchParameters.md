# DomainRecommendationSearchParameters

Domain recommendation search parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**keywords** | **str** | Keywords to be used for generating domain recommendations. | [optional] 
**max_domain_recommendations** | **int** | Maximum number of recommendations. | [optional] 

## Example

```python
from openapi_client.models.domain_recommendation_search_parameters import DomainRecommendationSearchParameters

# TODO update the JSON string below
json = "{}"
# create an instance of DomainRecommendationSearchParameters from a JSON string
domain_recommendation_search_parameters_instance = DomainRecommendationSearchParameters.from_json(json)
# print the JSON string representation of the object
print(DomainRecommendationSearchParameters.to_json())

# convert the object into a dict
domain_recommendation_search_parameters_dict = domain_recommendation_search_parameters_instance.to_dict()
# create an instance of DomainRecommendationSearchParameters from a dict
domain_recommendation_search_parameters_from_dict = DomainRecommendationSearchParameters.from_dict(domain_recommendation_search_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


