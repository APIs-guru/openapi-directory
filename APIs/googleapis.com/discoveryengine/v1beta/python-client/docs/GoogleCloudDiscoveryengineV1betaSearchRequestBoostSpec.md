# GoogleCloudDiscoveryengineV1betaSearchRequestBoostSpec

Boost specification to boost certain documents.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**condition_boost_specs** | [**List[GoogleCloudDiscoveryengineV1betaSearchRequestBoostSpecConditionBoostSpec]**](GoogleCloudDiscoveryengineV1betaSearchRequestBoostSpecConditionBoostSpec.md) | Condition boost specifications. If a document matches multiple conditions in the specifictions, boost scores from these specifications are all applied and combined in a non-linear way. Maximum number of specifications is 20. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1beta_search_request_boost_spec import GoogleCloudDiscoveryengineV1betaSearchRequestBoostSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1betaSearchRequestBoostSpec from a JSON string
google_cloud_discoveryengine_v1beta_search_request_boost_spec_instance = GoogleCloudDiscoveryengineV1betaSearchRequestBoostSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1betaSearchRequestBoostSpec.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1beta_search_request_boost_spec_dict = google_cloud_discoveryengine_v1beta_search_request_boost_spec_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1betaSearchRequestBoostSpec from a dict
google_cloud_discoveryengine_v1beta_search_request_boost_spec_from_dict = GoogleCloudDiscoveryengineV1betaSearchRequestBoostSpec.from_dict(google_cloud_discoveryengine_v1beta_search_request_boost_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


