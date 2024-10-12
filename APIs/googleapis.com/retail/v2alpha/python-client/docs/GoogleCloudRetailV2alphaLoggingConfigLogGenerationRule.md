# GoogleCloudRetailV2alphaLoggingConfigLogGenerationRule

The logging configurations for services supporting log generation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**info_log_sample_rate** | **float** | The log sample rate for INFO level log entries. You can use this to reduce the number of entries generated for INFO level logs. DO NOT set this field if the logging_level is not LoggingLevel.LOG_ALL. Otherwise, an INVALID_ARGUMENT error is returned. Sample rate for INFO logs defaults to 1 when unset (generate and send all INFO logs to Cloud Logging). Its value must be greater than 0 and less than or equal to 1. | [optional] 
**logging_level** | **str** | The logging level. By default it is set to &#x60;LOG_WARNINGS_AND_ABOVE&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2alpha_logging_config_log_generation_rule import GoogleCloudRetailV2alphaLoggingConfigLogGenerationRule

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2alphaLoggingConfigLogGenerationRule from a JSON string
google_cloud_retail_v2alpha_logging_config_log_generation_rule_instance = GoogleCloudRetailV2alphaLoggingConfigLogGenerationRule.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2alphaLoggingConfigLogGenerationRule.to_json())

# convert the object into a dict
google_cloud_retail_v2alpha_logging_config_log_generation_rule_dict = google_cloud_retail_v2alpha_logging_config_log_generation_rule_instance.to_dict()
# create an instance of GoogleCloudRetailV2alphaLoggingConfigLogGenerationRule from a dict
google_cloud_retail_v2alpha_logging_config_log_generation_rule_from_dict = GoogleCloudRetailV2alphaLoggingConfigLogGenerationRule.from_dict(google_cloud_retail_v2alpha_logging_config_log_generation_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


