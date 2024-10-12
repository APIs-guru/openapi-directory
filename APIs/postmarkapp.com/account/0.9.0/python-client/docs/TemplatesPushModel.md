# TemplatesPushModel



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_server_id** | **int** |  | [optional] 
**perform_changes** | **bool** |  | [optional] 
**source_server_id** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.templates_push_model import TemplatesPushModel

# TODO update the JSON string below
json = "{}"
# create an instance of TemplatesPushModel from a JSON string
templates_push_model_instance = TemplatesPushModel.from_json(json)
# print the JSON string representation of the object
print(TemplatesPushModel.to_json())

# convert the object into a dict
templates_push_model_dict = templates_push_model_instance.to_dict()
# create an instance of TemplatesPushModel from a dict
templates_push_model_from_dict = TemplatesPushModel.from_dict(templates_push_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


