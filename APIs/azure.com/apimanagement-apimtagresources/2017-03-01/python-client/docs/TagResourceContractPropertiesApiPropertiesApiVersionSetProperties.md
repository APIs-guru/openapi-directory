# TagResourceContractPropertiesApiPropertiesApiVersionSetProperties

Properties of an API Version Set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Name of API Version Set | 
**versioning_scheme** | **str** | An value that determines where the API Version identifer will be located in a HTTP request. | 

## Example

```python
from openapi_client.models.tag_resource_contract_properties_api_properties_api_version_set_properties import TagResourceContractPropertiesApiPropertiesApiVersionSetProperties

# TODO update the JSON string below
json = "{}"
# create an instance of TagResourceContractPropertiesApiPropertiesApiVersionSetProperties from a JSON string
tag_resource_contract_properties_api_properties_api_version_set_properties_instance = TagResourceContractPropertiesApiPropertiesApiVersionSetProperties.from_json(json)
# print the JSON string representation of the object
print(TagResourceContractPropertiesApiPropertiesApiVersionSetProperties.to_json())

# convert the object into a dict
tag_resource_contract_properties_api_properties_api_version_set_properties_dict = tag_resource_contract_properties_api_properties_api_version_set_properties_instance.to_dict()
# create an instance of TagResourceContractPropertiesApiPropertiesApiVersionSetProperties from a dict
tag_resource_contract_properties_api_properties_api_version_set_properties_from_dict = TagResourceContractPropertiesApiPropertiesApiVersionSetProperties.from_dict(tag_resource_contract_properties_api_properties_api_version_set_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


