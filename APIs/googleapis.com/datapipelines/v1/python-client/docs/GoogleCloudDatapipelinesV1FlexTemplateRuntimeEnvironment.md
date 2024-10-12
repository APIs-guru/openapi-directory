# GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironment

The environment values to be set at runtime for a Flex Template.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_experiments** | **List[str]** | Additional experiment flags for the job. | [optional] 
**additional_user_labels** | **Dict[str, str]** | Additional user labels to be specified for the job. Keys and values must follow the restrictions specified in the [labeling restrictions](https://cloud.google.com/compute/docs/labeling-resources#restrictions). An object containing a list of key/value pairs. Example: &#x60;{ \&quot;name\&quot;: \&quot;wrench\&quot;, \&quot;mass\&quot;: \&quot;1kg\&quot;, \&quot;count\&quot;: \&quot;3\&quot; }&#x60;. | [optional] 
**enable_streaming_engine** | **bool** | Whether to enable Streaming Engine for the job. | [optional] 
**flexrs_goal** | **str** | Set FlexRS goal for the job. https://cloud.google.com/dataflow/docs/guides/flexrs | [optional] 
**ip_configuration** | **str** | Configuration for VM IPs. | [optional] 
**kms_key_name** | **str** | Name for the Cloud KMS key for the job. Key format is: projects//locations//keyRings//cryptoKeys/ | [optional] 
**machine_type** | **str** | The machine type to use for the job. Defaults to the value from the template if not specified. | [optional] 
**max_workers** | **int** | The maximum number of Compute Engine instances to be made available to your pipeline during execution, from 1 to 1000. | [optional] 
**network** | **str** | Network to which VMs will be assigned. If empty or unspecified, the service will use the network \&quot;default\&quot;. | [optional] 
**num_workers** | **int** | The initial number of Compute Engine instances for the job. | [optional] 
**service_account_email** | **str** | The email address of the service account to run the job as. | [optional] 
**subnetwork** | **str** | Subnetwork to which VMs will be assigned, if desired. You can specify a subnetwork using either a complete URL or an abbreviated path. Expected to be of the form \&quot;https://www.googleapis.com/compute/v1/projects/HOST_PROJECT_ID/regions/REGION/subnetworks/SUBNETWORK\&quot; or \&quot;regions/REGION/subnetworks/SUBNETWORK\&quot;. If the subnetwork is located in a Shared VPC network, you must use the complete URL. | [optional] 
**temp_location** | **str** | The Cloud Storage path to use for temporary files. Must be a valid Cloud Storage URL, beginning with &#x60;gs://&#x60;. | [optional] 
**worker_region** | **str** | The Compute Engine region (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. \&quot;us-west1\&quot;. Mutually exclusive with worker_zone. If neither worker_region nor worker_zone is specified, defaults to the control plane region. | [optional] 
**worker_zone** | **str** | The Compute Engine zone (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. \&quot;us-west1-a\&quot;. Mutually exclusive with worker_region. If neither worker_region nor worker_zone is specified, a zone in the control plane region is chosen based on available capacity. If both &#x60;worker_zone&#x60; and &#x60;zone&#x60; are set, &#x60;worker_zone&#x60; takes precedence. | [optional] 
**zone** | **str** | The Compute Engine [availability zone](https://cloud.google.com/compute/docs/regions-zones/regions-zones) for launching worker instances to run your pipeline. In the future, worker_zone will take precedence. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datapipelines_v1_flex_template_runtime_environment import GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironment

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironment from a JSON string
google_cloud_datapipelines_v1_flex_template_runtime_environment_instance = GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironment.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironment.to_json())

# convert the object into a dict
google_cloud_datapipelines_v1_flex_template_runtime_environment_dict = google_cloud_datapipelines_v1_flex_template_runtime_environment_instance.to_dict()
# create an instance of GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironment from a dict
google_cloud_datapipelines_v1_flex_template_runtime_environment_from_dict = GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironment.from_dict(google_cloud_datapipelines_v1_flex_template_runtime_environment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


