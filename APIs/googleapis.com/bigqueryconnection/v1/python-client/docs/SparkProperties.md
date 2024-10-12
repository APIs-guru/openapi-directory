# SparkProperties

Container for connection properties to execute stored procedures for Apache Spark.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metastore_service_config** | [**MetastoreServiceConfig**](MetastoreServiceConfig.md) |  | [optional] 
**service_account_id** | **str** | Output only. The account ID of the service created for the purpose of this connection. The service account does not have any permissions associated with it when it is created. After creation, customers delegate permissions to the service account. When the connection is used in the context of a stored procedure for Apache Spark in BigQuery, the service account is used to connect to the desired resources in Google Cloud. The account ID is in the form of: bqcx--@gcp-sa-bigquery-consp.iam.gserviceaccount.com | [optional] [readonly] 
**spark_history_server_config** | [**SparkHistoryServerConfig**](SparkHistoryServerConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.spark_properties import SparkProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SparkProperties from a JSON string
spark_properties_instance = SparkProperties.from_json(json)
# print the JSON string representation of the object
print(SparkProperties.to_json())

# convert the object into a dict
spark_properties_dict = spark_properties_instance.to_dict()
# create an instance of SparkProperties from a dict
spark_properties_from_dict = SparkProperties.from_dict(spark_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


