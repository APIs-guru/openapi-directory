# FlexTemplateRuntimeEnvironment

The environment values to be set at runtime for flex template. LINT.IfChange

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_experiments** | **List[str]** | Additional experiment flags for the job. | [optional] 
**additional_user_labels** | **Dict[str, str]** | Additional user labels to be specified for the job. Keys and values must follow the restrictions specified in the [labeling restrictions](https://cloud.google.com/compute/docs/labeling-resources#restrictions) page. An object containing a list of \&quot;key\&quot;: value pairs. Example: { \&quot;name\&quot;: \&quot;wrench\&quot;, \&quot;mass\&quot;: \&quot;1kg\&quot;, \&quot;count\&quot;: \&quot;3\&quot; }. | [optional] 
**autoscaling_algorithm** | **str** | The algorithm to use for autoscaling | [optional] 
**disk_size_gb** | **int** | Worker disk size, in gigabytes. | [optional] 
**dump_heap_on_oom** | **bool** | If true, when processing time is spent almost entirely on garbage collection (GC), saves a heap dump before ending the thread or process. If false, ends the thread or process without saving a heap dump. Does not save a heap dump when the Java Virtual Machine (JVM) has an out of memory error during processing. The location of the heap file is either echoed back to the user, or the user is given the opportunity to download the heap file. | [optional] 
**enable_launcher_vm_serial_port_logging** | **bool** | If true serial port logging will be enabled for the launcher VM. | [optional] 
**enable_streaming_engine** | **bool** | Whether to enable Streaming Engine for the job. | [optional] 
**flexrs_goal** | **str** | Set FlexRS goal for the job. https://cloud.google.com/dataflow/docs/guides/flexrs | [optional] 
**ip_configuration** | **str** | Configuration for VM IPs. | [optional] 
**kms_key_name** | **str** | Name for the Cloud KMS key for the job. Key format is: projects//locations//keyRings//cryptoKeys/ | [optional] 
**launcher_machine_type** | **str** | The machine type to use for launching the job. The default is n1-standard-1. | [optional] 
**machine_type** | **str** | The machine type to use for the job. Defaults to the value from the template if not specified. | [optional] 
**max_workers** | **int** | The maximum number of Google Compute Engine instances to be made available to your pipeline during execution, from 1 to 1000. | [optional] 
**network** | **str** | Network to which VMs will be assigned. If empty or unspecified, the service will use the network \&quot;default\&quot;. | [optional] 
**num_workers** | **int** | The initial number of Google Compute Engine instances for the job. | [optional] 
**save_heap_dumps_to_gcs_path** | **str** | Cloud Storage bucket (directory) to upload heap dumps to. Enabling this field implies that &#x60;dump_heap_on_oom&#x60; is set to true. | [optional] 
**sdk_container_image** | **str** | Docker registry location of container image to use for the &#39;worker harness. Default is the container for the version of the SDK. Note this field is only valid for portable pipelines. | [optional] 
**service_account_email** | **str** | The email address of the service account to run the job as. | [optional] 
**staging_location** | **str** | The Cloud Storage path for staging local files. Must be a valid Cloud Storage URL, beginning with &#x60;gs://&#x60;. | [optional] 
**streaming_mode** | **str** | Optional. Specifies the Streaming Engine message processing guarantees. Reduces cost and latency but might result in duplicate messages committed to storage. Designed to run simple mapping streaming ETL jobs at the lowest cost. For example, Change Data Capture (CDC) to BigQuery is a canonical use case. | [optional] 
**subnetwork** | **str** | Subnetwork to which VMs will be assigned, if desired. You can specify a subnetwork using either a complete URL or an abbreviated path. Expected to be of the form \&quot;https://www.googleapis.com/compute/v1/projects/HOST_PROJECT_ID/regions/REGION/subnetworks/SUBNETWORK\&quot; or \&quot;regions/REGION/subnetworks/SUBNETWORK\&quot;. If the subnetwork is located in a Shared VPC network, you must use the complete URL. | [optional] 
**temp_location** | **str** | The Cloud Storage path to use for temporary files. Must be a valid Cloud Storage URL, beginning with &#x60;gs://&#x60;. | [optional] 
**worker_region** | **str** | The Compute Engine region (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. \&quot;us-west1\&quot;. Mutually exclusive with worker_zone. If neither worker_region nor worker_zone is specified, default to the control plane&#39;s region. | [optional] 
**worker_zone** | **str** | The Compute Engine zone (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. \&quot;us-west1-a\&quot;. Mutually exclusive with worker_region. If neither worker_region nor worker_zone is specified, a zone in the control plane&#39;s region is chosen based on available capacity. If both &#x60;worker_zone&#x60; and &#x60;zone&#x60; are set, &#x60;worker_zone&#x60; takes precedence. | [optional] 
**zone** | **str** | The Compute Engine [availability zone](https://cloud.google.com/compute/docs/regions-zones/regions-zones) for launching worker instances to run your pipeline. In the future, worker_zone will take precedence. | [optional] 

## Example

```python
from openapi_client.models.flex_template_runtime_environment import FlexTemplateRuntimeEnvironment

# TODO update the JSON string below
json = "{}"
# create an instance of FlexTemplateRuntimeEnvironment from a JSON string
flex_template_runtime_environment_instance = FlexTemplateRuntimeEnvironment.from_json(json)
# print the JSON string representation of the object
print(FlexTemplateRuntimeEnvironment.to_json())

# convert the object into a dict
flex_template_runtime_environment_dict = flex_template_runtime_environment_instance.to_dict()
# create an instance of FlexTemplateRuntimeEnvironment from a dict
flex_template_runtime_environment_from_dict = FlexTemplateRuntimeEnvironment.from_dict(flex_template_runtime_environment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


