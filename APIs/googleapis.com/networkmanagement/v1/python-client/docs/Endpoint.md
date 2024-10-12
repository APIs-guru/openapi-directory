# Endpoint

Source or destination of the Connectivity Test.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_engine_version** | [**AppEngineVersionEndpoint**](AppEngineVersionEndpoint.md) |  | [optional] 
**cloud_function** | [**CloudFunctionEndpoint**](CloudFunctionEndpoint.md) |  | [optional] 
**cloud_run_revision** | [**CloudRunRevisionEndpoint**](CloudRunRevisionEndpoint.md) |  | [optional] 
**cloud_sql_instance** | **str** | A [Cloud SQL](https://cloud.google.com/sql) instance URI. | [optional] 
**forwarding_rule** | **str** | A forwarding rule and its corresponding IP address represent the frontend configuration of a Google Cloud load balancer. Forwarding rules are also used for protocol forwarding, Private Service Connect and other network services to provide forwarding information in the control plane. Format: projects/{project}/global/forwardingRules/{id} or projects/{project}/regions/{region}/forwardingRules/{id} | [optional] 
**forwarding_rule_target** | **str** | Output only. Specifies the type of the target of the forwarding rule. | [optional] [readonly] 
**gke_master_cluster** | **str** | A cluster URI for [Google Kubernetes Engine master](https://cloud.google.com/kubernetes-engine/docs/concepts/cluster-architecture). | [optional] 
**instance** | **str** | A Compute Engine instance URI. | [optional] 
**ip_address** | **str** | The IP address of the endpoint, which can be an external or internal IP. | [optional] 
**load_balancer_id** | **str** | Output only. ID of the load balancer the forwarding rule points to. Empty for forwarding rules not related to load balancers. | [optional] [readonly] 
**load_balancer_type** | **str** | Output only. Type of the load balancer the forwarding rule points to. | [optional] [readonly] 
**network** | **str** | A Compute Engine network URI. | [optional] 
**network_type** | **str** | Type of the network where the endpoint is located. Applicable only to source endpoint, as destination network type can be inferred from the source. | [optional] 
**port** | **int** | The IP protocol port of the endpoint. Only applicable when protocol is TCP or UDP. | [optional] 
**project_id** | **str** | Project ID where the endpoint is located. The Project ID can be derived from the URI if you provide a VM instance or network URI. The following are two cases where you must provide the project ID: 1. Only the IP address is specified, and the IP address is within a Google Cloud project. 2. When you are using Shared VPC and the IP address that you provide is from the service project. In this case, the network that the IP address resides in is defined in the host project. | [optional] 

## Example

```python
from openapi_client.models.endpoint import Endpoint

# TODO update the JSON string below
json = "{}"
# create an instance of Endpoint from a JSON string
endpoint_instance = Endpoint.from_json(json)
# print the JSON string representation of the object
print(Endpoint.to_json())

# convert the object into a dict
endpoint_dict = endpoint_instance.to_dict()
# create an instance of Endpoint from a dict
endpoint_from_dict = Endpoint.from_dict(endpoint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


