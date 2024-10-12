# PreviewModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**css** | **str** |  | 
**data** | **object** |  | 
**footer_html** | **str** |  | [optional] 
**header_html** | **str** |  | [optional] 
**template_html** | **str** |  | 

## Example

```python
from openapi_client.models.preview_model import PreviewModel

# TODO update the JSON string below
json = "{}"
# create an instance of PreviewModel from a JSON string
preview_model_instance = PreviewModel.from_json(json)
# print the JSON string representation of the object
print(PreviewModel.to_json())

# convert the object into a dict
preview_model_dict = preview_model_instance.to_dict()
# create an instance of PreviewModel from a dict
preview_model_from_dict = PreviewModel.from_dict(preview_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


