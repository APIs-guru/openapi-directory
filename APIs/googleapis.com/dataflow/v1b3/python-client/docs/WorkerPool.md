# WorkerPool

Describes one particular pool of Cloud Dataflow workers to be instantiated by the Cloud Dataflow service in order to perform the computations required by a job. Note that a workflow job may use multiple pools, in order to match the various computational requirements of the various stages of the job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**autoscaling_settings** | [**AutoscalingSettings**](AutoscalingSettings.md) |  | [optional] 
**data_disks** | [**List[Disk]**](Disk.md) | Data disks that are used by a VM in this workflow. | [optional] 
**default_package_set** | **str** | The default package set to install. This allows the service to select a default set of packages which are useful to worker harnesses written in a particular language. | [optional] 
**disk_size_gb** | **int** | Size of root disk for VMs, in GB. If zero or unspecified, the service will attempt to choose a reasonable default. | [optional] 
**disk_source_image** | **str** | Fully qualified source image for disks. | [optional] 
**disk_type** | **str** | Type of root disk for VMs. If empty or unspecified, the service will attempt to choose a reasonable default. | [optional] 
**ip_configuration** | **str** | Configuration for VM IPs. | [optional] 
**kind** | **str** | The kind of the worker pool; currently only &#x60;harness&#x60; and &#x60;shuffle&#x60; are supported. | [optional] 
**machine_type** | **str** | Machine type (e.g. \&quot;n1-standard-1\&quot;). If empty or unspecified, the service will attempt to choose a reasonable default. | [optional] 
**metadata** | **Dict[str, str]** | Metadata to set on the Google Compute Engine VMs. | [optional] 
**network** | **str** | Network to which VMs will be assigned. If empty or unspecified, the service will use the network \&quot;default\&quot;. | [optional] 
**num_threads_per_worker** | **int** | The number of threads per worker harness. If empty or unspecified, the service will choose a number of threads (according to the number of cores on the selected machine type for batch, or 1 by convention for streaming). | [optional] 
**num_workers** | **int** | Number of Google Compute Engine workers in this pool needed to execute the job. If zero or unspecified, the service will attempt to choose a reasonable default. | [optional] 
**on_host_maintenance** | **str** | The action to take on host maintenance, as defined by the Google Compute Engine API. | [optional] 
**packages** | [**List[Package]**](Package.md) | Packages to be installed on workers. | [optional] 
**pool_args** | **Dict[str, object]** | Extra arguments for this worker pool. | [optional] 
**sdk_harness_container_images** | [**List[SdkHarnessContainerImage]**](SdkHarnessContainerImage.md) | Set of SDK harness containers needed to execute this pipeline. This will only be set in the Fn API path. For non-cross-language pipelines this should have only one entry. Cross-language pipelines will have two or more entries. | [optional] 
**subnetwork** | **str** | Subnetwork to which VMs will be assigned, if desired. Expected to be of the form \&quot;regions/REGION/subnetworks/SUBNETWORK\&quot;. | [optional] 
**taskrunner_settings** | [**TaskRunnerSettings**](TaskRunnerSettings.md) |  | [optional] 
**teardown_policy** | **str** | Sets the policy for determining when to turndown worker pool. Allowed values are: &#x60;TEARDOWN_ALWAYS&#x60;, &#x60;TEARDOWN_ON_SUCCESS&#x60;, and &#x60;TEARDOWN_NEVER&#x60;. &#x60;TEARDOWN_ALWAYS&#x60; means workers are always torn down regardless of whether the job succeeds. &#x60;TEARDOWN_ON_SUCCESS&#x60; means workers are torn down if the job succeeds. &#x60;TEARDOWN_NEVER&#x60; means the workers are never torn down. If the workers are not torn down by the service, they will continue to run and use Google Compute Engine VM resources in the user&#39;s project until they are explicitly terminated by the user. Because of this, Google recommends using the &#x60;TEARDOWN_ALWAYS&#x60; policy except for small, manually supervised test jobs. If unknown or unspecified, the service will attempt to choose a reasonable default. | [optional] 
**worker_harness_container_image** | **str** | Required. Docker container image that executes the Cloud Dataflow worker harness, residing in Google Container Registry. Deprecated for the Fn API path. Use sdk_harness_container_images instead. | [optional] 
**zone** | **str** | Zone to run the worker pools in. If empty or unspecified, the service will attempt to choose a reasonable default. | [optional] 

## Example

```python
from openapi_client.models.worker_pool import WorkerPool

# TODO update the JSON string below
json = "{}"
# create an instance of WorkerPool from a JSON string
worker_pool_instance = WorkerPool.from_json(json)
# print the JSON string representation of the object
print(WorkerPool.to_json())

# convert the object into a dict
worker_pool_dict = worker_pool_instance.to_dict()
# create an instance of WorkerPool from a dict
worker_pool_from_dict = WorkerPool.from_dict(worker_pool_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


