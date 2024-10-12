# ACIServiceResponse

The response for an ACI service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_insights_enabled** | **bool** | Whether or not Application Insights is enabled. | [optional] 
**auth_enabled** | **bool** | Whether or not authentication is enabled on the service. | [optional] 
**cname** | **str** | The CName for the service. | [optional] 
**container_resource_requirements** | [**ContainerResourceRequirements**](ContainerResourceRequirements.md) |  | [optional] 
**data_collection** | [**ModelDataCollection**](ModelDataCollection.md) |  | [optional] 
**environment** | [**ModelEnvironmentDefinition**](ModelEnvironmentDefinition.md) |  | [optional] 
**image_details** | [**DockerImageResponse**](DockerImageResponse.md) |  | [optional] 
**image_id** | **str** | The Id of the Image. | [optional] 
**location** | **str** | The location of the service. | [optional] 
**model_config_map** | **Dict[str, object]** | Details on the models and configurations. | [optional] 
**models** | [**List[Model]**](Model.md) | The list of models. | [optional] 
**public_fqdn** | **str** | The public Fqdn for the service. | [optional] 
**public_ip** | **str** | The public IP address for the service. | [optional] 
**scoring_uri** | **str** | The Uri for sending scoring requests. | [optional] 
**ssl_certificate** | **str** | The SSL certificate to use if SSL is enabled. | [optional] 
**ssl_enabled** | **bool** | Whether or not SSL is enabled. | [optional] 
**ssl_key** | **str** | The SSL key for the certificate. | [optional] 
**swagger_uri** | **str** | The Uri for sending swagger requests. | [optional] 

## Example

```python
from openapi_client.models.aci_service_response import ACIServiceResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ACIServiceResponse from a JSON string
aci_service_response_instance = ACIServiceResponse.from_json(json)
# print the JSON string representation of the object
print(ACIServiceResponse.to_json())

# convert the object into a dict
aci_service_response_dict = aci_service_response_instance.to_dict()
# create an instance of ACIServiceResponse from a dict
aci_service_response_from_dict = ACIServiceResponse.from_dict(aci_service_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


