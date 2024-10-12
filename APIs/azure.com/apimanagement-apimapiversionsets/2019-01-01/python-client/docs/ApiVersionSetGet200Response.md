# ApiVersionSetGet200Response

Api Version Set Contract details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ApiVersionSetListByService200ResponseValueInnerProperties**](ApiVersionSetListByService200ResponseValueInnerProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type for API Management resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.api_version_set_get200_response import ApiVersionSetGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ApiVersionSetGet200Response from a JSON string
api_version_set_get200_response_instance = ApiVersionSetGet200Response.from_json(json)
# print the JSON string representation of the object
print(ApiVersionSetGet200Response.to_json())

# convert the object into a dict
api_version_set_get200_response_dict = api_version_set_get200_response_instance.to_dict()
# create an instance of ApiVersionSetGet200Response from a dict
api_version_set_get200_response_from_dict = ApiVersionSetGet200Response.from_dict(api_version_set_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


