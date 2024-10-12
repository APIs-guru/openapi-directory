# GoogleCloudDiscoveryengineV1betaRecommendRequest

Request message for Recommend method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter** | **str** | Filter for restricting recommendation results with a length limit of 5,000 characters. Currently, only filter expressions on the &#x60;filter_tags&#x60; attribute is supported. Examples: * &#x60;(filter_tags: ANY(\&quot;Red\&quot;, \&quot;Blue\&quot;) OR filter_tags: ANY(\&quot;Hot\&quot;, \&quot;Cold\&quot;))&#x60; * &#x60;(filter_tags: ANY(\&quot;Red\&quot;, \&quot;Blue\&quot;)) AND NOT (filter_tags: ANY(\&quot;Green\&quot;))&#x60; If &#x60;attributeFilteringSyntax&#x60; is set to true under the &#x60;params&#x60; field, then attribute-based expressions are expected instead of the above described tag-based syntax. Examples: * (launguage: ANY(\&quot;en\&quot;, \&quot;es\&quot;)) AND NOT (categories: ANY(\&quot;Movie\&quot;)) * (available: true) AND (launguage: ANY(\&quot;en\&quot;, \&quot;es\&quot;)) OR (categories: ANY(\&quot;Movie\&quot;)) If your filter blocks all results, the API will return generic (unfiltered) popular Documents. If you only want results strictly matching the filters, set &#x60;strictFiltering&#x60; to True in RecommendRequest.params to receive empty results instead. Note that the API will never return Documents with &#x60;storageStatus&#x60; of &#x60;EXPIRED&#x60; or &#x60;DELETED&#x60; regardless of filter choices. | [optional] 
**page_size** | **int** | Maximum number of results to return. Set this property to the number of recommendation results needed. If zero, the service will choose a reasonable default. The maximum allowed value is 100. Values above 100 will be coerced to 100. | [optional] 
**params** | **Dict[str, object]** | Additional domain specific parameters for the recommendations. Allowed values: * &#x60;returnDocument&#x60;: Boolean. If set to true, the associated Document object will be returned in RecommendResponse.RecommendationResult.document. * &#x60;returnScore&#x60;: Boolean. If set to true, the recommendation &#39;score&#39; corresponding to each returned Document will be set in RecommendResponse.RecommendationResult.metadata. The given &#39;score&#39; indicates the probability of a Document conversion given the user&#39;s context and history. * &#x60;strictFiltering&#x60;: Boolean. True by default. If set to false, the service will return generic (unfiltered) popular Documents instead of empty if your filter blocks all recommendation results. * &#x60;diversityLevel&#x60;: String. Default empty. If set to be non-empty, then it needs to be one of: * &#x60;no-diversity&#x60; * &#x60;low-diversity&#x60; * &#x60;medium-diversity&#x60; * &#x60;high-diversity&#x60; * &#x60;auto-diversity&#x60; This gives request-level control and adjusts recommendation results based on Document category. * &#x60;attributeFilteringSyntax&#x60;: Boolean. False by default. If set to true, the &#x60;filter&#x60; field is interpreted according to the new, attribute-based syntax. | [optional] 
**user_event** | [**GoogleCloudDiscoveryengineV1betaUserEvent**](GoogleCloudDiscoveryengineV1betaUserEvent.md) |  | [optional] 
**user_labels** | **Dict[str, str]** | The user labels applied to a resource must meet the following requirements: * Each resource can have multiple labels, up to a maximum of 64. * Each label must be a key-value pair. * Keys have a minimum length of 1 character and a maximum length of 63 characters and cannot be empty. Values can be empty and have a maximum length of 63 characters. * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. All characters must use UTF-8 encoding, and international characters are allowed. * The key portion of a label must be unique. However, you can use the same key with multiple resources. * Keys must start with a lowercase letter or international character. See [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements) for more details. | [optional] 
**validate_only** | **bool** | Use validate only mode for this recommendation query. If set to true, a fake model will be used that returns arbitrary Document IDs. Note that the validate only mode should only be used for testing the API, or if the model is not ready. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1beta_recommend_request import GoogleCloudDiscoveryengineV1betaRecommendRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1betaRecommendRequest from a JSON string
google_cloud_discoveryengine_v1beta_recommend_request_instance = GoogleCloudDiscoveryengineV1betaRecommendRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1betaRecommendRequest.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1beta_recommend_request_dict = google_cloud_discoveryengine_v1beta_recommend_request_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1betaRecommendRequest from a dict
google_cloud_discoveryengine_v1beta_recommend_request_from_dict = GoogleCloudDiscoveryengineV1betaRecommendRequest.from_dict(google_cloud_discoveryengine_v1beta_recommend_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


