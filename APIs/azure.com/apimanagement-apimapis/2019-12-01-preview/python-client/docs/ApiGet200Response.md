# ApiGet200Response

Api details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ApiListByService200ResponseValueInnerProperties**](ApiListByService200ResponseValueInnerProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type for API Management resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.api_get200_response import ApiGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ApiGet200Response from a JSON string
api_get200_response_instance = ApiGet200Response.from_json(json)
# print the JSON string representation of the object
print(ApiGet200Response.to_json())

# convert the object into a dict
api_get200_response_dict = api_get200_response_instance.to_dict()
# create an instance of ApiGet200Response from a dict
api_get200_response_from_dict = ApiGet200Response.from_dict(api_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


