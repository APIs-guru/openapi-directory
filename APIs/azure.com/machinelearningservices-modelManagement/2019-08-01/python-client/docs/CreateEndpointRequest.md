# CreateEndpointRequest

The request to create an Endpoint in the AKS.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aad_auth_enabled** | **bool** | Whether or not AAD authentication is enabled. | [optional] 
**app_insights_enabled** | **bool** | Whether or not Application Insights is enabled. | [optional] 
**auth_enabled** | **bool** | Whether or not authentication is enabled. | [optional] 
**compute_name** | **str** | The name of the compute resource. | [optional] 
**namespace** | **str** | Kubernetes namespace for the service. | [optional] 
**variants** | [**List[AKSServiceCreateRequest]**](AKSServiceCreateRequest.md) | The service tag list. | [optional] 

## Example

```python
from openapi_client.models.create_endpoint_request import CreateEndpointRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateEndpointRequest from a JSON string
create_endpoint_request_instance = CreateEndpointRequest.from_json(json)
# print the JSON string representation of the object
print(CreateEndpointRequest.to_json())

# convert the object into a dict
create_endpoint_request_dict = create_endpoint_request_instance.to_dict()
# create an instance of CreateEndpointRequest from a dict
create_endpoint_request_from_dict = CreateEndpointRequest.from_dict(create_endpoint_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


