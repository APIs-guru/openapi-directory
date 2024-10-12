# ApplicationGetHttpsEndpoint

Gets the application HTTP endpoints.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_modes** | **List[str]** | The list of access modes for the application. | [optional] 
**destination_port** | **int** | The destination port to connect to. | [optional] 
**disable_gateway_auth** | **bool** | Disable gateway authentication. | [optional] 
**location** | **str** | The location of the endpoint. | [optional] 
**public_port** | **int** | The public port to connect to. | [optional] 
**sub_domain_suffix** | **str** | The subdomain suffix of the application. | [optional] 

## Example

```python
from openapi_client.models.application_get_https_endpoint import ApplicationGetHttpsEndpoint

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGetHttpsEndpoint from a JSON string
application_get_https_endpoint_instance = ApplicationGetHttpsEndpoint.from_json(json)
# print the JSON string representation of the object
print(ApplicationGetHttpsEndpoint.to_json())

# convert the object into a dict
application_get_https_endpoint_dict = application_get_https_endpoint_instance.to_dict()
# create an instance of ApplicationGetHttpsEndpoint from a dict
application_get_https_endpoint_from_dict = ApplicationGetHttpsEndpoint.from_dict(application_get_https_endpoint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


