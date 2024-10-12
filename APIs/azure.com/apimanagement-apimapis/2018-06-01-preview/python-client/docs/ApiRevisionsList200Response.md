# ApiRevisionsList200Response

Paged Api Revision list representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Next page link if any. | [optional] [readonly] 
**value** | [**List[ApiRevisionsList200ResponseValueInner]**](ApiRevisionsList200ResponseValueInner.md) | Page values. | [optional] [readonly] 

## Example

```python
from openapi_client.models.api_revisions_list200_response import ApiRevisionsList200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ApiRevisionsList200Response from a JSON string
api_revisions_list200_response_instance = ApiRevisionsList200Response.from_json(json)
# print the JSON string representation of the object
print(ApiRevisionsList200Response.to_json())

# convert the object into a dict
api_revisions_list200_response_dict = api_revisions_list200_response_instance.to_dict()
# create an instance of ApiRevisionsList200Response from a dict
api_revisions_list200_response_from_dict = ApiRevisionsList200Response.from_dict(api_revisions_list200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


