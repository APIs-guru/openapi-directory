# CustomTemplate

Represents a Google Tag Manager Custom Template's contents.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | GTM Account ID. | [optional] 
**container_id** | **str** | GTM Container ID. | [optional] 
**fingerprint** | **str** | The fingerprint of the GTM Custom Template as computed at storage time. This value is recomputed whenever the template is modified. | [optional] 
**gallery_reference** | [**GalleryReference**](GalleryReference.md) |  | [optional] 
**name** | **str** | Custom Template display name. | [optional] 
**path** | **str** | GTM Custom Template&#39;s API relative path. | [optional] 
**tag_manager_url** | **str** | Auto generated link to the tag manager UI | [optional] 
**template_data** | **str** | The custom template in text format. | [optional] 
**template_id** | **str** | The Custom Template ID uniquely identifies the GTM custom template. | [optional] 
**workspace_id** | **str** | GTM Workspace ID. | [optional] 

## Example

```python
from openapi_client.models.custom_template import CustomTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of CustomTemplate from a JSON string
custom_template_instance = CustomTemplate.from_json(json)
# print the JSON string representation of the object
print(CustomTemplate.to_json())

# convert the object into a dict
custom_template_dict = custom_template_instance.to_dict()
# create an instance of CustomTemplate from a dict
custom_template_from_dict = CustomTemplate.from_dict(custom_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


