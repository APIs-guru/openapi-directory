# OperationListByTags200ResponseValueInnerPropertiesApiProperties

Api Entity Properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_version_set** | [**OperationListByTags200ResponseValueInnerPropertiesApiPropertiesApiVersionSet**](OperationListByTags200ResponseValueInnerPropertiesApiPropertiesApiVersionSet.md) |  | [optional] 
**display_name** | **str** | API name. | [optional] 
**path** | **str** | Relative URL uniquely identifying this API and all of its resource paths within the API Management service instance. It is appended to the API endpoint base URL specified during the service instance creation to form a public URL for this API. | 
**protocols** | **List[str]** | Describes on which protocols the operations in this API can be invoked. | [optional] 
**service_url** | **str** | Absolute URL of the backend service implementing this API. | [optional] 

## Example

```python
from openapi_client.models.operation_list_by_tags200_response_value_inner_properties_api_properties import OperationListByTags200ResponseValueInnerPropertiesApiProperties

# TODO update the JSON string below
json = "{}"
# create an instance of OperationListByTags200ResponseValueInnerPropertiesApiProperties from a JSON string
operation_list_by_tags200_response_value_inner_properties_api_properties_instance = OperationListByTags200ResponseValueInnerPropertiesApiProperties.from_json(json)
# print the JSON string representation of the object
print(OperationListByTags200ResponseValueInnerPropertiesApiProperties.to_json())

# convert the object into a dict
operation_list_by_tags200_response_value_inner_properties_api_properties_dict = operation_list_by_tags200_response_value_inner_properties_api_properties_instance.to_dict()
# create an instance of OperationListByTags200ResponseValueInnerPropertiesApiProperties from a dict
operation_list_by_tags200_response_value_inner_properties_api_properties_from_dict = OperationListByTags200ResponseValueInnerPropertiesApiProperties.from_dict(operation_list_by_tags200_response_value_inner_properties_api_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


