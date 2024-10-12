# ExportTemplateRequest

Export resource group template request parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**options** | **str** | The export template options. A CSV-formatted list containing zero or more of the following: &#39;IncludeParameterDefaultValue&#39;, &#39;IncludeComments&#39;, &#39;SkipResourceNameParameterization&#39;, &#39;SkipAllParameterization&#39; | [optional] 
**resources** | **List[str]** | The IDs of the resources to filter the export by. To export all resources, supply an array with single entry &#39;*&#39;. | [optional] 

## Example

```python
from openapi_client.models.export_template_request import ExportTemplateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ExportTemplateRequest from a JSON string
export_template_request_instance = ExportTemplateRequest.from_json(json)
# print the JSON string representation of the object
print(ExportTemplateRequest.to_json())

# convert the object into a dict
export_template_request_dict = export_template_request_instance.to_dict()
# create an instance of ExportTemplateRequest from a dict
export_template_request_from_dict = ExportTemplateRequest.from_dict(export_template_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


