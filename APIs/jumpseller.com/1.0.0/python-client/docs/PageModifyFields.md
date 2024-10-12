# PageModifyFields


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | **str** | Body of the Page | [optional] 
**categories** | [**List[PageCategory]**](PageCategory.md) | Page categories to which the Page belongs to | [optional] 
**image** | [**PageFieldsImage**](PageFieldsImage.md) |  | [optional] 
**meta_description** | **str** | Meta description of the Page | [optional] 
**page_title** | **str** | Meta title of the Page | [optional] 
**permalink** | **str** | URL of the Page | [optional] 
**status** | **str** | Status of the Page | [optional] 
**template** | **int** | ID of the Page template. Use null for the blank layout (&#39;None&#39;) | [optional] 
**title** | **str** | Title of the Page | [optional] 

## Example

```python
from openapi_client.models.page_modify_fields import PageModifyFields

# TODO update the JSON string below
json = "{}"
# create an instance of PageModifyFields from a JSON string
page_modify_fields_instance = PageModifyFields.from_json(json)
# print the JSON string representation of the object
print(PageModifyFields.to_json())

# convert the object into a dict
page_modify_fields_dict = page_modify_fields_instance.to_dict()
# create an instance of PageModifyFields from a dict
page_modify_fields_from_dict = PageModifyFields.from_dict(page_modify_fields_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


