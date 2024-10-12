# TemplateRecordResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **bool** | True if this template is currently available for use. | [optional] 
**alias** | **str** | The user-supplied alias for this template. | [optional] 
**name** | **str** | The display name for this template. | [optional] 
**template_id** | **float** | The associated ID for this template. | [optional] 

## Example

```python
from openapi_client.models.template_record_response import TemplateRecordResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TemplateRecordResponse from a JSON string
template_record_response_instance = TemplateRecordResponse.from_json(json)
# print the JSON string representation of the object
print(TemplateRecordResponse.to_json())

# convert the object into a dict
template_record_response_dict = template_record_response_instance.to_dict()
# create an instance of TemplateRecordResponse from a dict
template_record_response_from_dict = TemplateRecordResponse.from_dict(template_record_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


