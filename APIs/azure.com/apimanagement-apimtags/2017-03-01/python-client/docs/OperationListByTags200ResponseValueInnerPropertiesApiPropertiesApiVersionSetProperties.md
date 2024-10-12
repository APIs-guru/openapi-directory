# OperationListByTags200ResponseValueInnerPropertiesApiPropertiesApiVersionSetProperties

Properties of an API Version Set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Name of API Version Set | 
**versioning_scheme** | **str** | An value that determines where the API Version identifer will be located in a HTTP request. | 

## Example

```python
from openapi_client.models.operation_list_by_tags200_response_value_inner_properties_api_properties_api_version_set_properties import OperationListByTags200ResponseValueInnerPropertiesApiPropertiesApiVersionSetProperties

# TODO update the JSON string below
json = "{}"
# create an instance of OperationListByTags200ResponseValueInnerPropertiesApiPropertiesApiVersionSetProperties from a JSON string
operation_list_by_tags200_response_value_inner_properties_api_properties_api_version_set_properties_instance = OperationListByTags200ResponseValueInnerPropertiesApiPropertiesApiVersionSetProperties.from_json(json)
# print the JSON string representation of the object
print(OperationListByTags200ResponseValueInnerPropertiesApiPropertiesApiVersionSetProperties.to_json())

# convert the object into a dict
operation_list_by_tags200_response_value_inner_properties_api_properties_api_version_set_properties_dict = operation_list_by_tags200_response_value_inner_properties_api_properties_api_version_set_properties_instance.to_dict()
# create an instance of OperationListByTags200ResponseValueInnerPropertiesApiPropertiesApiVersionSetProperties from a dict
operation_list_by_tags200_response_value_inner_properties_api_properties_api_version_set_properties_from_dict = OperationListByTags200ResponseValueInnerPropertiesApiPropertiesApiVersionSetProperties.from_dict(operation_list_by_tags200_response_value_inner_properties_api_properties_api_version_set_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


