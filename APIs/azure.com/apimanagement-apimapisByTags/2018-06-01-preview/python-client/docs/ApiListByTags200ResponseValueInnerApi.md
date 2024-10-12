# ApiListByTags200ResponseValueInnerApi

API contract properties for the Tag Resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | API identifier in the form /apis/{apiId}. | [optional] 
**name** | **str** | API name. | [optional] 
**path** | **str** | Relative URL uniquely identifying this API and all of its resource paths within the API Management service instance. It is appended to the API endpoint base URL specified during the service instance creation to form a public URL for this API. | [optional] 
**protocols** | **List[str]** | Describes on which protocols the operations in this API can be invoked. | [optional] 
**service_url** | **str** | Absolute URL of the backend service implementing this API. | [optional] 

## Example

```python
from openapi_client.models.api_list_by_tags200_response_value_inner_api import ApiListByTags200ResponseValueInnerApi

# TODO update the JSON string below
json = "{}"
# create an instance of ApiListByTags200ResponseValueInnerApi from a JSON string
api_list_by_tags200_response_value_inner_api_instance = ApiListByTags200ResponseValueInnerApi.from_json(json)
# print the JSON string representation of the object
print(ApiListByTags200ResponseValueInnerApi.to_json())

# convert the object into a dict
api_list_by_tags200_response_value_inner_api_dict = api_list_by_tags200_response_value_inner_api_instance.to_dict()
# create an instance of ApiListByTags200ResponseValueInnerApi from a dict
api_list_by_tags200_response_value_inner_api_from_dict = ApiListByTags200ResponseValueInnerApi.from_dict(api_list_by_tags200_response_value_inner_api_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


