# ImageTemplateProperties

Describes the properties of an image template

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**build_timeout_in_minutes** | **int** | Maximum duration to wait while building the image template. Omit or specify 0 to use the default (4 hours). | [optional] 
**customize** | [**List[ImageTemplateCustomizer]**](ImageTemplateCustomizer.md) | Specifies the properties used to describe the customization steps of the image, like Image source etc | [optional] 
**distribute** | [**List[ImageTemplateDistributor]**](ImageTemplateDistributor.md) | The distribution targets where the image output needs to go to. | 
**last_run_status** | [**ImageTemplateLastRunStatus**](ImageTemplateLastRunStatus.md) |  | [optional] 
**provisioning_error** | [**ProvisioningError**](ProvisioningError.md) |  | [optional] 
**provisioning_state** | [**ProvisioningState**](ProvisioningState.md) |  | [optional] 
**source** | [**ImageTemplateSource**](ImageTemplateSource.md) |  | 
**vm_profile** | [**ImageTemplateVmProfile**](ImageTemplateVmProfile.md) |  | [optional] 

## Example

```python
from openapi_client.models.image_template_properties import ImageTemplateProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ImageTemplateProperties from a JSON string
image_template_properties_instance = ImageTemplateProperties.from_json(json)
# print the JSON string representation of the object
print(ImageTemplateProperties.to_json())

# convert the object into a dict
image_template_properties_dict = image_template_properties_instance.to_dict()
# create an instance of ImageTemplateProperties from a dict
image_template_properties_from_dict = ImageTemplateProperties.from_dict(image_template_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


