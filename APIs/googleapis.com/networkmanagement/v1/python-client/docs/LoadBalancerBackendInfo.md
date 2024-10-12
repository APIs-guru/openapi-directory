# LoadBalancerBackendInfo

For display only. Metadata associated with the load balancer backend.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backend_bucket_uri** | **str** | URI of the backend bucket this backend targets (if applicable). | [optional] 
**backend_service_uri** | **str** | URI of the backend service this backend belongs to (if applicable). | [optional] 
**health_check_firewalls_config_state** | **str** | Output only. Health check firewalls configuration state for the backend. This is a result of the static firewall analysis (verifying that health check traffic from required IP ranges to the backend is allowed or not). The backend might still be unhealthy even if these firewalls are configured. Please refer to the documentation for more information: https://cloud.google.com/load-balancing/docs/firewall-rules | [optional] [readonly] 
**health_check_uri** | **str** | URI of the health check attached to this backend (if applicable). | [optional] 
**instance_group_uri** | **str** | URI of the instance group this backend belongs to (if applicable). | [optional] 
**instance_uri** | **str** | URI of the backend instance (if applicable). Populated for instance group backends, and zonal NEG backends. | [optional] 
**name** | **str** | Display name of the backend. For example, it might be an instance name for the instance group backends, or an IP address and port for zonal network endpoint group backends. | [optional] 
**network_endpoint_group_uri** | **str** | URI of the network endpoint group this backend belongs to (if applicable). | [optional] 
**psc_google_api_target** | **str** | PSC Google API target this PSC NEG backend targets (if applicable). | [optional] 
**psc_service_attachment_uri** | **str** | URI of the PSC service attachment this PSC NEG backend targets (if applicable). | [optional] 

## Example

```python
from openapi_client.models.load_balancer_backend_info import LoadBalancerBackendInfo

# TODO update the JSON string below
json = "{}"
# create an instance of LoadBalancerBackendInfo from a JSON string
load_balancer_backend_info_instance = LoadBalancerBackendInfo.from_json(json)
# print the JSON string representation of the object
print(LoadBalancerBackendInfo.to_json())

# convert the object into a dict
load_balancer_backend_info_dict = load_balancer_backend_info_instance.to_dict()
# create an instance of LoadBalancerBackendInfo from a dict
load_balancer_backend_info_from_dict = LoadBalancerBackendInfo.from_dict(load_balancer_backend_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


