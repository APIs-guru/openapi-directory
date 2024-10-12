# AboutImportFormatsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source** | **str** | The imported file&#39;s content type to convert from. | [optional] 
**targets** | **List[str]** | The possible content types to convert to. | [optional] 

## Example

```python
from openapi_client.models.about_import_formats_inner import AboutImportFormatsInner

# TODO update the JSON string below
json = "{}"
# create an instance of AboutImportFormatsInner from a JSON string
about_import_formats_inner_instance = AboutImportFormatsInner.from_json(json)
# print the JSON string representation of the object
print(AboutImportFormatsInner.to_json())

# convert the object into a dict
about_import_formats_inner_dict = about_import_formats_inner_instance.to_dict()
# create an instance of AboutImportFormatsInner from a dict
about_import_formats_inner_from_dict = AboutImportFormatsInner.from_dict(about_import_formats_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


