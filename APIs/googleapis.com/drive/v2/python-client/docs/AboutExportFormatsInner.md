# AboutExportFormatsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source** | **str** | The content type to convert from. | [optional] 
**targets** | **List[str]** | The possible content types to convert to. | [optional] 

## Example

```python
from openapi_client.models.about_export_formats_inner import AboutExportFormatsInner

# TODO update the JSON string below
json = "{}"
# create an instance of AboutExportFormatsInner from a JSON string
about_export_formats_inner_instance = AboutExportFormatsInner.from_json(json)
# print the JSON string representation of the object
print(AboutExportFormatsInner.to_json())

# convert the object into a dict
about_export_formats_inner_dict = about_export_formats_inner_instance.to_dict()
# create an instance of AboutExportFormatsInner from a dict
about_export_formats_inner_from_dict = AboutExportFormatsInner.from_dict(about_export_formats_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


