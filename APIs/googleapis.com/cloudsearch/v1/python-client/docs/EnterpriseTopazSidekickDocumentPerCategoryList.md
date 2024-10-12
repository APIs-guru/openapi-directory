# EnterpriseTopazSidekickDocumentPerCategoryList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**documents** | [**List[EnterpriseTopazSidekickDocumentPerCategoryListDocumentPerCategoryListEntry]**](EnterpriseTopazSidekickDocumentPerCategoryListDocumentPerCategoryListEntry.md) |  | [optional] 
**help_message** | **str** | Localized message explaining how the documents were derived (e.g. from the last 30 days activity). This field is optional. | [optional] 
**list_type** | **str** |  | [optional] 
**list_type_description** | **str** | Description of the types of documents present in the list. | [optional] 
**response_message** | **str** | Response message in case no documents are present in the card. | [optional] 

## Example

```python
from openapi_client.models.enterprise_topaz_sidekick_document_per_category_list import EnterpriseTopazSidekickDocumentPerCategoryList

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseTopazSidekickDocumentPerCategoryList from a JSON string
enterprise_topaz_sidekick_document_per_category_list_instance = EnterpriseTopazSidekickDocumentPerCategoryList.from_json(json)
# print the JSON string representation of the object
print(EnterpriseTopazSidekickDocumentPerCategoryList.to_json())

# convert the object into a dict
enterprise_topaz_sidekick_document_per_category_list_dict = enterprise_topaz_sidekick_document_per_category_list_instance.to_dict()
# create an instance of EnterpriseTopazSidekickDocumentPerCategoryList from a dict
enterprise_topaz_sidekick_document_per_category_list_from_dict = EnterpriseTopazSidekickDocumentPerCategoryList.from_dict(enterprise_topaz_sidekick_document_per_category_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


