# SparkLoggingInfo

Spark job logs can be filtered by these fields in Cloud Logging.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**project_id** | **str** | Output only. Project ID where the Spark logs were written. | [optional] [readonly] 
**resource_type** | **str** | Output only. Resource type used for logging. | [optional] [readonly] 

## Example

```python
from openapi_client.models.spark_logging_info import SparkLoggingInfo

# TODO update the JSON string below
json = "{}"
# create an instance of SparkLoggingInfo from a JSON string
spark_logging_info_instance = SparkLoggingInfo.from_json(json)
# print the JSON string representation of the object
print(SparkLoggingInfo.to_json())

# convert the object into a dict
spark_logging_info_dict = spark_logging_info_instance.to_dict()
# create an instance of SparkLoggingInfo from a dict
spark_logging_info_from_dict = SparkLoggingInfo.from_dict(spark_logging_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


