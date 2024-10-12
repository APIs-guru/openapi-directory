# ApiTagDescriptionGet200Response

Contract details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ApiTagDescriptionListByService200ResponseValueInnerProperties**](ApiTagDescriptionListByService200ResponseValueInnerProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type for API Management resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.api_tag_description_get200_response import ApiTagDescriptionGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ApiTagDescriptionGet200Response from a JSON string
api_tag_description_get200_response_instance = ApiTagDescriptionGet200Response.from_json(json)
# print the JSON string representation of the object
print(ApiTagDescriptionGet200Response.to_json())

# convert the object into a dict
api_tag_description_get200_response_dict = api_tag_description_get200_response_instance.to_dict()
# create an instance of ApiTagDescriptionGet200Response from a dict
api_tag_description_get200_response_from_dict = ApiTagDescriptionGet200Response.from_dict(api_tag_description_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


