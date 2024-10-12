# ResolveServiceResponse

The response message for LookupService.ResolveService.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**service** | [**Service**](Service.md) |  | [optional] 

## Example

```python
from openapi_client.models.resolve_service_response import ResolveServiceResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ResolveServiceResponse from a JSON string
resolve_service_response_instance = ResolveServiceResponse.from_json(json)
# print the JSON string representation of the object
print(ResolveServiceResponse.to_json())

# convert the object into a dict
resolve_service_response_dict = resolve_service_response_instance.to_dict()
# create an instance of ResolveServiceResponse from a dict
resolve_service_response_from_dict = ResolveServiceResponse.from_dict(resolve_service_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


