# GoogleCloudRecommenderV1beta1CostProjection

Contains metadata about how much money a recommendation can save or incur.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cost** | [**GoogleTypeMoney**](GoogleTypeMoney.md) |  | [optional] 
**cost_in_local_currency** | [**GoogleTypeMoney**](GoogleTypeMoney.md) |  | [optional] 
**duration** | **str** | Duration for which this cost applies. | [optional] 
**pricing_type** | **str** | How the cost is calculated. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recommender_v1beta1_cost_projection import GoogleCloudRecommenderV1beta1CostProjection

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecommenderV1beta1CostProjection from a JSON string
google_cloud_recommender_v1beta1_cost_projection_instance = GoogleCloudRecommenderV1beta1CostProjection.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecommenderV1beta1CostProjection.to_json())

# convert the object into a dict
google_cloud_recommender_v1beta1_cost_projection_dict = google_cloud_recommender_v1beta1_cost_projection_instance.to_dict()
# create an instance of GoogleCloudRecommenderV1beta1CostProjection from a dict
google_cloud_recommender_v1beta1_cost_projection_from_dict = GoogleCloudRecommenderV1beta1CostProjection.from_dict(google_cloud_recommender_v1beta1_cost_projection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


