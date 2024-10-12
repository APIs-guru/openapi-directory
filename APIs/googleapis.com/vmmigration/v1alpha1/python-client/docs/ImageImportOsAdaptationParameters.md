# ImageImportOsAdaptationParameters

Parameters affecting the OS adaptation process.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**generalize** | **bool** | Optional. Set to true in order to generalize the imported image. The generalization process enables co-existence of multiple VMs created from the same image. For Windows, generalizing the image removes computer-specific information such as installed drivers and the computer security identifier (SID). | [optional] 
**license_type** | **str** | Optional. Choose which type of license to apply to the imported image. | [optional] 

## Example

```python
from openapi_client.models.image_import_os_adaptation_parameters import ImageImportOsAdaptationParameters

# TODO update the JSON string below
json = "{}"
# create an instance of ImageImportOsAdaptationParameters from a JSON string
image_import_os_adaptation_parameters_instance = ImageImportOsAdaptationParameters.from_json(json)
# print the JSON string representation of the object
print(ImageImportOsAdaptationParameters.to_json())

# convert the object into a dict
image_import_os_adaptation_parameters_dict = image_import_os_adaptation_parameters_instance.to_dict()
# create an instance of ImageImportOsAdaptationParameters from a dict
image_import_os_adaptation_parameters_from_dict = ImageImportOsAdaptationParameters.from_dict(image_import_os_adaptation_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


