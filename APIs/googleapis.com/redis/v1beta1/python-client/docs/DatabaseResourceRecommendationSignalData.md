# DatabaseResourceRecommendationSignalData

Common model for database resource recommendation signal data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_metadata** | **Dict[str, object]** | Optional. Any other additional metadata specific to recommendation | [optional] 
**last_refresh_time** | **str** | Required. last time recommendationw as refreshed | [optional] 
**recommendation_state** | **str** | Required. Recommendation state | [optional] 
**recommender** | **str** | Required. Name of recommendation. Examples: organizations/1234/locations/us-central1/recommenders/google.cloudsql.instance.PerformanceRecommender/recommendations/9876 | [optional] 
**recommender_id** | **str** | Required. ID of recommender. Examples: \&quot;google.cloudsql.instance.PerformanceRecommender\&quot; | [optional] 
**recommender_subtype** | **str** | Required. Contains an identifier for a subtype of recommendations produced for the same recommender. Subtype is a function of content and impact, meaning a new subtype might be added when significant changes to &#x60;content&#x60; or &#x60;primary_impact.category&#x60; are introduced. See the Recommenders section to see a list of subtypes for a given Recommender. Examples: For recommender &#x3D; \&quot;google.cloudsql.instance.PerformanceRecommender\&quot;, recommender_subtype can be \&quot;MYSQL_HIGH_NUMBER_OF_OPEN_TABLES_BEST_PRACTICE\&quot;/\&quot;POSTGRES_HIGH_TRANSACTION_ID_UTILIZATION_BEST_PRACTICE\&quot; | [optional] 
**resource_name** | **str** | Required. Database resource name associated with the signal. Resource name to follow CAIS resource_name format as noted here go/condor-common-datamodel | [optional] 
**signal_type** | **str** | Required. Type of signal, for example, &#x60;SIGNAL_TYPE_IDLE&#x60;, &#x60;SIGNAL_TYPE_HIGH_NUMBER_OF_TABLES&#x60;, etc. | [optional] 

## Example

```python
from openapi_client.models.database_resource_recommendation_signal_data import DatabaseResourceRecommendationSignalData

# TODO update the JSON string below
json = "{}"
# create an instance of DatabaseResourceRecommendationSignalData from a JSON string
database_resource_recommendation_signal_data_instance = DatabaseResourceRecommendationSignalData.from_json(json)
# print the JSON string representation of the object
print(DatabaseResourceRecommendationSignalData.to_json())

# convert the object into a dict
database_resource_recommendation_signal_data_dict = database_resource_recommendation_signal_data_instance.to_dict()
# create an instance of DatabaseResourceRecommendationSignalData from a dict
database_resource_recommendation_signal_data_from_dict = DatabaseResourceRecommendationSignalData.from_dict(database_resource_recommendation_signal_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


