# DisableServiceResponse

Response message for the `DisableService` method. This response message is assigned to the `response` field of the returned Operation when that operation is done.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**service** | [**GoogleApiServiceusageV1Service**](GoogleApiServiceusageV1Service.md) |  | [optional] 

## Example

```python
from openapi_client.models.disable_service_response import DisableServiceResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DisableServiceResponse from a JSON string
disable_service_response_instance = DisableServiceResponse.from_json(json)
# print the JSON string representation of the object
print(DisableServiceResponse.to_json())

# convert the object into a dict
disable_service_response_dict = disable_service_response_instance.to_dict()
# create an instance of DisableServiceResponse from a dict
disable_service_response_from_dict = DisableServiceResponse.from_dict(disable_service_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


