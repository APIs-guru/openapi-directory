# Document

Document object representing your invoice.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**block_id** | **int** | DocumentBlock&#39;s identifier. | [optional] 
**cancelled** | **bool** |  | [optional] 
**comment** | **str** |  | [optional] 
**conversion_rate** | **float** |  | [optional] 
**currency** | [**Currency**](Currency.md) |  | [optional] 
**due_date** | **date** |  | [optional] 
**electronic** | **bool** |  | [optional] 
**fulfillment_date** | **date** |  | [optional] 
**gross_total** | **float** | The document&#39;s gross total price. | [optional] 
**id** | **int** | The document&#39;s unique identifier. | [optional] 
**invoice_date** | **date** |  | [optional] 
**invoice_number** | **str** | The document&#39;s invoice number. | [optional] 
**items** | [**List[DocumentItem]**](DocumentItem.md) |  | [optional] 
**language** | [**DocumentLanguage**](DocumentLanguage.md) |  | [optional] 
**notification_status** | [**DocumentNotificationStatus**](DocumentNotificationStatus.md) |  | [optional] 
**organization** | [**DocumentOrganization**](DocumentOrganization.md) |  | [optional] 
**paid_date** | **date** |  | [optional] 
**partner** | [**Partner**](Partner.md) |  | [optional] 
**payment_method** | [**PaymentMethod**](PaymentMethod.md) |  | [optional] 
**payment_status** | [**PaymentStatus**](PaymentStatus.md) |  | [optional] 
**settings** | [**DocumentSettings**](DocumentSettings.md) |  | [optional] 
**summary** | [**DocumentSummary**](DocumentSummary.md) |  | [optional] 
**tags** | **List[str]** |  | [optional] 
**type** | [**DocumentType**](DocumentType.md) |  | [optional] 

## Example

```python
from openapi_client.models.document import Document

# TODO update the JSON string below
json = "{}"
# create an instance of Document from a JSON string
document_instance = Document.from_json(json)
# print the JSON string representation of the object
print(Document.to_json())

# convert the object into a dict
document_dict = document_instance.to_dict()
# create an instance of Document from a dict
document_from_dict = Document.from_dict(document_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


