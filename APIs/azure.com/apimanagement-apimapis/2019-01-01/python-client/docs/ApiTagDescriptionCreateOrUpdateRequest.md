# ApiTagDescriptionCreateOrUpdateRequest

Parameters supplied to the Create TagDescription operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ApiTagDescriptionCreateOrUpdateRequestProperties**](ApiTagDescriptionCreateOrUpdateRequestProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.api_tag_description_create_or_update_request import ApiTagDescriptionCreateOrUpdateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApiTagDescriptionCreateOrUpdateRequest from a JSON string
api_tag_description_create_or_update_request_instance = ApiTagDescriptionCreateOrUpdateRequest.from_json(json)
# print the JSON string representation of the object
print(ApiTagDescriptionCreateOrUpdateRequest.to_json())

# convert the object into a dict
api_tag_description_create_or_update_request_dict = api_tag_description_create_or_update_request_instance.to_dict()
# create an instance of ApiTagDescriptionCreateOrUpdateRequest from a dict
api_tag_description_create_or_update_request_from_dict = ApiTagDescriptionCreateOrUpdateRequest.from_dict(api_tag_description_create_or_update_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


