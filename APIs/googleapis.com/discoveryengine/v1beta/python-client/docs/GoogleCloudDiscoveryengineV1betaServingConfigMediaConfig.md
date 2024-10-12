# GoogleCloudDiscoveryengineV1betaServingConfigMediaConfig

Specifies the configurations needed for Media Discovery. Currently we support: * `demote_content_watched`: Threshold for watched content demotion. Customers can specify if using watched content demotion or use viewed detail page. Using the content watched demotion, customers need to specify the watched minutes or percentage exceeds the threshold, the content will be demoted in the recommendation result. * `promote_fresh_content`: cutoff days for fresh content promotion. Customers can specify if using content freshness promotion. If the content was published within the cutoff days, the content will be promoted in the recommendation result. Can only be set if SolutionType is SOLUTION_TYPE_RECOMMENDATION.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_freshness_cutoff_days** | **int** | Specifies the content freshness used for recommendation result. Contents will be demoted if contents were published for more than content freshness cutoff days. | [optional] 
**content_watched_minutes_threshold** | **float** | Specifies the content watched minutes threshold for demotion. | [optional] 
**content_watched_percentage_threshold** | **float** | Specifies the content watched percentage threshold for demotion. Threshold value must be between [0, 1.0] inclusive. | [optional] 
**content_watched_seconds_threshold** | **float** | Specifies the content watched minutes threshold for demotion. | [optional] 
**demotion_event_type** | **str** | Specifies the event type used for demoting recommendation result. Currently supported values: * &#x60;view-item&#x60;: Item viewed. * &#x60;media-play&#x60;: Start/resume watching a video, playing a song, etc. * &#x60;media-complete&#x60;: Finished or stopped midway through a video, song, etc. If unset, watch history demotion will not be applied. Content freshness demotion will still be applied. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1beta_serving_config_media_config import GoogleCloudDiscoveryengineV1betaServingConfigMediaConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1betaServingConfigMediaConfig from a JSON string
google_cloud_discoveryengine_v1beta_serving_config_media_config_instance = GoogleCloudDiscoveryengineV1betaServingConfigMediaConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1betaServingConfigMediaConfig.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1beta_serving_config_media_config_dict = google_cloud_discoveryengine_v1beta_serving_config_media_config_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1betaServingConfigMediaConfig from a dict
google_cloud_discoveryengine_v1beta_serving_config_media_config_from_dict = GoogleCloudDiscoveryengineV1betaServingConfigMediaConfig.from_dict(google_cloud_discoveryengine_v1beta_serving_config_media_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


