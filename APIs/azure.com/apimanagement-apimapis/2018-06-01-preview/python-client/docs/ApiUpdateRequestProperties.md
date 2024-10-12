# ApiUpdateRequestProperties

API update contract properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | API name. | [optional] 
**path** | **str** | Relative URL uniquely identifying this API and all of its resource paths within the API Management service instance. It is appended to the API endpoint base URL specified during the service instance creation to form a public URL for this API. | [optional] 
**protocols** | **List[str]** | Describes on which protocols the operations in this API can be invoked. | [optional] 
**service_url** | **str** | Absolute URL of the backend service implementing this API. | [optional] 

## Example

```python
from openapi_client.models.api_update_request_properties import ApiUpdateRequestProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ApiUpdateRequestProperties from a JSON string
api_update_request_properties_instance = ApiUpdateRequestProperties.from_json(json)
# print the JSON string representation of the object
print(ApiUpdateRequestProperties.to_json())

# convert the object into a dict
api_update_request_properties_dict = api_update_request_properties_instance.to_dict()
# create an instance of ApiUpdateRequestProperties from a dict
api_update_request_properties_from_dict = ApiUpdateRequestProperties.from_dict(api_update_request_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


