# EnterpriseTopazSidekickCommonDocumentJustification

Justification of why we are reporting the document.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**justification** | **str** | A locale aware message that explains why this document was selected. | [optional] 
**reason** | **str** | Reason on why the document is selected. Populate for trending documents. | [optional] 

## Example

```python
from openapi_client.models.enterprise_topaz_sidekick_common_document_justification import EnterpriseTopazSidekickCommonDocumentJustification

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseTopazSidekickCommonDocumentJustification from a JSON string
enterprise_topaz_sidekick_common_document_justification_instance = EnterpriseTopazSidekickCommonDocumentJustification.from_json(json)
# print the JSON string representation of the object
print(EnterpriseTopazSidekickCommonDocumentJustification.to_json())

# convert the object into a dict
enterprise_topaz_sidekick_common_document_justification_dict = enterprise_topaz_sidekick_common_document_justification_instance.to_dict()
# create an instance of EnterpriseTopazSidekickCommonDocumentJustification from a dict
enterprise_topaz_sidekick_common_document_justification_from_dict = EnterpriseTopazSidekickCommonDocumentJustification.from_dict(enterprise_topaz_sidekick_common_document_justification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


