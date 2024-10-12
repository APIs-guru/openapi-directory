# GoogleCloudRecommenderV1beta1SecurityProjection

Contains various ways of describing the impact on Security.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**details** | **Dict[str, object]** | This field can be used by the recommender to define details specific to security impact. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recommender_v1beta1_security_projection import GoogleCloudRecommenderV1beta1SecurityProjection

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecommenderV1beta1SecurityProjection from a JSON string
google_cloud_recommender_v1beta1_security_projection_instance = GoogleCloudRecommenderV1beta1SecurityProjection.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecommenderV1beta1SecurityProjection.to_json())

# convert the object into a dict
google_cloud_recommender_v1beta1_security_projection_dict = google_cloud_recommender_v1beta1_security_projection_instance.to_dict()
# create an instance of GoogleCloudRecommenderV1beta1SecurityProjection from a dict
google_cloud_recommender_v1beta1_security_projection_from_dict = GoogleCloudRecommenderV1beta1SecurityProjection.from_dict(google_cloud_recommender_v1beta1_security_projection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


