# Environment

Describes the environment in which a Dataflow Job runs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster_manager_api_service** | **str** | The type of cluster manager API to use. If unknown or unspecified, the service will attempt to choose a reasonable default. This should be in the form of the API service name, e.g. \&quot;compute.googleapis.com\&quot;. | [optional] 
**dataset** | **str** | The dataset for the current project where various workflow related tables are stored. The supported resource type is: Google BigQuery: bigquery.googleapis.com/{dataset} | [optional] 
**debug_options** | [**DebugOptions**](DebugOptions.md) |  | [optional] 
**experiments** | **List[str]** | The list of experiments to enable. This field should be used for SDK related experiments and not for service related experiments. The proper field for service related experiments is service_options. | [optional] 
**flex_resource_scheduling_goal** | **str** | Which Flexible Resource Scheduling mode to run in. | [optional] 
**internal_experiments** | **Dict[str, object]** | Experimental settings. | [optional] 
**sdk_pipeline_options** | **Dict[str, object]** | The Cloud Dataflow SDK pipeline options specified by the user. These options are passed through the service and are used to recreate the SDK pipeline options on the worker in a language agnostic and platform independent way. | [optional] 
**service_account_email** | **str** | Identity to run virtual machines as. Defaults to the default account. | [optional] 
**service_kms_key_name** | **str** | If set, contains the Cloud KMS key identifier used to encrypt data at rest, AKA a Customer Managed Encryption Key (CMEK). Format: projects/PROJECT_ID/locations/LOCATION/keyRings/KEY_RING/cryptoKeys/KEY | [optional] 
**service_options** | **List[str]** | The list of service options to enable. This field should be used for service related experiments only. These experiments, when graduating to GA, should be replaced by dedicated fields or become default (i.e. always on). | [optional] 
**shuffle_mode** | **str** | Output only. The shuffle mode used for the job. | [optional] [readonly] 
**streaming_mode** | **str** | Optional. Specifies the Streaming Engine message processing guarantees. Reduces cost and latency but might result in duplicate messages committed to storage. Designed to run simple mapping streaming ETL jobs at the lowest cost. For example, Change Data Capture (CDC) to BigQuery is a canonical use case. | [optional] 
**temp_storage_prefix** | **str** | The prefix of the resources the system should use for temporary storage. The system will append the suffix \&quot;/temp-{JOBNAME} to this resource prefix, where {JOBNAME} is the value of the job_name field. The resulting bucket and object prefix is used as the prefix of the resources used to store temporary data needed during the job execution. NOTE: This will override the value in taskrunner_settings. The supported resource type is: Google Cloud Storage: storage.googleapis.com/{bucket}/{object} bucket.storage.googleapis.com/{object} | [optional] 
**use_streaming_engine_resource_based_billing** | **bool** | Output only. Whether the job uses the Streaming Engine resource-based billing model. | [optional] [readonly] 
**user_agent** | **Dict[str, object]** | A description of the process that generated the request. | [optional] 
**version** | **Dict[str, object]** | A structure describing which components and their versions of the service are required in order to run the job. | [optional] 
**worker_pools** | [**List[WorkerPool]**](WorkerPool.md) | The worker pools. At least one \&quot;harness\&quot; worker pool must be specified in order for the job to have workers. | [optional] 
**worker_region** | **str** | The Compute Engine region (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. \&quot;us-west1\&quot;. Mutually exclusive with worker_zone. If neither worker_region nor worker_zone is specified, default to the control plane&#39;s region. | [optional] 
**worker_zone** | **str** | The Compute Engine zone (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. \&quot;us-west1-a\&quot;. Mutually exclusive with worker_region. If neither worker_region nor worker_zone is specified, a zone in the control plane&#39;s region is chosen based on available capacity. | [optional] 

## Example

```python
from openapi_client.models.environment import Environment

# TODO update the JSON string below
json = "{}"
# create an instance of Environment from a JSON string
environment_instance = Environment.from_json(json)
# print the JSON string representation of the object
print(Environment.to_json())

# convert the object into a dict
environment_dict = environment_instance.to_dict()
# create an instance of Environment from a dict
environment_from_dict = Environment.from_dict(environment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


