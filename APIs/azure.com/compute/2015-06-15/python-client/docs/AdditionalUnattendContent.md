# AdditionalUnattendContent

Specifies additional XML formatted information that can be included in the Unattend.xml file, which is used by Windows Setup. Contents are defined by setting name, component name, and the pass in which the content is applied.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**component_name** | **str** | The component name. Currently, the only allowable value is Microsoft-Windows-Shell-Setup. | [optional] 
**content** | **str** | Specifies the XML formatted content that is added to the unattend.xml file for the specified path and component. The XML must be less than 4KB and must include the root element for the setting or feature that is being inserted. | [optional] 
**pass_name** | **str** | The pass name. Currently, the only allowable value is OobeSystem. | [optional] 
**setting_name** | **str** | Specifies the name of the setting to which the content applies. Possible values are: FirstLogonCommands and AutoLogon. | [optional] 

## Example

```python
from openapi_client.models.additional_unattend_content import AdditionalUnattendContent

# TODO update the JSON string below
json = "{}"
# create an instance of AdditionalUnattendContent from a JSON string
additional_unattend_content_instance = AdditionalUnattendContent.from_json(json)
# print the JSON string representation of the object
print(AdditionalUnattendContent.to_json())

# convert the object into a dict
additional_unattend_content_dict = additional_unattend_content_instance.to_dict()
# create an instance of AdditionalUnattendContent from a dict
additional_unattend_content_from_dict = AdditionalUnattendContent.from_dict(additional_unattend_content_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


