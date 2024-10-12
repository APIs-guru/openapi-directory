# CreateOrUpdateTemplateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**components** | **List[object]** |  | 
**css** | **str** |  | 
**footer_html** | **str** |  | [optional] 
**format** | [**Format**](Format.md) |  | 
**header_html** | **str** |  | [optional] 
**margin** | [**Margin**](Margin.md) |  | [optional] 
**name** | **str** |  | 
**orientation** | [**Orientation**](Orientation.md) |  | 
**preview_payload** | **object** |  | 
**template_html** | **str** |  | 

## Example

```python
from openapi_client.models.create_or_update_template_request import CreateOrUpdateTemplateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateOrUpdateTemplateRequest from a JSON string
create_or_update_template_request_instance = CreateOrUpdateTemplateRequest.from_json(json)
# print the JSON string representation of the object
print(CreateOrUpdateTemplateRequest.to_json())

# convert the object into a dict
create_or_update_template_request_dict = create_or_update_template_request_instance.to_dict()
# create an instance of CreateOrUpdateTemplateRequest from a dict
create_or_update_template_request_from_dict = CreateOrUpdateTemplateRequest.from_dict(create_or_update_template_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


