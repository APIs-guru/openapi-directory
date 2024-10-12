# ApiVersionSetListByService200ResponseValueInnerProperties

Properties of an API Version Set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Name of API Version Set | 
**versioning_scheme** | **str** | An value that determines where the API Version identifer will be located in a HTTP request. | 

## Example

```python
from openapi_client.models.api_version_set_list_by_service200_response_value_inner_properties import ApiVersionSetListByService200ResponseValueInnerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ApiVersionSetListByService200ResponseValueInnerProperties from a JSON string
api_version_set_list_by_service200_response_value_inner_properties_instance = ApiVersionSetListByService200ResponseValueInnerProperties.from_json(json)
# print the JSON string representation of the object
print(ApiVersionSetListByService200ResponseValueInnerProperties.to_json())

# convert the object into a dict
api_version_set_list_by_service200_response_value_inner_properties_dict = api_version_set_list_by_service200_response_value_inner_properties_instance.to_dict()
# create an instance of ApiVersionSetListByService200ResponseValueInnerProperties from a dict
api_version_set_list_by_service200_response_value_inner_properties_from_dict = ApiVersionSetListByService200ResponseValueInnerProperties.from_dict(api_version_set_list_by_service200_response_value_inner_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


