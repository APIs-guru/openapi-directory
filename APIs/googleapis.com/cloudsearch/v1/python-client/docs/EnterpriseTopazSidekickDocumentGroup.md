# EnterpriseTopazSidekickDocumentGroup

Represents a mapping between a document type and its corresponding documents. Use for Work in Progress card in v1 homepage.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**group_type** | **str** | Document group type | [optional] 
**personalized_document** | [**List[EnterpriseTopazSidekickCommonDocument]**](EnterpriseTopazSidekickCommonDocument.md) | The list of corresponding documents. | [optional] 

## Example

```python
from openapi_client.models.enterprise_topaz_sidekick_document_group import EnterpriseTopazSidekickDocumentGroup

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseTopazSidekickDocumentGroup from a JSON string
enterprise_topaz_sidekick_document_group_instance = EnterpriseTopazSidekickDocumentGroup.from_json(json)
# print the JSON string representation of the object
print(EnterpriseTopazSidekickDocumentGroup.to_json())

# convert the object into a dict
enterprise_topaz_sidekick_document_group_dict = enterprise_topaz_sidekick_document_group_instance.to_dict()
# create an instance of EnterpriseTopazSidekickDocumentGroup from a dict
enterprise_topaz_sidekick_document_group_from_dict = EnterpriseTopazSidekickDocumentGroup.from_dict(enterprise_topaz_sidekick_document_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


