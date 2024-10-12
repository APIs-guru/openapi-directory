# ApplicationTypeImageStoreVersion

A version description for the application type

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_type_version** | **str** | The version of the application type as defined in the application manifest. | 

## Example

```python
from openapi_client.models.application_type_image_store_version import ApplicationTypeImageStoreVersion

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationTypeImageStoreVersion from a JSON string
application_type_image_store_version_instance = ApplicationTypeImageStoreVersion.from_json(json)
# print the JSON string representation of the object
print(ApplicationTypeImageStoreVersion.to_json())

# convert the object into a dict
application_type_image_store_version_dict = application_type_image_store_version_instance.to_dict()
# create an instance of ApplicationTypeImageStoreVersion from a dict
application_type_image_store_version_from_dict = ApplicationTypeImageStoreVersion.from_dict(application_type_image_store_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


