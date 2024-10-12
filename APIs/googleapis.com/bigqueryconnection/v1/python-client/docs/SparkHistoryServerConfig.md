# SparkHistoryServerConfig

Configuration of the Spark History Server.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dataproc_cluster** | **str** | Optional. Resource name of an existing Dataproc Cluster to act as a Spark History Server for the connection. Example: * &#x60;projects/[project_id]/regions/[region]/clusters/[cluster_name]&#x60; | [optional] 

## Example

```python
from openapi_client.models.spark_history_server_config import SparkHistoryServerConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SparkHistoryServerConfig from a JSON string
spark_history_server_config_instance = SparkHistoryServerConfig.from_json(json)
# print the JSON string representation of the object
print(SparkHistoryServerConfig.to_json())

# convert the object into a dict
spark_history_server_config_dict = spark_history_server_config_instance.to_dict()
# create an instance of SparkHistoryServerConfig from a dict
spark_history_server_config_from_dict = SparkHistoryServerConfig.from_dict(spark_history_server_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


