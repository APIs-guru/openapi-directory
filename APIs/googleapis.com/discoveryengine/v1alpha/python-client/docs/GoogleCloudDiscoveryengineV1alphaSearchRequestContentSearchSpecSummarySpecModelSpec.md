# GoogleCloudDiscoveryengineV1alphaSearchRequestContentSearchSpecSummarySpecModelSpec

Specification of the model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**version** | **str** | The model version used to generate the summary. Supported values are: * &#x60;stable&#x60;: string. Default value when no value is specified. Uses a generally available, fine-tuned version of the text-bison@001 model. * &#x60;preview&#x60;: string. (Public preview) Uses a fine-tuned version of the text-bison@002 model. This model works only for summaries in English. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_search_request_content_search_spec_summary_spec_model_spec import GoogleCloudDiscoveryengineV1alphaSearchRequestContentSearchSpecSummarySpecModelSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaSearchRequestContentSearchSpecSummarySpecModelSpec from a JSON string
google_cloud_discoveryengine_v1alpha_search_request_content_search_spec_summary_spec_model_spec_instance = GoogleCloudDiscoveryengineV1alphaSearchRequestContentSearchSpecSummarySpecModelSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaSearchRequestContentSearchSpecSummarySpecModelSpec.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_search_request_content_search_spec_summary_spec_model_spec_dict = google_cloud_discoveryengine_v1alpha_search_request_content_search_spec_summary_spec_model_spec_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaSearchRequestContentSearchSpecSummarySpecModelSpec from a dict
google_cloud_discoveryengine_v1alpha_search_request_content_search_spec_summary_spec_model_spec_from_dict = GoogleCloudDiscoveryengineV1alphaSearchRequestContentSearchSpecSummarySpecModelSpec.from_dict(google_cloud_discoveryengine_v1alpha_search_request_content_search_spec_summary_spec_model_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


