# DocumentInsert


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bank_account_id** | **int** |  | [optional] 
**block_id** | **int** |  | 
**comment** | **str** |  | [optional] 
**conversion_rate** | **float** |  | [optional] 
**currency** | [**Currency**](Currency.md) |  | 
**due_date** | **date** |  | 
**electronic** | **bool** |  | [optional] [default to False]
**fulfillment_date** | **date** |  | 
**items** | [**List[DocumentInsertItemsInner]**](DocumentInsertItemsInner.md) |  | [optional] 
**language** | [**DocumentLanguage**](DocumentLanguage.md) |  | 
**paid** | **bool** |  | [optional] [default to False]
**partner_id** | **int** |  | 
**payment_method** | [**PaymentMethod**](PaymentMethod.md) |  | 
**settings** | [**DocumentSettings**](DocumentSettings.md) |  | [optional] 
**type** | [**DocumentInsertType**](DocumentInsertType.md) |  | 
**vendor_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.document_insert import DocumentInsert

# TODO update the JSON string below
json = "{}"
# create an instance of DocumentInsert from a JSON string
document_insert_instance = DocumentInsert.from_json(json)
# print the JSON string representation of the object
print(DocumentInsert.to_json())

# convert the object into a dict
document_insert_dict = document_insert_instance.to_dict()
# create an instance of DocumentInsert from a dict
document_insert_from_dict = DocumentInsert.from_dict(document_insert_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


