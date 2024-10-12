# AKSEndpointResponse

The response for an AKS Endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aad_auth_enabled** | **bool** | Whether or not AAD authentication is enabled. | [optional] 
**app_insights_enabled** | **bool** | Whether or not Application Insights is enabled. | [optional] 
**auth_enabled** | **bool** | Whether or not authentication is enabled. | [optional] 
**compute_name** | **str** | The name of the compute resource. | [optional] 
**namespace** | **str** | The Kubernetes namespace of the deployment. | [optional] 
**scoring_uri** | **str** | The Uri for sending scoring requests. | [optional] 
**swagger_uri** | **str** | The Uri for sending swagger requests. | [optional] 
**variants** | [**List[AKSServiceResponse]**](AKSServiceResponse.md) | All the variants that belongs to this endpoint. | [optional] 

## Example

```python
from openapi_client.models.aks_endpoint_response import AKSEndpointResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AKSEndpointResponse from a JSON string
aks_endpoint_response_instance = AKSEndpointResponse.from_json(json)
# print the JSON string representation of the object
print(AKSEndpointResponse.to_json())

# convert the object into a dict
aks_endpoint_response_dict = aks_endpoint_response_instance.to_dict()
# create an instance of AKSEndpointResponse from a dict
aks_endpoint_response_from_dict = AKSEndpointResponse.from_dict(aks_endpoint_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


