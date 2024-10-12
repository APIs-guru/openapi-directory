# AdminMappingsGet200ResponseMappingsInnerResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_proxy_request_headers** | **object** | Extra request headers to send when proxying to another host. | [optional] 
**base64_body** | **str** | The response body as a base64 encoded string (useful for binary content). Only one of body, base64Body, jsonBody or bodyFileName may be specified. | [optional] 
**body** | **str** | The response body as a string. Only one of body, base64Body, jsonBody or bodyFileName may be specified. | [optional] 
**body_file_name** | **str** | The path to the file containing the response body, relative to the configured file root. Only one of body, base64Body, jsonBody or bodyFileName may be specified. | [optional] 
**delay_distribution** | [**AdminMappingsGet200ResponseMappingsInnerResponseAllOfDelayDistribution**](AdminMappingsGet200ResponseMappingsInnerResponseAllOfDelayDistribution.md) |  | [optional] 
**fault** | **str** | The fault to apply (instead of a full, valid response). | [optional] 
**fixed_delay_milliseconds** | **int** | Number of milliseconds to delay be before sending the response. | [optional] 
**from_configured_stub** | **bool** | Read-only flag indicating false if this was the default, unmatched response. Not present otherwise. | [optional] 
**headers** | **object** | Map of response headers to send | [optional] 
**json_body** | **object** | The response body as a JSON object. Only one of body, base64Body, jsonBody or bodyFileName may be specified. | [optional] 
**proxy_base_url** | **str** | The base URL of the target to proxy matching requests to. | [optional] 
**status** | **int** | The HTTP status code to be returned | [optional] 
**status_message** | **str** | The HTTP status message to be returned | [optional] 
**transformer_parameters** | **object** | Parameters to apply to response transformers. | [optional] 
**transformers** | **List[str]** | List of names of transformers to apply to this response. | [optional] 

## Example

```python
from openapi_client.models.admin_mappings_get200_response_mappings_inner_response import AdminMappingsGet200ResponseMappingsInnerResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AdminMappingsGet200ResponseMappingsInnerResponse from a JSON string
admin_mappings_get200_response_mappings_inner_response_instance = AdminMappingsGet200ResponseMappingsInnerResponse.from_json(json)
# print the JSON string representation of the object
print(AdminMappingsGet200ResponseMappingsInnerResponse.to_json())

# convert the object into a dict
admin_mappings_get200_response_mappings_inner_response_dict = admin_mappings_get200_response_mappings_inner_response_instance.to_dict()
# create an instance of AdminMappingsGet200ResponseMappingsInnerResponse from a dict
admin_mappings_get200_response_mappings_inner_response_from_dict = AdminMappingsGet200ResponseMappingsInnerResponse.from_dict(admin_mappings_get200_response_mappings_inner_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


