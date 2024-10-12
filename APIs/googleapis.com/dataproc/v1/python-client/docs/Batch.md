# Batch

A representation of a batch workload in the service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The time when the batch was created. | [optional] [readonly] 
**creator** | **str** | Output only. The email address of the user who created the batch. | [optional] [readonly] 
**environment_config** | [**EnvironmentConfig**](EnvironmentConfig.md) |  | [optional] 
**labels** | **Dict[str, str]** | Optional. The labels to associate with this batch. Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a batch. | [optional] 
**name** | **str** | Output only. The resource name of the batch. | [optional] [readonly] 
**operation** | **str** | Output only. The resource name of the operation associated with this batch. | [optional] [readonly] 
**pyspark_batch** | [**PySparkBatch**](PySparkBatch.md) |  | [optional] 
**runtime_config** | [**RuntimeConfig**](RuntimeConfig.md) |  | [optional] 
**runtime_info** | [**RuntimeInfo**](RuntimeInfo.md) |  | [optional] 
**spark_batch** | [**SparkBatch**](SparkBatch.md) |  | [optional] 
**spark_r_batch** | [**SparkRBatch**](SparkRBatch.md) |  | [optional] 
**spark_sql_batch** | [**SparkSqlBatch**](SparkSqlBatch.md) |  | [optional] 
**state** | **str** | Output only. The state of the batch. | [optional] [readonly] 
**state_history** | [**List[StateHistory]**](StateHistory.md) | Output only. Historical state information for the batch. | [optional] [readonly] 
**state_message** | **str** | Output only. Batch state details, such as a failure description if the state is FAILED. | [optional] [readonly] 
**state_time** | **str** | Output only. The time when the batch entered a current state. | [optional] [readonly] 
**uuid** | **str** | Output only. A batch UUID (Unique Universal Identifier). The service generates this value when it creates the batch. | [optional] [readonly] 

## Example

```python
from openapi_client.models.batch import Batch

# TODO update the JSON string below
json = "{}"
# create an instance of Batch from a JSON string
batch_instance = Batch.from_json(json)
# print the JSON string representation of the object
print(Batch.to_json())

# convert the object into a dict
batch_dict = batch_instance.to_dict()
# create an instance of Batch from a dict
batch_from_dict = Batch.from_dict(batch_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


