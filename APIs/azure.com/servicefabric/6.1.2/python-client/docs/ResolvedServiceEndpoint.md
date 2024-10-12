# ResolvedServiceEndpoint

Endpoint of a resolved service partition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | The address of the endpoint. If the endpoint has multiple listeners the address is a JSON object with one property per listener with the value as the address of that listener. | [optional] 
**kind** | [**ServiceEndpointRole**](ServiceEndpointRole.md) |  | [optional] 

## Example

```python
from openapi_client.models.resolved_service_endpoint import ResolvedServiceEndpoint

# TODO update the JSON string below
json = "{}"
# create an instance of ResolvedServiceEndpoint from a JSON string
resolved_service_endpoint_instance = ResolvedServiceEndpoint.from_json(json)
# print the JSON string representation of the object
print(ResolvedServiceEndpoint.to_json())

# convert the object into a dict
resolved_service_endpoint_dict = resolved_service_endpoint_instance.to_dict()
# create an instance of ResolvedServiceEndpoint from a dict
resolved_service_endpoint_from_dict = ResolvedServiceEndpoint.from_dict(resolved_service_endpoint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


