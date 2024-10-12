# ApiListByTags200Response

Paged Tag list representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Total record count number across all pages. | [optional] 
**next_link** | **str** | Next page link if any. | [optional] 
**value** | [**List[ApiListByTags200ResponseValueInner]**](ApiListByTags200ResponseValueInner.md) | Page values. | [optional] 

## Example

```python
from openapi_client.models.api_list_by_tags200_response import ApiListByTags200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ApiListByTags200Response from a JSON string
api_list_by_tags200_response_instance = ApiListByTags200Response.from_json(json)
# print the JSON string representation of the object
print(ApiListByTags200Response.to_json())

# convert the object into a dict
api_list_by_tags200_response_dict = api_list_by_tags200_response_instance.to_dict()
# create an instance of ApiListByTags200Response from a dict
api_list_by_tags200_response_from_dict = ApiListByTags200Response.from_dict(api_list_by_tags200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


