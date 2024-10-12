# GoogleCloudRecommenderV1ValueMatcher

Contains various matching options for values for a GCP resource field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**matches_pattern** | **str** | To be used for full regex matching. The regular expression is using the Google RE2 syntax (https://github.com/google/re2/wiki/Syntax), so to be used with RE2::FullMatch | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recommender_v1_value_matcher import GoogleCloudRecommenderV1ValueMatcher

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecommenderV1ValueMatcher from a JSON string
google_cloud_recommender_v1_value_matcher_instance = GoogleCloudRecommenderV1ValueMatcher.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecommenderV1ValueMatcher.to_json())

# convert the object into a dict
google_cloud_recommender_v1_value_matcher_dict = google_cloud_recommender_v1_value_matcher_instance.to_dict()
# create an instance of GoogleCloudRecommenderV1ValueMatcher from a dict
google_cloud_recommender_v1_value_matcher_from_dict = GoogleCloudRecommenderV1ValueMatcher.from_dict(google_cloud_recommender_v1_value_matcher_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


