# GoogleCloudDiscoveryengineV1betaConverseConversationRequest

Request message for ConversationalSearchService.ConverseConversation method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**boost_spec** | [**GoogleCloudDiscoveryengineV1betaSearchRequestBoostSpec**](GoogleCloudDiscoveryengineV1betaSearchRequestBoostSpec.md) |  | [optional] 
**conversation** | [**GoogleCloudDiscoveryengineV1betaConversation**](GoogleCloudDiscoveryengineV1betaConversation.md) |  | [optional] 
**filter** | **str** | The filter syntax consists of an expression language for constructing a predicate from one or more fields of the documents being filtered. Filter expression is case-sensitive. This will be used to filter search results which may affect the summary response. If this field is unrecognizable, an &#x60;INVALID_ARGUMENT&#x60; is returned. Filtering in Vertex AI Search is done by mapping the LHS filter key to a key property defined in the Vertex AI Search backend -- this mapping is defined by the customer in their schema. For example a media customer might have a field &#39;name&#39; in their schema. In this case the filter would look like this: filter --&gt; name:&#39;ANY(\&quot;king kong\&quot;)&#39; For more information about filtering including syntax and filter operators, see [Filter](https://cloud.google.com/generative-ai-app-builder/docs/filter-search-metadata) | [optional] 
**query** | [**GoogleCloudDiscoveryengineV1betaTextInput**](GoogleCloudDiscoveryengineV1betaTextInput.md) |  | [optional] 
**safe_search** | **bool** | Whether to turn on safe search. | [optional] 
**serving_config** | **str** | The resource name of the Serving Config to use. Format: &#x60;projects/{project_number}/locations/{location_id}/collections/{collection}/dataStores/{data_store_id}/servingConfigs/{serving_config_id}&#x60; If this is not set, the default serving config will be used. | [optional] 
**summary_spec** | [**GoogleCloudDiscoveryengineV1betaSearchRequestContentSearchSpecSummarySpec**](GoogleCloudDiscoveryengineV1betaSearchRequestContentSearchSpecSummarySpec.md) |  | [optional] 
**user_labels** | **Dict[str, str]** | The user labels applied to a resource must meet the following requirements: * Each resource can have multiple labels, up to a maximum of 64. * Each label must be a key-value pair. * Keys have a minimum length of 1 character and a maximum length of 63 characters and cannot be empty. Values can be empty and have a maximum length of 63 characters. * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. All characters must use UTF-8 encoding, and international characters are allowed. * The key portion of a label must be unique. However, you can use the same key with multiple resources. * Keys must start with a lowercase letter or international character. See [Google Cloud Document](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements) for more details. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1beta_converse_conversation_request import GoogleCloudDiscoveryengineV1betaConverseConversationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1betaConverseConversationRequest from a JSON string
google_cloud_discoveryengine_v1beta_converse_conversation_request_instance = GoogleCloudDiscoveryengineV1betaConverseConversationRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1betaConverseConversationRequest.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1beta_converse_conversation_request_dict = google_cloud_discoveryengine_v1beta_converse_conversation_request_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1betaConverseConversationRequest from a dict
google_cloud_discoveryengine_v1beta_converse_conversation_request_from_dict = GoogleCloudDiscoveryengineV1betaConverseConversationRequest.from_dict(google_cloud_discoveryengine_v1beta_converse_conversation_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


