# ApiVersionSetListByService200Response

Paged Api Version Set list representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Next page link if any. | [optional] 
**value** | [**List[ApiVersionSetListByService200ResponseValueInner]**](ApiVersionSetListByService200ResponseValueInner.md) | Page values. | [optional] 

## Example

```python
from openapi_client.models.api_version_set_list_by_service200_response import ApiVersionSetListByService200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ApiVersionSetListByService200Response from a JSON string
api_version_set_list_by_service200_response_instance = ApiVersionSetListByService200Response.from_json(json)
# print the JSON string representation of the object
print(ApiVersionSetListByService200Response.to_json())

# convert the object into a dict
api_version_set_list_by_service200_response_dict = api_version_set_list_by_service200_response_instance.to_dict()
# create an instance of ApiVersionSetListByService200Response from a dict
api_version_set_list_by_service200_response_from_dict = ApiVersionSetListByService200Response.from_dict(api_version_set_list_by_service200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


