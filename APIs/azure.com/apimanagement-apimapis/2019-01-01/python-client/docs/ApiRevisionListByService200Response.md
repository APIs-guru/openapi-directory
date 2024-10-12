# ApiRevisionListByService200Response

Paged Api Revision list representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Next page link if any. | [optional] [readonly] 
**value** | [**List[ApiRevisionListByService200ResponseValueInner]**](ApiRevisionListByService200ResponseValueInner.md) | Page values. | [optional] [readonly] 

## Example

```python
from openapi_client.models.api_revision_list_by_service200_response import ApiRevisionListByService200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ApiRevisionListByService200Response from a JSON string
api_revision_list_by_service200_response_instance = ApiRevisionListByService200Response.from_json(json)
# print the JSON string representation of the object
print(ApiRevisionListByService200Response.to_json())

# convert the object into a dict
api_revision_list_by_service200_response_dict = api_revision_list_by_service200_response_instance.to_dict()
# create an instance of ApiRevisionListByService200Response from a dict
api_revision_list_by_service200_response_from_dict = ApiRevisionListByService200Response.from_dict(api_revision_list_by_service200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


