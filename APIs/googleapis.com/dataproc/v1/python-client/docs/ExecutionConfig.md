# ExecutionConfig

Execution configuration for a workload.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**idle_ttl** | **str** | Optional. Applies to sessions only. The duration to keep the session alive while it&#39;s idling. Exceeding this threshold causes the session to terminate. This field cannot be set on a batch workload. Minimum value is 10 minutes; maximum value is 14 days (see JSON representation of Duration (https://developers.google.com/protocol-buffers/docs/proto3#json)). Defaults to 1 hour if not set. If both ttl and idle_ttl are specified for an interactive session, the conditions are treated as OR conditions: the workload will be terminated when it has been idle for idle_ttl or when ttl has been exceeded, whichever occurs first. | [optional] 
**kms_key** | **str** | Optional. The Cloud KMS key to use for encryption. | [optional] 
**network_tags** | **List[str]** | Optional. Tags used for network traffic control. | [optional] 
**network_uri** | **str** | Optional. Network URI to connect workload to. | [optional] 
**service_account** | **str** | Optional. Service account that used to execute workload. | [optional] 
**staging_bucket** | **str** | Optional. A Cloud Storage bucket used to stage workload dependencies, config files, and store workload output and other ephemeral data, such as Spark history files. If you do not specify a staging bucket, Cloud Dataproc will determine a Cloud Storage location according to the region where your workload is running, and then create and manage project-level, per-location staging and temporary buckets. This field requires a Cloud Storage bucket name, not a gs://... URI to a Cloud Storage bucket. | [optional] 
**subnetwork_uri** | **str** | Optional. Subnetwork URI to connect workload to. | [optional] 
**ttl** | **str** | Optional. The duration after which the workload will be terminated, specified as the JSON representation for Duration (https://protobuf.dev/programming-guides/proto3/#json). When the workload exceeds this duration, it will be unconditionally terminated without waiting for ongoing work to finish. If ttl is not specified for a batch workload, the workload will be allowed to run until it exits naturally (or run forever without exiting). If ttl is not specified for an interactive session, it defaults to 24 hours. If ttl is not specified for a batch that uses 2.1+ runtime version, it defaults to 4 hours. Minimum value is 10 minutes; maximum value is 14 days. If both ttl and idle_ttl are specified (for an interactive session), the conditions are treated as OR conditions: the workload will be terminated when it has been idle for idle_ttl or when ttl has been exceeded, whichever occurs first. | [optional] 

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


