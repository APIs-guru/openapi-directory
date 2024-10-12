# EndpointDetail

Current TCP connectivity information from the App Service Environment to a single endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ip_address** | **str** | An IP Address that Domain Name currently resolves to. | [optional] 
**is_accessable** | **bool** | Whether it is possible to create a TCP connection from the App Service Environment to this IpAddress at this Port. | [optional] 
**latency** | **float** | The time in milliseconds it takes for a TCP connection to be created from the App Service Environment to this IpAddress at this Port. | [optional] 
**port** | **int** | The port an endpoint is connected to. | [optional] 

## Example

```python
from openapi_client.models.endpoint_detail import EndpointDetail

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointDetail from a JSON string
endpoint_detail_instance = EndpointDetail.from_json(json)
# print the JSON string representation of the object
print(EndpointDetail.to_json())

# convert the object into a dict
endpoint_detail_dict = endpoint_detail_instance.to_dict()
# create an instance of EndpointDetail from a dict
endpoint_detail_from_dict = EndpointDetail.from_dict(endpoint_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


