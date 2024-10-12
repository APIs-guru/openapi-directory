# ImageTemplateListResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The continuation token. | [optional] 
**value** | [**List[ImageTemplate]**](ImageTemplate.md) |  | [optional] 

## Example

```python
from openapi_client.models.image_template_list_result import ImageTemplateListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ImageTemplateListResult from a JSON string
image_template_list_result_instance = ImageTemplateListResult.from_json(json)
# print the JSON string representation of the object
print(ImageTemplateListResult.to_json())

# convert the object into a dict
image_template_list_result_dict = image_template_list_result_instance.to_dict()
# create an instance of ImageTemplateListResult from a dict
image_template_list_result_from_dict = ImageTemplateListResult.from_dict(image_template_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


