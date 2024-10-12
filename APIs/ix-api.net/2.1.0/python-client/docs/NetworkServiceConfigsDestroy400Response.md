# NetworkServiceConfigsDestroy400Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detail** | **str** | A human-readable explanation specific to this occurrence of the problem. | [optional] 
**instance** | **str** | A URI reference that identifies the specific occurrence of the problem.  It may or may not yield further information if dereferenced. | [optional] 
**status** | **object** |  | [optional] 
**title** | **object** |  | [optional] 
**type** | **str** |  | 
**charged_until** | **date** | The date until the service is payed for. Typically &#x60;≥ decommission_at&#x60;. | [optional] 
**decommission_at** | **date** | This field denotes the first possible cancellation date of the service.  See the service &#x60;cancellation-policy&#x60; for details. | [optional] 

## Example

```python
from openapi_client.models.network_service_configs_destroy400_response import NetworkServiceConfigsDestroy400Response

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkServiceConfigsDestroy400Response from a JSON string
network_service_configs_destroy400_response_instance = NetworkServiceConfigsDestroy400Response.from_json(json)
# print the JSON string representation of the object
print(NetworkServiceConfigsDestroy400Response.to_json())

# convert the object into a dict
network_service_configs_destroy400_response_dict = network_service_configs_destroy400_response_instance.to_dict()
# create an instance of NetworkServiceConfigsDestroy400Response from a dict
network_service_configs_destroy400_response_from_dict = NetworkServiceConfigsDestroy400Response.from_dict(network_service_configs_destroy400_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


