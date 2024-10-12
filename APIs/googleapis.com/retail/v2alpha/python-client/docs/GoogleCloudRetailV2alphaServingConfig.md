# GoogleCloudRetailV2alphaServingConfig

Configures metadata that is used to generate serving time results (e.g. search results or recommendation predictions).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**boost_control_ids** | **List[str]** | Condition boost specifications. If a product matches multiple conditions in the specifications, boost scores from these specifications are all applied and combined in a non-linear way. Maximum number of specifications is 100. Notice that if both ServingConfig.boost_control_ids and SearchRequest.boost_spec are set, the boost conditions from both places are evaluated. If a search request matches multiple boost conditions, the final boost score is equal to the sum of the boost scores from all matched boost conditions. Can only be set if solution_types is SOLUTION_TYPE_SEARCH. | [optional] 
**display_name** | **str** | Required. The human readable serving config display name. Used in Retail UI. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. | [optional] 
**diversity_level** | **str** | How much diversity to use in recommendation model results e.g. &#x60;medium-diversity&#x60; or &#x60;high-diversity&#x60;. Currently supported values: * &#x60;no-diversity&#x60; * &#x60;low-diversity&#x60; * &#x60;medium-diversity&#x60; * &#x60;high-diversity&#x60; * &#x60;auto-diversity&#x60; If not specified, we choose default based on recommendation model type. Default value: &#x60;no-diversity&#x60;. Can only be set if solution_types is SOLUTION_TYPE_RECOMMENDATION. | [optional] 
**diversity_type** | **str** | What kind of diversity to use - data driven or rule based. If unset, the server behavior defaults to RULE_BASED_DIVERSITY. | [optional] 
**do_not_associate_control_ids** | **List[str]** | Condition do not associate specifications. If multiple do not associate conditions match, all matching do not associate controls in the list will execute. - Order does not matter. - Maximum number of specifications is 100. Can only be set if solution_types is SOLUTION_TYPE_SEARCH. | [optional] 
**dynamic_facet_spec** | [**GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpec**](GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpec.md) |  | [optional] 
**enable_category_filter_level** | **str** | Whether to add additional category filters on the &#x60;similar-items&#x60; model. If not specified, we enable it by default. Allowed values are: * &#x60;no-category-match&#x60;: No additional filtering of original results from the model and the customer&#39;s filters. * &#x60;relaxed-category-match&#x60;: Only keep results with categories that match at least one item categories in the PredictRequests&#39;s context item. * If customer also sends filters in the PredictRequest, then the results will satisfy both conditions (user given and category match). Can only be set if solution_types is SOLUTION_TYPE_RECOMMENDATION. | [optional] 
**facet_control_ids** | **List[str]** | Facet specifications for faceted search. If empty, no facets are returned. The ids refer to the ids of Control resources with only the Facet control set. These controls are assumed to be in the same Catalog as the ServingConfig. A maximum of 100 values are allowed. Otherwise, an INVALID_ARGUMENT error is returned. Can only be set if solution_types is SOLUTION_TYPE_SEARCH. | [optional] 
**filter_control_ids** | **List[str]** | Condition filter specifications. If a product matches multiple conditions in the specifications, filters from these specifications are all applied and combined via the AND operator. Maximum number of specifications is 100. Can only be set if solution_types is SOLUTION_TYPE_SEARCH. | [optional] 
**ignore_control_ids** | **List[str]** | Condition ignore specifications. If multiple ignore conditions match, all matching ignore controls in the list will execute. - Order does not matter. - Maximum number of specifications is 100. Can only be set if solution_types is SOLUTION_TYPE_SEARCH. | [optional] 
**model_id** | **str** | The id of the model in the same Catalog to use at serving time. Currently only RecommendationModels are supported: https://cloud.google.com/retail/recommendations-ai/docs/create-models Can be changed but only to a compatible model (e.g. others-you-may-like CTR to others-you-may-like CVR). Required when solution_types is SOLUTION_TYPE_RECOMMENDATION. | [optional] 
**name** | **str** | Immutable. Fully qualified name &#x60;projects/*/locations/global/catalogs/*/servingConfig/*&#x60; | [optional] 
**oneway_synonyms_control_ids** | **List[str]** | Condition oneway synonyms specifications. If multiple oneway synonyms conditions match, all matching oneway synonyms controls in the list will execute. Order of controls in the list will not matter. Maximum number of specifications is 100. Can only be set if solution_types is SOLUTION_TYPE_SEARCH. | [optional] 
**personalization_spec** | [**GoogleCloudRetailV2alphaSearchRequestPersonalizationSpec**](GoogleCloudRetailV2alphaSearchRequestPersonalizationSpec.md) |  | [optional] 
**price_reranking_level** | **str** | How much price ranking we want in serving results. Price reranking causes product items with a similar recommendation probability to be ordered by price, with the highest-priced items first. This setting could result in a decrease in click-through and conversion rates. Allowed values are: * &#x60;no-price-reranking&#x60; * &#x60;low-price-reranking&#x60; * &#x60;medium-price-reranking&#x60; * &#x60;high-price-reranking&#x60; If not specified, we choose default based on model type. Default value: &#x60;no-price-reranking&#x60;. Can only be set if solution_types is SOLUTION_TYPE_RECOMMENDATION. | [optional] 
**redirect_control_ids** | **List[str]** | Condition redirect specifications. Only the first triggered redirect action is applied, even if multiple apply. Maximum number of specifications is 1000. Can only be set if solution_types is SOLUTION_TYPE_SEARCH. | [optional] 
**replacement_control_ids** | **List[str]** | Condition replacement specifications. - Applied according to the order in the list. - A previously replaced term can not be re-replaced. - Maximum number of specifications is 100. Can only be set if solution_types is SOLUTION_TYPE_SEARCH. | [optional] 
**solution_types** | **List[str]** | Required. Immutable. Specifies the solution types that a serving config can be associated with. Currently we support setting only one type of solution. | [optional] 
**twoway_synonyms_control_ids** | **List[str]** | Condition synonyms specifications. If multiple syonyms conditions match, all matching synonyms control in the list will execute. Order of controls in the list will not matter. Maximum number of specifications is 100. Can only be set if solution_types is SOLUTION_TYPE_SEARCH. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2alpha_serving_config import GoogleCloudRetailV2alphaServingConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2alphaServingConfig from a JSON string
google_cloud_retail_v2alpha_serving_config_instance = GoogleCloudRetailV2alphaServingConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2alphaServingConfig.to_json())

# convert the object into a dict
google_cloud_retail_v2alpha_serving_config_dict = google_cloud_retail_v2alpha_serving_config_instance.to_dict()
# create an instance of GoogleCloudRetailV2alphaServingConfig from a dict
google_cloud_retail_v2alpha_serving_config_from_dict = GoogleCloudRetailV2alphaServingConfig.from_dict(google_cloud_retail_v2alpha_serving_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


