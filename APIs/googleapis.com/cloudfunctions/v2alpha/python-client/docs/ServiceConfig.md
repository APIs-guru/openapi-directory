# ServiceConfig

Describes the Service being deployed. Currently Supported : Cloud Run (fully managed).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**all_traffic_on_latest_revision** | **bool** | Whether 100% of traffic is routed to the latest revision. On CreateFunction and UpdateFunction, when set to true, the revision being deployed will serve 100% of traffic, ignoring any traffic split settings, if any. On GetFunction, true will be returned if the latest revision is serving 100% of traffic. | [optional] 
**available_cpu** | **str** | The number of CPUs used in a single container instance. Default value is calculated from available memory. Supports the same values as Cloud Run, see https://cloud.google.com/run/docs/reference/rest/v1/Container#resourcerequirements Example: \&quot;1\&quot; indicates 1 vCPU | [optional] 
**available_memory** | **str** | The amount of memory available for a function. Defaults to 256M. Supported units are k, M, G, Mi, Gi. If no unit is supplied the value is interpreted as bytes. See https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/apimachinery/pkg/api/resource/quantity.go a full description. | [optional] 
**environment_variables** | **Dict[str, str]** | Environment variables that shall be available during function execution. | [optional] 
**ingress_settings** | **str** | The ingress settings for the function, controlling what traffic can reach it. | [optional] 
**max_instance_count** | **int** | The limit on the maximum number of function instances that may coexist at a given time. In some cases, such as rapid traffic surges, Cloud Functions may, for a short period of time, create more instances than the specified max instances limit. If your function cannot tolerate this temporary behavior, you may want to factor in a safety margin and set a lower max instances value than your function can tolerate. See the [Max Instances](https://cloud.google.com/functions/docs/max-instances) Guide for more details. | [optional] 
**max_instance_request_concurrency** | **int** | Sets the maximum number of concurrent requests that each instance can receive. Defaults to 1. | [optional] 
**min_instance_count** | **int** | The limit on the minimum number of function instances that may coexist at a given time. Function instances are kept in idle state for a short period after they finished executing the request to reduce cold start time for subsequent requests. Setting a minimum instance count will ensure that the given number of instances are kept running in idle state always. This can help with cold start times when jump in incoming request count occurs after the idle instance would have been stopped in the default case. | [optional] 
**revision** | **str** | Output only. The name of service revision. | [optional] [readonly] 
**secret_environment_variables** | [**List[SecretEnvVar]**](SecretEnvVar.md) | Secret environment variables configuration. | [optional] 
**secret_volumes** | [**List[SecretVolume]**](SecretVolume.md) | Secret volumes configuration. | [optional] 
**security_level** | **str** | Security level configure whether the function only accepts https. This configuration is only applicable to 1st Gen functions with Http trigger. By default https is optional for 1st Gen functions; 2nd Gen functions are https ONLY. | [optional] 
**service** | **str** | Output only. Name of the service associated with a Function. The format of this field is &#x60;projects/{project}/locations/{region}/services/{service}&#x60; | [optional] [readonly] 
**service_account_email** | **str** | The email of the service&#39;s service account. If empty, defaults to &#x60;{project_number}-compute@developer.gserviceaccount.com&#x60;. | [optional] 
**timeout_seconds** | **int** | The function execution timeout. Execution is considered failed and can be terminated if the function is not completed at the end of the timeout period. Defaults to 60 seconds. | [optional] 
**uri** | **str** | Output only. URI of the Service deployed. | [optional] [readonly] 
**vpc_connector** | **str** | The Serverless VPC Access connector that this cloud function can connect to. The format of this field is &#x60;projects/*/locations/*/connectors/*&#x60;. | [optional] 
**vpc_connector_egress_settings** | **str** | The egress settings for the connector, controlling what traffic is diverted through it. | [optional] 

## Example

```python
from openapi_client.models.service_config import ServiceConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceConfig from a JSON string
service_config_instance = ServiceConfig.from_json(json)
# print the JSON string representation of the object
print(ServiceConfig.to_json())

# convert the object into a dict
service_config_dict = service_config_instance.to_dict()
# create an instance of ServiceConfig from a dict
service_config_from_dict = ServiceConfig.from_dict(service_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


