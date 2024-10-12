# ApiListByService200Response

Paged Api list representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Next page link if any. | [optional] [readonly] 
**value** | [**List[ApiListByService200ResponseValueInner]**](ApiListByService200ResponseValueInner.md) | Page values. | [optional] [readonly] 

## Example

```python
from openapi_client.models.api_list_by_service200_response import ApiListByService200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ApiListByService200Response from a JSON string
api_list_by_service200_response_instance = ApiListByService200Response.from_json(json)
# print the JSON string representation of the object
print(ApiListByService200Response.to_json())

# convert the object into a dict
api_list_by_service200_response_dict = api_list_by_service200_response_instance.to_dict()
# create an instance of ApiListByService200Response from a dict
api_list_by_service200_response_from_dict = ApiListByService200Response.from_dict(api_list_by_service200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


