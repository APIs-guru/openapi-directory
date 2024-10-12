# ApiVersionSetListByServiceDefaultResponse

Error Response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**ApiVersionSetListByServiceDefaultResponseError**](ApiVersionSetListByServiceDefaultResponseError.md) |  | [optional] 

## Example

```python
from openapi_client.models.api_version_set_list_by_service_default_response import ApiVersionSetListByServiceDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ApiVersionSetListByServiceDefaultResponse from a JSON string
api_version_set_list_by_service_default_response_instance = ApiVersionSetListByServiceDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(ApiVersionSetListByServiceDefaultResponse.to_json())

# convert the object into a dict
api_version_set_list_by_service_default_response_dict = api_version_set_list_by_service_default_response_instance.to_dict()
# create an instance of ApiVersionSetListByServiceDefaultResponse from a dict
api_version_set_list_by_service_default_response_from_dict = ApiVersionSetListByServiceDefaultResponse.from_dict(api_version_set_list_by_service_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


