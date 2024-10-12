# Relation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**List[AccountRelation]**](AccountRelation.md) | Account | [optional] 
**attachment** | [**List[AttachmentRelation]**](AttachmentRelation.md) | Attachment | [optional] 
**call** | [**List[CallRelation]**](CallRelation.md) | Call | [optional] 
**campaign** | [**List[CampaignRelation]**](CampaignRelation.md) | Campaign | [optional] 
**case** | [**List[CaseRelation]**](CaseRelation.md) | Case | [optional] 
**comment** | [**List[CommentRelation]**](CommentRelation.md) | Comment | [optional] 
**contact** | [**List[ContactRelation]**](ContactRelation.md) | Contact | [optional] 
**email** | [**List[EmailRelation]**](EmailRelation.md) | Email | [optional] 
**event** | [**List[EventRelation]**](EventRelation.md) | Event | [optional] 
**invoice** | [**List[InvoiceRelation]**](InvoiceRelation.md) | Invoice | [optional] 
**invoice_item** | [**List[InvoiceItemRelation]**](InvoiceItemRelation.md) | Invoice Item | [optional] 
**lead** | [**List[LeadRelation]**](LeadRelation.md) | Lead | [optional] 
**meeting** | [**List[MeetingRelation]**](MeetingRelation.md) | Meeting | [optional] 
**note** | [**List[NoteRelation]**](NoteRelation.md) | Note | [optional] 
**opportunity** | [**List[OpportunityRelation]**](OpportunityRelation.md) | Opportunity | [optional] 
**opportunity_product** | [**List[OpportunityProductRelation]**](OpportunityProductRelation.md) | Opportunity Product | [optional] 
**post** | [**List[PostRelation]**](PostRelation.md) | Post | [optional] 
**price_book** | [**List[PriceBookRelation]**](PriceBookRelation.md) | Price Book | [optional] 
**price_book_item** | [**List[PriceBookItemRelation]**](PriceBookItemRelation.md) | Price Book Item | [optional] 
**product** | [**List[ProductRelation]**](ProductRelation.md) | Product | [optional] 
**project** | [**List[ProjectRelation]**](ProjectRelation.md) | Project | [optional] 
**quote** | [**List[QuoteRelation]**](QuoteRelation.md) | Quote | [optional] 
**quote_item** | [**List[QuoteItemRelation]**](QuoteItemRelation.md) | Quote Item | [optional] 
**tag** | [**List[TagRelation]**](TagRelation.md) | Tag | [optional] 
**task** | [**List[TaskRelation]**](TaskRelation.md) | Task | [optional] 
**ticket** | [**List[TicketRelation]**](TicketRelation.md) | Ticket | [optional] 
**user** | [**List[UserRelation]**](UserRelation.md) | User | [optional] 

## Example

```python
from openapi_client.models.relation import Relation

# TODO update the JSON string below
json = "{}"
# create an instance of Relation from a JSON string
relation_instance = Relation.from_json(json)
# print the JSON string representation of the object
print(Relation.to_json())

# convert the object into a dict
relation_dict = relation_instance.to_dict()
# create an instance of Relation from a dict
relation_from_dict = Relation.from_dict(relation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


