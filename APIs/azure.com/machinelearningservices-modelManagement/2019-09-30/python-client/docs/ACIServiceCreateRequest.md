# ACIServiceCreateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_insights_enabled** | **bool** | Whether or not Application Insights is enabled. | [optional] [default to False]
**auth_enabled** | **bool** | Whether or not authentication is enabled on the service. | [optional] [default to False]
**cname** | **str** | The CName for the service. | [optional] 
**container_resource_requirements** | [**ContainerResourceRequirements**](ContainerResourceRequirements.md) |  | [optional] 
**data_collection** | [**ModelDataCollection**](ModelDataCollection.md) |  | [optional] 
**dns_name_label** | **str** | The Dns label for the service. | [optional] 
**ssl_certificate** | **str** | The SSL certificate to use if SSL is enabled. | [optional] 
**ssl_enabled** | **bool** | Whether or not SSL is enabled. | [optional] [default to False]
**ssl_key** | **str** | The SSL key for the certificate. | [optional] 

## Example

```python
from openapi_client.models.aci_service_create_request import ACIServiceCreateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ACIServiceCreateRequest from a JSON string
aci_service_create_request_instance = ACIServiceCreateRequest.from_json(json)
# print the JSON string representation of the object
print(ACIServiceCreateRequest.to_json())

# convert the object into a dict
aci_service_create_request_dict = aci_service_create_request_instance.to_dict()
# create an instance of ACIServiceCreateRequest from a dict
aci_service_create_request_from_dict = ACIServiceCreateRequest.from_dict(aci_service_create_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


