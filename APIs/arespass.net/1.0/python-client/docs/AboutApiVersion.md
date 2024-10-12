# AboutApiVersion


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**major_number** | **int** | This API version major number. | [optional] 
**minor_number** | **int** | This API version minor number. | [optional] 

## Example

```python
from openapi_client.models.about_api_version import AboutApiVersion

# TODO update the JSON string below
json = "{}"
# create an instance of AboutApiVersion from a JSON string
about_api_version_instance = AboutApiVersion.from_json(json)
# print the JSON string representation of the object
print(AboutApiVersion.to_json())

# convert the object into a dict
about_api_version_dict = about_api_version_instance.to_dict()
# create an instance of AboutApiVersion from a dict
about_api_version_from_dict = AboutApiVersion.from_dict(about_api_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


