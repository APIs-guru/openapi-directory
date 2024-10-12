# GdataContentTypeInfo

gdata

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**best_guess** | **str** | gdata | [optional] 
**from_bytes** | **str** | gdata | [optional] 
**from_file_name** | **str** | gdata | [optional] 
**from_header** | **str** | gdata | [optional] 
**from_url_path** | **str** | gdata | [optional] 

## Example

```python
from openapi_client.models.gdata_content_type_info import GdataContentTypeInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GdataContentTypeInfo from a JSON string
gdata_content_type_info_instance = GdataContentTypeInfo.from_json(json)
# print the JSON string representation of the object
print(GdataContentTypeInfo.to_json())

# convert the object into a dict
gdata_content_type_info_dict = gdata_content_type_info_instance.to_dict()
# create an instance of GdataContentTypeInfo from a dict
gdata_content_type_info_from_dict = GdataContentTypeInfo.from_dict(gdata_content_type_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


