# UserSourceInfo

Source information for a deployment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**artifact_selector** | **str** | Selector for the artifact to be used for the deployment for multi-module projects. This should be  the relative path to the target module/project. | [optional] 
**relative_path** | **str** | Relative path of the storage which stores the source | [optional] 
**type** | **str** | Type of the source uploaded | [optional] 
**version** | **str** | Version of the source | [optional] 

## Example

```python
from openapi_client.models.user_source_info import UserSourceInfo

# TODO update the JSON string below
json = "{}"
# create an instance of UserSourceInfo from a JSON string
user_source_info_instance = UserSourceInfo.from_json(json)
# print the JSON string representation of the object
print(UserSourceInfo.to_json())

# convert the object into a dict
user_source_info_dict = user_source_info_instance.to_dict()
# create an instance of UserSourceInfo from a dict
user_source_info_from_dict = UserSourceInfo.from_dict(user_source_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


