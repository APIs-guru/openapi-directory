# ApiResourceGeneralInformation

General information about the API

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The API description | [optional] 
**display_name** | **str** | Display name | [optional] 
**icon_url** | **str** | The icon URL | [optional] 
**release_tag** | **str** | Release tag | [optional] 
**terms_of_use_url** | **str** | URL to the Terms of Use | [optional] 

## Example

```python
from openapi_client.models.api_resource_general_information import ApiResourceGeneralInformation

# TODO update the JSON string below
json = "{}"
# create an instance of ApiResourceGeneralInformation from a JSON string
api_resource_general_information_instance = ApiResourceGeneralInformation.from_json(json)
# print the JSON string representation of the object
print(ApiResourceGeneralInformation.to_json())

# convert the object into a dict
api_resource_general_information_dict = api_resource_general_information_instance.to_dict()
# create an instance of ApiResourceGeneralInformation from a dict
api_resource_general_information_from_dict = ApiResourceGeneralInformation.from_dict(api_resource_general_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


