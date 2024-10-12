# AddFieldsTemplateResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | **List[str]** |  | [optional] 
**new_field_ids** | **List[int]** |  | [optional] 
**status** | **str** |  | 

## Example

```python
from openapi_client.models.add_fields_template_response import AddFieldsTemplateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AddFieldsTemplateResponse from a JSON string
add_fields_template_response_instance = AddFieldsTemplateResponse.from_json(json)
# print the JSON string representation of the object
print(AddFieldsTemplateResponse.to_json())

# convert the object into a dict
add_fields_template_response_dict = add_fields_template_response_instance.to_dict()
# create an instance of AddFieldsTemplateResponse from a dict
add_fields_template_response_from_dict = AddFieldsTemplateResponse.from_dict(add_fields_template_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


