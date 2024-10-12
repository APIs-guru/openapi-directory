# GoogleCloudDiscoveryengineV1alphaWidgetConfig

WidgetConfig captures configs at the Widget level.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_public_access** | **bool** | Whether allow no-auth integration with widget. If set true, public access to search or other solutions from widget is allowed without authenication token provided by customer hosted backend server. | [optional] 
**allowlisted_domains** | **List[str]** | Allowlisted domains that can load this widget. | [optional] 
**config_id** | **str** | Output only. Unique obfuscated identifier of a WidgetConfig. | [optional] [readonly] 
**content_search_spec** | [**GoogleCloudDiscoveryengineV1alphaSearchRequestContentSearchSpec**](GoogleCloudDiscoveryengineV1alphaSearchRequestContentSearchSpec.md) |  | [optional] 
**create_time** | **str** | Output only. Timestamp the WidgetConfig was created. | [optional] [readonly] 
**data_store_type** | **str** | Output only. The type of the parent data store. | [optional] [readonly] 
**display_name** | **str** | Required. The human readable widget config display name. Used in Discovery UI. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. | [optional] 
**enable_autocomplete** | **bool** | Whether or not to enable autocomplete. | [optional] 
**enable_conversational_search** | **bool** | Whether to allow conversational search (LLM, multi-turn) or not (non-LLM, single-turn). | [optional] 
**enable_quality_feedback** | **bool** | Turn on or off collecting the search result quality feedback from end users. | [optional] 
**enable_result_score** | **bool** | Whether to show the result score. | [optional] 
**enable_safe_search** | **bool** | Whether to enable safe search. | [optional] 
**enable_snippet_result_summary** | **bool** | Turn on or off summary for each snippets result. | [optional] 
**enable_summarization** | **bool** | Turn on or off summarization for the search response. | [optional] 
**enable_web_app** | **bool** | Whether to enable standalone web app. | [optional] 
**facet_field** | [**List[GoogleCloudDiscoveryengineV1alphaWidgetConfigFacetField]**](GoogleCloudDiscoveryengineV1alphaWidgetConfigFacetField.md) | The configuration and appearance of facets in the end user view. | [optional] 
**fields_ui_components_map** | [**Dict[str, GoogleCloudDiscoveryengineV1alphaWidgetConfigUIComponentField]**](GoogleCloudDiscoveryengineV1alphaWidgetConfigUIComponentField.md) | The key is the UI component. Mock. Currently supported &#x60;title&#x60;, &#x60;thumbnail&#x60;, &#x60;url&#x60;, &#x60;custom1&#x60;, &#x60;custom2&#x60;, &#x60;custom3&#x60;. The value is the name of the field along with its device visibility. The 3 custom fields are optional and can be added or removed. &#x60;title&#x60;, &#x60;thumbnail&#x60;, &#x60;url&#x60; are required UI components that cannot be removed. | [optional] 
**industry_vertical** | **str** | Output only. The industry vertical that the WidgetConfig registers. The WidgetConfig industry vertical is based on the associated Engine. | [optional] [readonly] 
**llm_enabled** | **bool** | Output only. Whether LLM is enabled in the corresponding data store. | [optional] [readonly] 
**minimum_data_term_accepted** | **bool** | Output only. Whether the customer accepted data use terms. | [optional] [readonly] 
**name** | **str** | Immutable. The full resource name of the widget config. Format: &#x60;projects/{project}/locations/{location}/collections/{collection_id}/dataStores/{data_store_id}/widgetConfigs/{widget_config_id}&#x60;. This field must be a UTF-8 encoded string with a length limit of 1024 characters. | [optional] 
**result_display_type** | **str** | The type of snippet to display in UCS widget. - RESULT_DISPLAY_TYPE_UNSPECIFIED for existing users. - SNIPPET for new non-enterprise search users. - EXTRACTIVE_ANSWER for new enterprise search users. | [optional] 
**solution_type** | **str** | Required. Immutable. Specifies the solution type that this WidgetConfig can be used for. | [optional] 
**update_time** | **str** | Output only. Timestamp the WidgetConfig was updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_widget_config import GoogleCloudDiscoveryengineV1alphaWidgetConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaWidgetConfig from a JSON string
google_cloud_discoveryengine_v1alpha_widget_config_instance = GoogleCloudDiscoveryengineV1alphaWidgetConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaWidgetConfig.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_widget_config_dict = google_cloud_discoveryengine_v1alpha_widget_config_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaWidgetConfig from a dict
google_cloud_discoveryengine_v1alpha_widget_config_from_dict = GoogleCloudDiscoveryengineV1alphaWidgetConfig.from_dict(google_cloud_discoveryengine_v1alpha_widget_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


