# ApiTagDescriptionCreateOrUpdateRequestProperties

Parameters supplied to the Create TagDescription operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description of the Tag. | [optional] 
**external_docs_description** | **str** | Description of the external resources describing the tag. | [optional] 
**external_docs_url** | **str** | Absolute URL of external resources describing the tag. | [optional] 

## Example

```python
from openapi_client.models.api_tag_description_create_or_update_request_properties import ApiTagDescriptionCreateOrUpdateRequestProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ApiTagDescriptionCreateOrUpdateRequestProperties from a JSON string
api_tag_description_create_or_update_request_properties_instance = ApiTagDescriptionCreateOrUpdateRequestProperties.from_json(json)
# print the JSON string representation of the object
print(ApiTagDescriptionCreateOrUpdateRequestProperties.to_json())

# convert the object into a dict
api_tag_description_create_or_update_request_properties_dict = api_tag_description_create_or_update_request_properties_instance.to_dict()
# create an instance of ApiTagDescriptionCreateOrUpdateRequestProperties from a dict
api_tag_description_create_or_update_request_properties_from_dict = ApiTagDescriptionCreateOrUpdateRequestProperties.from_dict(api_tag_description_create_or_update_request_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


