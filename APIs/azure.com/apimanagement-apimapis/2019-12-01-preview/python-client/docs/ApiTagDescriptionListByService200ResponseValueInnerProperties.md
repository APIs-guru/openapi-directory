# ApiTagDescriptionListByService200ResponseValueInnerProperties

TagDescription contract Properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Tag name. | [optional] 
**tag_id** | **str** | Identifier of the tag in the form of /tags/{tagId} | [optional] 

## Example

```python
from openapi_client.models.api_tag_description_list_by_service200_response_value_inner_properties import ApiTagDescriptionListByService200ResponseValueInnerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ApiTagDescriptionListByService200ResponseValueInnerProperties from a JSON string
api_tag_description_list_by_service200_response_value_inner_properties_instance = ApiTagDescriptionListByService200ResponseValueInnerProperties.from_json(json)
# print the JSON string representation of the object
print(ApiTagDescriptionListByService200ResponseValueInnerProperties.to_json())

# convert the object into a dict
api_tag_description_list_by_service200_response_value_inner_properties_dict = api_tag_description_list_by_service200_response_value_inner_properties_instance.to_dict()
# create an instance of ApiTagDescriptionListByService200ResponseValueInnerProperties from a dict
api_tag_description_list_by_service200_response_value_inner_properties_from_dict = ApiTagDescriptionListByService200ResponseValueInnerProperties.from_dict(api_tag_description_list_by_service200_response_value_inner_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


