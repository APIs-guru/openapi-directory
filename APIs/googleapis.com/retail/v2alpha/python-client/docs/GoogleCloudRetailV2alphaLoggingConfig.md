# GoogleCloudRetailV2alphaLoggingConfig

Project level logging config to control what level of log will be generated and written to Cloud Logging.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_log_generation_rule** | [**GoogleCloudRetailV2alphaLoggingConfigLogGenerationRule**](GoogleCloudRetailV2alphaLoggingConfigLogGenerationRule.md) |  | [optional] 
**name** | **str** | Required. Immutable. The name of the LoggingConfig singleton resource. Format: projects/*/loggingConfig | [optional] 
**service_log_generation_rules** | [**List[GoogleCloudRetailV2alphaLoggingConfigServiceLogGenerationRule]**](GoogleCloudRetailV2alphaLoggingConfigServiceLogGenerationRule.md) | Controls logging configurations more granularly for each supported service. This overrides the default_log_generation_rule for the services specified. For those not mentioned, they will fallback to the default log generation rule. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2alpha_logging_config import GoogleCloudRetailV2alphaLoggingConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2alphaLoggingConfig from a JSON string
google_cloud_retail_v2alpha_logging_config_instance = GoogleCloudRetailV2alphaLoggingConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2alphaLoggingConfig.to_json())

# convert the object into a dict
google_cloud_retail_v2alpha_logging_config_dict = google_cloud_retail_v2alpha_logging_config_instance.to_dict()
# create an instance of GoogleCloudRetailV2alphaLoggingConfig from a dict
google_cloud_retail_v2alpha_logging_config_from_dict = GoogleCloudRetailV2alphaLoggingConfig.from_dict(google_cloud_retail_v2alpha_logging_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


