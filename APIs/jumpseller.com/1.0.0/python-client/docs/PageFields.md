# PageFields


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | **str** | Body of the Page | [optional] 
**categories** | [**List[PageCategory]**](PageCategory.md) | Page categories to which the Page belongs to | [optional] 
**id** | **int** | Id of the Page | [optional] 
**image** | [**PageFieldsImage**](PageFieldsImage.md) |  | [optional] 
**legal** | **bool** | True if it is a legal page | [optional] 
**meta_description** | **str** | Meta description of the Page | [optional] 
**page_title** | **str** | Meta title of the Page | [optional] 
**permalink** | **str** | URL of the Page | [optional] 
**status** | **str** | Status of the Page | [optional] 
**template** | [**PageTemplate**](PageTemplate.md) |  | [optional] 
**title** | **str** | Title of the Page | [optional] 

## Example

```python
from openapi_client.models.page_fields import PageFields

# TODO update the JSON string below
json = "{}"
# create an instance of PageFields from a JSON string
page_fields_instance = PageFields.from_json(json)
# print the JSON string representation of the object
print(PageFields.to_json())

# convert the object into a dict
page_fields_dict = page_fields_instance.to_dict()
# create an instance of PageFields from a dict
page_fields_from_dict = PageFields.from_dict(page_fields_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


