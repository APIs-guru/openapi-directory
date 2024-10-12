# ApiListByService200ResponseValueInnerProperties

Api Entity Properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_version_set** | [**ApiListByService200ResponseValueInnerPropertiesApiVersionSet**](ApiListByService200ResponseValueInnerPropertiesApiVersionSet.md) |  | [optional] 
**display_name** | **str** | API name. | [optional] 
**path** | **str** | Relative URL uniquely identifying this API and all of its resource paths within the API Management service instance. It is appended to the API endpoint base URL specified during the service instance creation to form a public URL for this API. | 
**protocols** | **List[str]** | Describes on which protocols the operations in this API can be invoked. | [optional] 
**service_url** | **str** | Absolute URL of the backend service implementing this API. | [optional] 

## Example

```python
from openapi_client.models.api_list_by_service200_response_value_inner_properties import ApiListByService200ResponseValueInnerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ApiListByService200ResponseValueInnerProperties from a JSON string
api_list_by_service200_response_value_inner_properties_instance = ApiListByService200ResponseValueInnerProperties.from_json(json)
# print the JSON string representation of the object
print(ApiListByService200ResponseValueInnerProperties.to_json())

# convert the object into a dict
api_list_by_service200_response_value_inner_properties_dict = api_list_by_service200_response_value_inner_properties_instance.to_dict()
# create an instance of ApiListByService200ResponseValueInnerProperties from a dict
api_list_by_service200_response_value_inner_properties_from_dict = ApiListByService200ResponseValueInnerProperties.from_dict(api_list_by_service200_response_value_inner_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


