# GoogleCloudRetailV2alphaSearchRequestBoostSpecConditionBoostSpec

Boost applies to products which match a condition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**boost** | **float** | Strength of the condition boost, which should be in [-1, 1]. Negative boost means demotion. Default is 0.0. Setting to 1.0 gives the item a big promotion. However, it does not necessarily mean that the boosted item will be the top result at all times, nor that other items will be excluded. Results could still be shown even when none of them matches the condition. And results that are significantly more relevant to the search query can still trump your heavily favored but irrelevant items. Setting to -1.0 gives the item a big demotion. However, results that are deeply relevant might still be shown. The item will have an upstream battle to get a fairly high ranking, but it is not blocked out completely. Setting to 0.0 means no boost applied. The boosting condition is ignored. | [optional] 
**condition** | **str** | An expression which specifies a boost condition. The syntax and supported fields are the same as a filter expression. See SearchRequest.filter for detail syntax and limitations. Examples: * To boost products with product ID \&quot;product_1\&quot; or \&quot;product_2\&quot;, and color \&quot;Red\&quot; or \&quot;Blue\&quot;: * (id: ANY(\&quot;product_1\&quot;, \&quot;product_2\&quot;)) AND (colorFamilies: ANY(\&quot;Red\&quot;,\&quot;Blue\&quot;)) | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2alpha_search_request_boost_spec_condition_boost_spec import GoogleCloudRetailV2alphaSearchRequestBoostSpecConditionBoostSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2alphaSearchRequestBoostSpecConditionBoostSpec from a JSON string
google_cloud_retail_v2alpha_search_request_boost_spec_condition_boost_spec_instance = GoogleCloudRetailV2alphaSearchRequestBoostSpecConditionBoostSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2alphaSearchRequestBoostSpecConditionBoostSpec.to_json())

# convert the object into a dict
google_cloud_retail_v2alpha_search_request_boost_spec_condition_boost_spec_dict = google_cloud_retail_v2alpha_search_request_boost_spec_condition_boost_spec_instance.to_dict()
# create an instance of GoogleCloudRetailV2alphaSearchRequestBoostSpecConditionBoostSpec from a dict
google_cloud_retail_v2alpha_search_request_boost_spec_condition_boost_spec_from_dict = GoogleCloudRetailV2alphaSearchRequestBoostSpecConditionBoostSpec.from_dict(google_cloud_retail_v2alpha_search_request_boost_spec_condition_boost_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


