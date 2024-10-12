# AboutMaxUploadSizesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**size** | **str** | The max upload size for this type. | [optional] 
**type** | **str** | The file type. | [optional] 

## Example

```python
from openapi_client.models.about_max_upload_sizes_inner import AboutMaxUploadSizesInner

# TODO update the JSON string below
json = "{}"
# create an instance of AboutMaxUploadSizesInner from a JSON string
about_max_upload_sizes_inner_instance = AboutMaxUploadSizesInner.from_json(json)
# print the JSON string representation of the object
print(AboutMaxUploadSizesInner.to_json())

# convert the object into a dict
about_max_upload_sizes_inner_dict = about_max_upload_sizes_inner_instance.to_dict()
# create an instance of AboutMaxUploadSizesInner from a dict
about_max_upload_sizes_inner_from_dict = AboutMaxUploadSizesInner.from_dict(about_max_upload_sizes_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


