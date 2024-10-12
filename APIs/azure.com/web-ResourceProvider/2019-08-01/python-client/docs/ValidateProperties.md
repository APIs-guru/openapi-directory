# ValidateProperties

App properties used for validation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capacity** | **int** | Target capacity of the App Service plan (number of VMs). | [optional] 
**container_image_platform** | **str** | Platform (windows or linux) | [optional] 
**container_image_repository** | **str** | Repository name (image name) | [optional] 
**container_image_tag** | **str** | Image tag | [optional] 
**container_registry_base_url** | **str** | Base URL of the container registry | [optional] 
**container_registry_password** | **str** | Password for to access the container registry | [optional] 
**container_registry_username** | **str** | Username for to access the container registry | [optional] 
**hosting_environment** | **str** | Name of App Service Environment where app or App Service plan should be created. | [optional] 
**is_spot** | **bool** | &lt;code&gt;true&lt;/code&gt; if App Service plan is for Spot instances; otherwise, &lt;code&gt;false&lt;/code&gt;. | [optional] 
**is_xenon** | **bool** | &lt;code&gt;true&lt;/code&gt; if App Service plan is running as a windows container | [optional] 
**need_linux_workers** | **bool** | &lt;code&gt;true&lt;/code&gt; if App Service plan is for Linux workers; otherwise, &lt;code&gt;false&lt;/code&gt;. | [optional] 
**server_farm_id** | **str** | ARM resource ID of an App Service plan that would host the app. | [optional] 
**sku_name** | **str** | Name of the target SKU for the App Service plan. | [optional] 

## Example

```python
from openapi_client.models.validate_properties import ValidateProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ValidateProperties from a JSON string
validate_properties_instance = ValidateProperties.from_json(json)
# print the JSON string representation of the object
print(ValidateProperties.to_json())

# convert the object into a dict
validate_properties_dict = validate_properties_instance.to_dict()
# create an instance of ValidateProperties from a dict
validate_properties_from_dict = ValidateProperties.from_dict(validate_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


