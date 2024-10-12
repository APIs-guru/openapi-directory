# RuntimeEnvironment

The environment values to set at runtime.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_experiments** | **List[str]** | Optional. Additional experiment flags for the job, specified with the &#x60;--experiments&#x60; option. | [optional] 
**additional_user_labels** | **Dict[str, str]** | Optional. Additional user labels to be specified for the job. Keys and values should follow the restrictions specified in the [labeling restrictions](https://cloud.google.com/compute/docs/labeling-resources#restrictions) page. An object containing a list of \&quot;key\&quot;: value pairs. Example: { \&quot;name\&quot;: \&quot;wrench\&quot;, \&quot;mass\&quot;: \&quot;1kg\&quot;, \&quot;count\&quot;: \&quot;3\&quot; }. | [optional] 
**bypass_temp_dir_validation** | **bool** | Optional. Whether to bypass the safety checks for the job&#39;s temporary directory. Use with caution. | [optional] 
**disk_size_gb** | **int** | Optional. The disk size, in gigabytes, to use on each remote Compute Engine worker instance. | [optional] 
**enable_streaming_engine** | **bool** | Optional. Whether to enable Streaming Engine for the job. | [optional] 
**ip_configuration** | **str** | Optional. Configuration for VM IPs. | [optional] 
**kms_key_name** | **str** | Optional. Name for the Cloud KMS key for the job. Key format is: projects//locations//keyRings//cryptoKeys/ | [optional] 
**machine_type** | **str** | Optional. The machine type to use for the job. Defaults to the value from the template if not specified. | [optional] 
**max_workers** | **int** | Optional. The maximum number of Google Compute Engine instances to be made available to your pipeline during execution, from 1 to 1000. The default value is 1. | [optional] 
**network** | **str** | Optional. Network to which VMs will be assigned. If empty or unspecified, the service will use the network \&quot;default\&quot;. | [optional] 
**num_workers** | **int** | Optional. The initial number of Google Compute Engine instances for the job. The default value is 11. | [optional] 
**service_account_email** | **str** | Optional. The email address of the service account to run the job as. | [optional] 
**streaming_mode** | **str** | Optional. Specifies the Streaming Engine message processing guarantees. Reduces cost and latency but might result in duplicate messages committed to storage. Designed to run simple mapping streaming ETL jobs at the lowest cost. For example, Change Data Capture (CDC) to BigQuery is a canonical use case. | [optional] 
**subnetwork** | **str** | Optional. Subnetwork to which VMs will be assigned, if desired. You can specify a subnetwork using either a complete URL or an abbreviated path. Expected to be of the form \&quot;https://www.googleapis.com/compute/v1/projects/HOST_PROJECT_ID/regions/REGION/subnetworks/SUBNETWORK\&quot; or \&quot;regions/REGION/subnetworks/SUBNETWORK\&quot;. If the subnetwork is located in a Shared VPC network, you must use the complete URL. | [optional] 
**temp_location** | **str** | Required. The Cloud Storage path to use for temporary files. Must be a valid Cloud Storage URL, beginning with &#x60;gs://&#x60;. | [optional] 
**worker_region** | **str** | Required. The Compute Engine region (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. \&quot;us-west1\&quot;. Mutually exclusive with worker_zone. If neither worker_region nor worker_zone is specified, default to the control plane&#39;s region. | [optional] 
**worker_zone** | **str** | Optional. The Compute Engine zone (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. \&quot;us-west1-a\&quot;. Mutually exclusive with worker_region. If neither worker_region nor worker_zone is specified, a zone in the control plane&#39;s region is chosen based on available capacity. If both &#x60;worker_zone&#x60; and &#x60;zone&#x60; are set, &#x60;worker_zone&#x60; takes precedence. | [optional] 
**zone** | **str** | Optional. The Compute Engine [availability zone](https://cloud.google.com/compute/docs/regions-zones/regions-zones) for launching worker instances to run your pipeline. In the future, worker_zone will take precedence. | [optional] 

## Example

```python
from openapi_client.models.runtime_environment import RuntimeEnvironment

# TODO update the JSON string below
json = "{}"
# create an instance of RuntimeEnvironment from a JSON string
runtime_environment_instance = RuntimeEnvironment.from_json(json)
# print the JSON string representation of the object
print(RuntimeEnvironment.to_json())

# convert the object into a dict
runtime_environment_dict = runtime_environment_instance.to_dict()
# create an instance of RuntimeEnvironment from a dict
runtime_environment_from_dict = RuntimeEnvironment.from_dict(runtime_environment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


