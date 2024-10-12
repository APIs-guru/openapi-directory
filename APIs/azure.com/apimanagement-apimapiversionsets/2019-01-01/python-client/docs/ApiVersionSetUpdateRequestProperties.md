# ApiVersionSetUpdateRequestProperties

Properties used to create or update an API Version Set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Name of API Version Set | [optional] 
**versioning_scheme** | **str** | An value that determines where the API Version identifer will be located in a HTTP request. | [optional] 

## Example

```python
from openapi_client.models.api_version_set_update_request_properties import ApiVersionSetUpdateRequestProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ApiVersionSetUpdateRequestProperties from a JSON string
api_version_set_update_request_properties_instance = ApiVersionSetUpdateRequestProperties.from_json(json)
# print the JSON string representation of the object
print(ApiVersionSetUpdateRequestProperties.to_json())

# convert the object into a dict
api_version_set_update_request_properties_dict = api_version_set_update_request_properties_instance.to_dict()
# create an instance of ApiVersionSetUpdateRequestProperties from a dict
api_version_set_update_request_properties_from_dict = ApiVersionSetUpdateRequestProperties.from_dict(api_version_set_update_request_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


