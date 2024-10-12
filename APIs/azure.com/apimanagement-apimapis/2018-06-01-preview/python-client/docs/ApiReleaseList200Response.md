# ApiReleaseList200Response

Paged Api Revision list representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Next page link if any. | [optional] [readonly] 
**value** | [**List[ApiReleaseList200ResponseValueInner]**](ApiReleaseList200ResponseValueInner.md) | Page values. | [optional] [readonly] 

## Example

```python
from openapi_client.models.api_release_list200_response import ApiReleaseList200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ApiReleaseList200Response from a JSON string
api_release_list200_response_instance = ApiReleaseList200Response.from_json(json)
# print the JSON string representation of the object
print(ApiReleaseList200Response.to_json())

# convert the object into a dict
api_release_list200_response_dict = api_release_list200_response_instance.to_dict()
# create an instance of ApiReleaseList200Response from a dict
api_release_list200_response_from_dict = ApiReleaseList200Response.from_dict(api_release_list200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


