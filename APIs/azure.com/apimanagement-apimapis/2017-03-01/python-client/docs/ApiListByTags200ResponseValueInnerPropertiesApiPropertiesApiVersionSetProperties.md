# ApiListByTags200ResponseValueInnerPropertiesApiPropertiesApiVersionSetProperties

Properties of an API Version Set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Name of API Version Set | 
**versioning_scheme** | **str** | An value that determines where the API Version identifer will be located in a HTTP request. | 

## Example

```python
from openapi_client.models.api_list_by_tags200_response_value_inner_properties_api_properties_api_version_set_properties import ApiListByTags200ResponseValueInnerPropertiesApiPropertiesApiVersionSetProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ApiListByTags200ResponseValueInnerPropertiesApiPropertiesApiVersionSetProperties from a JSON string
api_list_by_tags200_response_value_inner_properties_api_properties_api_version_set_properties_instance = ApiListByTags200ResponseValueInnerPropertiesApiPropertiesApiVersionSetProperties.from_json(json)
# print the JSON string representation of the object
print(ApiListByTags200ResponseValueInnerPropertiesApiPropertiesApiVersionSetProperties.to_json())

# convert the object into a dict
api_list_by_tags200_response_value_inner_properties_api_properties_api_version_set_properties_dict = api_list_by_tags200_response_value_inner_properties_api_properties_api_version_set_properties_instance.to_dict()
# create an instance of ApiListByTags200ResponseValueInnerPropertiesApiPropertiesApiVersionSetProperties from a dict
api_list_by_tags200_response_value_inner_properties_api_properties_api_version_set_properties_from_dict = ApiListByTags200ResponseValueInnerPropertiesApiPropertiesApiVersionSetProperties.from_dict(api_list_by_tags200_response_value_inner_properties_api_properties_api_version_set_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


