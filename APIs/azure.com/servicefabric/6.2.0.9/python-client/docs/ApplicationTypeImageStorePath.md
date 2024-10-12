# ApplicationTypeImageStorePath

Path description for the application package in the image store specified during the prior copy operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_type_build_path** | **str** | The relative image store path to the application package. | 

## Example

```python
from openapi_client.models.application_type_image_store_path import ApplicationTypeImageStorePath

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationTypeImageStorePath from a JSON string
application_type_image_store_path_instance = ApplicationTypeImageStorePath.from_json(json)
# print the JSON string representation of the object
print(ApplicationTypeImageStorePath.to_json())

# convert the object into a dict
application_type_image_store_path_dict = application_type_image_store_path_instance.to_dict()
# create an instance of ApplicationTypeImageStorePath from a dict
application_type_image_store_path_from_dict = ApplicationTypeImageStorePath.from_dict(application_type_image_store_path_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


