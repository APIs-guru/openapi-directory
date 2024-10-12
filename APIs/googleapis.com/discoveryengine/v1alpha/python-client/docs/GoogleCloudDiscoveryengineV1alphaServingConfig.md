# GoogleCloudDiscoveryengineV1alphaServingConfig

Configures metadata that is used to generate serving time results (e.g. search results or recommendation predictions). The ServingConfig is passed in the search and predict request and generates results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**boost_control_ids** | **List[str]** | Boost controls to use in serving path. All triggered boost controls will be applied. Boost controls must be in the same data store as the serving config. Maximum of 20 boost controls. | [optional] 
**create_time** | **str** | Output only. ServingConfig created timestamp. | [optional] [readonly] 
**custom_fine_tuning_spec** | [**GoogleCloudDiscoveryengineV1alphaCustomFineTuningSpec**](GoogleCloudDiscoveryengineV1alphaCustomFineTuningSpec.md) |  | [optional] 
**display_name** | **str** | Required. The human readable serving config display name. Used in Discovery UI. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. | [optional] 
**dissociate_control_ids** | **List[str]** | Condition do not associate specifications. If multiple do not associate conditions match, all matching do not associate controls in the list will execute. Order does not matter. Maximum number of specifications is 100. Can only be set if SolutionType is SOLUTION_TYPE_SEARCH. | [optional] 
**diversity_level** | **str** | How much diversity to use in recommendation model results e.g. &#x60;medium-diversity&#x60; or &#x60;high-diversity&#x60;. Currently supported values: * &#x60;no-diversity&#x60; * &#x60;low-diversity&#x60; * &#x60;medium-diversity&#x60; * &#x60;high-diversity&#x60; * &#x60;auto-diversity&#x60; If not specified, we choose default based on recommendation model type. Default value: &#x60;no-diversity&#x60;. Can only be set if SolutionType is SOLUTION_TYPE_RECOMMENDATION. | [optional] 
**embedding_config** | [**GoogleCloudDiscoveryengineV1alphaEmbeddingConfig**](GoogleCloudDiscoveryengineV1alphaEmbeddingConfig.md) |  | [optional] 
**filter_control_ids** | **List[str]** | Filter controls to use in serving path. All triggered filter controls will be applied. Filter controls must be in the same data store as the serving config. Maximum of 20 filter controls. | [optional] 
**generic_config** | [**GoogleCloudDiscoveryengineV1alphaServingConfigGenericConfig**](GoogleCloudDiscoveryengineV1alphaServingConfigGenericConfig.md) |  | [optional] 
**guided_search_spec** | [**GoogleCloudDiscoveryengineV1alphaGuidedSearchSpec**](GoogleCloudDiscoveryengineV1alphaGuidedSearchSpec.md) |  | [optional] 
**ignore_control_ids** | **List[str]** | Condition ignore specifications. If multiple ignore conditions match, all matching ignore controls in the list will execute. Order does not matter. Maximum number of specifications is 100. | [optional] 
**media_config** | [**GoogleCloudDiscoveryengineV1alphaServingConfigMediaConfig**](GoogleCloudDiscoveryengineV1alphaServingConfigMediaConfig.md) |  | [optional] 
**model_id** | **str** | The id of the model to use at serving time. Currently only RecommendationModels are supported. Can be changed but only to a compatible model (e.g. others-you-may-like CTR to others-you-may-like CVR). Required when SolutionType is SOLUTION_TYPE_RECOMMENDATION. | [optional] 
**name** | **str** | Immutable. Fully qualified name &#x60;projects/{project}/locations/{location}/collections/{collection_id}/dataStores/{data_store_id}/servingConfigs/{serving_config_id}&#x60; | [optional] 
**oneway_synonyms_control_ids** | **List[str]** | Condition oneway synonyms specifications. If multiple oneway synonyms conditions match, all matching oneway synonyms controls in the list will execute. Maximum number of specifications is 100. Can only be set if SolutionType is SOLUTION_TYPE_SEARCH. | [optional] 
**ranking_expression** | **str** | The ranking expression controls the customized ranking on retrieval documents. To leverage this, document embedding is required. The ranking expression setting in ServingConfig applies to all search requests served by the serving config. However, if SearchRequest.ranking_expression is specified, it overrides the ServingConfig ranking expression. The ranking expression is a single function or multiple functions that are joined by \&quot;+\&quot;. * ranking_expression &#x3D; function, { \&quot; + \&quot;, function }; Supported functions: * double * relevance_score * double * dotProduct(embedding_field_path) Function variables: relevance_score: pre-defined keywords, used for measure relevance between query and document. embedding_field_path: the document embedding field used with query embedding vector. dotProduct: embedding function between embedding_field_path and query embedding vector. Example ranking expression: If document has an embedding field doc_embedding, the ranking expression could be 0.5 * relevance_score + 0.3 * dotProduct(doc_embedding). | [optional] 
**redirect_control_ids** | **List[str]** | IDs of the redirect controls. Only the first triggered redirect action is applied, even if multiple apply. Maximum number of specifications is 100. Can only be set if SolutionType is SOLUTION_TYPE_SEARCH. | [optional] 
**replacement_control_ids** | **List[str]** | Condition replacement specifications. Applied according to the order in the list. A previously replaced term can not be re-replaced. Maximum number of specifications is 100. Can only be set if SolutionType is SOLUTION_TYPE_SEARCH. | [optional] 
**solution_type** | **str** | Required. Immutable. Specifies the solution type that a serving config can be associated with. | [optional] 
**synonyms_control_ids** | **List[str]** | Condition synonyms specifications. If multiple synonyms conditions match, all matching synonyms controls in the list will execute. Maximum number of specifications is 100. Can only be set if SolutionType is SOLUTION_TYPE_SEARCH. | [optional] 
**update_time** | **str** | Output only. ServingConfig updated timestamp. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_serving_config import GoogleCloudDiscoveryengineV1alphaServingConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaServingConfig from a JSON string
google_cloud_discoveryengine_v1alpha_serving_config_instance = GoogleCloudDiscoveryengineV1alphaServingConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaServingConfig.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_serving_config_dict = google_cloud_discoveryengine_v1alpha_serving_config_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaServingConfig from a dict
google_cloud_discoveryengine_v1alpha_serving_config_from_dict = GoogleCloudDiscoveryengineV1alphaServingConfig.from_dict(google_cloud_discoveryengine_v1alpha_serving_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


