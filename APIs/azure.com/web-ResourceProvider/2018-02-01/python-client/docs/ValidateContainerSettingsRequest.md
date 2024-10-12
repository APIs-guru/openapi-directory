# ValidateContainerSettingsRequest

Container settings validation request context

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_url** | **str** | Base URL of the container registry | [optional] 
**password** | **str** | Password for to access the container registry | [optional] 
**platform** | **str** | Platform (windows or linux) | [optional] 
**repository** | **str** | Repository name (image name) | [optional] 
**tag** | **str** | Image tag | [optional] 
**username** | **str** | Username for to access the container registry | [optional] 

## Example

```python
from openapi_client.models.validate_container_settings_request import ValidateContainerSettingsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ValidateContainerSettingsRequest from a JSON string
validate_container_settings_request_instance = ValidateContainerSettingsRequest.from_json(json)
# print the JSON string representation of the object
print(ValidateContainerSettingsRequest.to_json())

# convert the object into a dict
validate_container_settings_request_dict = validate_container_settings_request_instance.to_dict()
# create an instance of ValidateContainerSettingsRequest from a dict
validate_container_settings_request_from_dict = ValidateContainerSettingsRequest.from_dict(validate_container_settings_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


