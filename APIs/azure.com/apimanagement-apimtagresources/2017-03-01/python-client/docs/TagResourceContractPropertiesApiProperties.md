# TagResourceContractPropertiesApiProperties

Api Entity Properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_version_set** | [**TagResourceContractPropertiesApiPropertiesApiVersionSet**](TagResourceContractPropertiesApiPropertiesApiVersionSet.md) |  | [optional] 
**display_name** | **str** | API name. | [optional] 
**path** | **str** | Relative URL uniquely identifying this API and all of its resource paths within the API Management service instance. It is appended to the API endpoint base URL specified during the service instance creation to form a public URL for this API. | 
**protocols** | **List[str]** | Describes on which protocols the operations in this API can be invoked. | [optional] 
**service_url** | **str** | Absolute URL of the backend service implementing this API. | [optional] 

## Example

```python
from openapi_client.models.tag_resource_contract_properties_api_properties import TagResourceContractPropertiesApiProperties

# TODO update the JSON string below
json = "{}"
# create an instance of TagResourceContractPropertiesApiProperties from a JSON string
tag_resource_contract_properties_api_properties_instance = TagResourceContractPropertiesApiProperties.from_json(json)
# print the JSON string representation of the object
print(TagResourceContractPropertiesApiProperties.to_json())

# convert the object into a dict
tag_resource_contract_properties_api_properties_dict = tag_resource_contract_properties_api_properties_instance.to_dict()
# create an instance of TagResourceContractPropertiesApiProperties from a dict
tag_resource_contract_properties_api_properties_from_dict = TagResourceContractPropertiesApiProperties.from_dict(tag_resource_contract_properties_api_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


