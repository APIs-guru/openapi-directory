# Backend

Backend address of a frontDoor load balancer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | Location of the backend (IP address or FQDN) | [optional] 
**backend_host_header** | **str** | The value to use as the host header sent to the backend. If blank or unspecified, this defaults to the incoming host. | [optional] 
**enabled_state** | **str** | Whether to enable use of this backend. Permitted values are &#39;Enabled&#39; or &#39;Disabled&#39; | [optional] 
**http_port** | **int** | The HTTP TCP port number. Must be between 1 and 65535. | [optional] 
**https_port** | **int** | The HTTPS TCP port number. Must be between 1 and 65535. | [optional] 
**location** | **str** | Region of the backend if it is in Azure. Mandatory field if backend is &#39;Private&#39; | [optional] 
**priority** | **int** | Priority to use for load balancing. Higher priorities will not be used for load balancing if any lower priority backend is healthy. | [optional] 
**private_link_id** | **str** | If this backend is private, provide the private link resource Id. Populating this optional field indicates that this backend is &#39;Private&#39; | [optional] 
**weight** | **int** | Weight of this endpoint for load balancing purposes. | [optional] 

## Example

```python
from openapi_client.models.backend import Backend

# TODO update the JSON string below
json = "{}"
# create an instance of Backend from a JSON string
backend_instance = Backend.from_json(json)
# print the JSON string representation of the object
print(Backend.to_json())

# convert the object into a dict
backend_dict = backend_instance.to_dict()
# create an instance of Backend from a dict
backend_from_dict = Backend.from_dict(backend_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


