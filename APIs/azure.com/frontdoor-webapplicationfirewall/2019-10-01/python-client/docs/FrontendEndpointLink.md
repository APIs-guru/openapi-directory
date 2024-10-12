# FrontendEndpointLink

Defines the Resource ID for a Frontend Endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Resource ID. | [optional] 

## Example

```python
from openapi_client.models.frontend_endpoint_link import FrontendEndpointLink

# TODO update the JSON string below
json = "{}"
# create an instance of FrontendEndpointLink from a JSON string
frontend_endpoint_link_instance = FrontendEndpointLink.from_json(json)
# print the JSON string representation of the object
print(FrontendEndpointLink.to_json())

# convert the object into a dict
frontend_endpoint_link_dict = frontend_endpoint_link_instance.to_dict()
# create an instance of FrontendEndpointLink from a dict
frontend_endpoint_link_from_dict = FrontendEndpointLink.from_dict(frontend_endpoint_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


