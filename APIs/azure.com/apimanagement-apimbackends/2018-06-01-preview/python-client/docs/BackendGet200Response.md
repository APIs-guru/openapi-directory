# BackendGet200Response

Backend details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**BackendListByService200ResponseValueInnerProperties**](BackendListByService200ResponseValueInnerProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type for API Management resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.backend_get200_response import BackendGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of BackendGet200Response from a JSON string
backend_get200_response_instance = BackendGet200Response.from_json(json)
# print the JSON string representation of the object
print(BackendGet200Response.to_json())

# convert the object into a dict
backend_get200_response_dict = backend_get200_response_instance.to_dict()
# create an instance of BackendGet200Response from a dict
backend_get200_response_from_dict = BackendGet200Response.from_dict(backend_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


