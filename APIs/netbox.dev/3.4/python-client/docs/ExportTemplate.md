# ExportTemplate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**as_attachment** | **bool** | Download file as attachment | [optional] 
**content_types** | **List[str]** |  | 
**created** | **datetime** |  | [optional] [readonly] 
**description** | **str** |  | [optional] 
**display** | **str** |  | [optional] [readonly] 
**file_extension** | **str** | Extension to append to the rendered filename | [optional] 
**id** | **int** |  | [optional] [readonly] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**mime_type** | **str** | Defaults to &lt;code&gt;text/plain&lt;/code&gt; | [optional] 
**name** | **str** |  | 
**template_code** | **str** | Jinja2 template code. The list of objects being exported is passed as a context variable named &lt;code&gt;queryset&lt;/code&gt;. | 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.export_template import ExportTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of ExportTemplate from a JSON string
export_template_instance = ExportTemplate.from_json(json)
# print the JSON string representation of the object
print(ExportTemplate.to_json())

# convert the object into a dict
export_template_dict = export_template_instance.to_dict()
# create an instance of ExportTemplate from a dict
export_template_from_dict = ExportTemplate.from_dict(export_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


