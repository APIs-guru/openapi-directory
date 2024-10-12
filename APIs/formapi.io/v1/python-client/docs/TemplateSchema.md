# TemplateSchema


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | **str** |  | [optional] 
**additional_properties** | **bool** |  | [optional] 
**definitions** | **object** |  | [optional] 
**description** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**properties** | **object** |  | [optional] 
**required** | **List[object]** |  | [optional] 
**title** | **str** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.template_schema import TemplateSchema

# TODO update the JSON string below
json = "{}"
# create an instance of TemplateSchema from a JSON string
template_schema_instance = TemplateSchema.from_json(json)
# print the JSON string representation of the object
print(TemplateSchema.to_json())

# convert the object into a dict
template_schema_dict = template_schema_instance.to_dict()
# create an instance of TemplateSchema from a dict
template_schema_from_dict = TemplateSchema.from_dict(template_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


