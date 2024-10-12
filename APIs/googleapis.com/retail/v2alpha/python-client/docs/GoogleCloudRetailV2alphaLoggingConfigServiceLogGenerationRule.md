# GoogleCloudRetailV2alphaLoggingConfigServiceLogGenerationRule

The granular logging configurations for supported services.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**log_generation_rule** | [**GoogleCloudRetailV2alphaLoggingConfigLogGenerationRule**](GoogleCloudRetailV2alphaLoggingConfigLogGenerationRule.md) |  | [optional] 
**service_name** | **str** | Required. Supported service names: \&quot;CatalogService\&quot;, \&quot;CompletionService\&quot;, \&quot;ControlService\&quot;, \&quot;MerchantCenterStreaming\&quot;, \&quot;ModelService\&quot;, \&quot;PredictionService\&quot;, \&quot;ProductService\&quot;, \&quot;ServingConfigService\&quot;, \&quot;UserEventService\&quot;, | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2alpha_logging_config_service_log_generation_rule import GoogleCloudRetailV2alphaLoggingConfigServiceLogGenerationRule

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2alphaLoggingConfigServiceLogGenerationRule from a JSON string
google_cloud_retail_v2alpha_logging_config_service_log_generation_rule_instance = GoogleCloudRetailV2alphaLoggingConfigServiceLogGenerationRule.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2alphaLoggingConfigServiceLogGenerationRule.to_json())

# convert the object into a dict
google_cloud_retail_v2alpha_logging_config_service_log_generation_rule_dict = google_cloud_retail_v2alpha_logging_config_service_log_generation_rule_instance.to_dict()
# create an instance of GoogleCloudRetailV2alphaLoggingConfigServiceLogGenerationRule from a dict
google_cloud_retail_v2alpha_logging_config_service_log_generation_rule_from_dict = GoogleCloudRetailV2alphaLoggingConfigServiceLogGenerationRule.from_dict(google_cloud_retail_v2alpha_logging_config_service_log_generation_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


