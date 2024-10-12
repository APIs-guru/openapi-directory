# ApiListByService200ResponseValueInnerPropertiesApiVersionSet

An API Version Set contains the common configuration for a set of API Versions relating 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description of API Version Set. | [optional] 
**id** | **str** | Identifier for existing API Version Set. Omit this value to create a new Version Set. | [optional] 
**name** | **str** | The display Name of the API Version Set. | [optional] 
**version_header_name** | **str** | Name of HTTP header parameter that indicates the API Version if versioningScheme is set to &#x60;header&#x60;. | [optional] 
**version_query_name** | **str** | Name of query parameter that indicates the API Version if versioningScheme is set to &#x60;query&#x60;. | [optional] 
**versioning_scheme** | **str** | An value that determines where the API Version identifer will be located in a HTTP request. | [optional] 

## Example

```python
from openapi_client.models.api_list_by_service200_response_value_inner_properties_api_version_set import ApiListByService200ResponseValueInnerPropertiesApiVersionSet

# TODO update the JSON string below
json = "{}"
# create an instance of ApiListByService200ResponseValueInnerPropertiesApiVersionSet from a JSON string
api_list_by_service200_response_value_inner_properties_api_version_set_instance = ApiListByService200ResponseValueInnerPropertiesApiVersionSet.from_json(json)
# print the JSON string representation of the object
print(ApiListByService200ResponseValueInnerPropertiesApiVersionSet.to_json())

# convert the object into a dict
api_list_by_service200_response_value_inner_properties_api_version_set_dict = api_list_by_service200_response_value_inner_properties_api_version_set_instance.to_dict()
# create an instance of ApiListByService200ResponseValueInnerPropertiesApiVersionSet from a dict
api_list_by_service200_response_value_inner_properties_api_version_set_from_dict = ApiListByService200ResponseValueInnerPropertiesApiVersionSet.from_dict(api_list_by_service200_response_value_inner_properties_api_version_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


