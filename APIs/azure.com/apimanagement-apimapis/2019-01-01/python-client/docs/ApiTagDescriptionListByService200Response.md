# ApiTagDescriptionListByService200Response

Paged TagDescription list representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Next page link if any. | [optional] 
**value** | [**List[ApiTagDescriptionListByService200ResponseValueInner]**](ApiTagDescriptionListByService200ResponseValueInner.md) | Page values. | [optional] 

## Example

```python
from openapi_client.models.api_tag_description_list_by_service200_response import ApiTagDescriptionListByService200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ApiTagDescriptionListByService200Response from a JSON string
api_tag_description_list_by_service200_response_instance = ApiTagDescriptionListByService200Response.from_json(json)
# print the JSON string representation of the object
print(ApiTagDescriptionListByService200Response.to_json())

# convert the object into a dict
api_tag_description_list_by_service200_response_dict = api_tag_description_list_by_service200_response_instance.to_dict()
# create an instance of ApiTagDescriptionListByService200Response from a dict
api_tag_description_list_by_service200_response_from_dict = ApiTagDescriptionListByService200Response.from_dict(api_tag_description_list_by_service200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


