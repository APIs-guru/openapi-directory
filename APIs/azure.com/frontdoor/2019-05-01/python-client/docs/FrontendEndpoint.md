# FrontendEndpoint

A frontend endpoint used for routing.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Resource name. | [optional] 
**properties** | [**FrontendEndpointProperties**](FrontendEndpointProperties.md) |  | [optional] 
**type** | **str** | Resource type. | [optional] [readonly] 
**id** | **str** | Resource ID. | [optional] 

## Example

```python
from openapi_client.models.frontend_endpoint import FrontendEndpoint

# TODO update the JSON string below
json = "{}"
# create an instance of FrontendEndpoint from a JSON string
frontend_endpoint_instance = FrontendEndpoint.from_json(json)
# print the JSON string representation of the object
print(FrontendEndpoint.to_json())

# convert the object into a dict
frontend_endpoint_dict = frontend_endpoint_instance.to_dict()
# create an instance of FrontendEndpoint from a dict
frontend_endpoint_from_dict = FrontendEndpoint.from_dict(frontend_endpoint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


