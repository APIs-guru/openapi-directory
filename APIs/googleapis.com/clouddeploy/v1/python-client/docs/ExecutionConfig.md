# ExecutionConfig

Configuration of the environment to use when calling Skaffold.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**artifact_storage** | **str** | Optional. Cloud Storage location in which to store execution outputs. This can either be a bucket (\&quot;gs://my-bucket\&quot;) or a path within a bucket (\&quot;gs://my-bucket/my-dir\&quot;). If unspecified, a default bucket located in the same region will be used. | [optional] 
**default_pool** | [**DefaultPool**](DefaultPool.md) |  | [optional] 
**execution_timeout** | **str** | Optional. Execution timeout for a Cloud Build Execution. This must be between 10m and 24h in seconds format. If unspecified, a default timeout of 1h is used. | [optional] 
**private_pool** | [**PrivatePool**](PrivatePool.md) |  | [optional] 
**service_account** | **str** | Optional. Google service account to use for execution. If unspecified, the project execution service account (-compute@developer.gserviceaccount.com) is used. | [optional] 
**usages** | **List[str]** | Required. Usages when this configuration should be applied. | [optional] 
**worker_pool** | **str** | Optional. The resource name of the &#x60;WorkerPool&#x60;, with the format &#x60;projects/{project}/locations/{location}/workerPools/{worker_pool}&#x60;. If this optional field is unspecified, the default Cloud Build pool will be used. | [optional] 

## Example

```python
from openapi_client.models.execution_config import ExecutionConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ExecutionConfig from a JSON string
execution_config_instance = ExecutionConfig.from_json(json)
# print the JSON string representation of the object
print(ExecutionConfig.to_json())

# convert the object into a dict
execution_config_dict = execution_config_instance.to_dict()
# create an instance of ExecutionConfig from a dict
execution_config_from_dict = ExecutionConfig.from_dict(execution_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


