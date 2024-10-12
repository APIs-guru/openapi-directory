# Ticket


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assignees** | [**List[Assignee]**](Assignee.md) |  | [optional] 
**collection_id** | **str** | The ticket&#39;s collection ID | [optional] [readonly] 
**completed_at** | **datetime** | When the ticket was completed | [optional] [readonly] 
**created_at** | **datetime** | The date and time when the object was created. | [optional] [readonly] 
**created_by** | **str** | The user who created the object. | [optional] [readonly] 
**custom_mappings** | **object** | When custom mappings are configured on the resource, the result is included here. | [optional] 
**description** | **str** | The ticket&#39;s description. HTML version of description is mapped if supported by the third-party platform | [optional] 
**due_date** | **datetime** | Due date of the ticket | [optional] 
**id** | **str** | A unique identifier for an object. | [readonly] 
**parent_id** | **str** | The ticket&#39;s parent ID | [optional] 
**priority** | **str** | Priority of the ticket | [optional] 
**status** | **str** | The current status of the ticket. Possible values include: open, in_progress, closed, or - in cases where there is no clear mapping - the original value passed through. | [optional] 
**subject** | **str** | Subject of the ticket | [optional] 
**tags** | [**List[CollectionTag]**](CollectionTag.md) |  | [optional] 
**type** | **str** | The ticket&#39;s type | [optional] 
**updated_at** | **datetime** | The date and time when the object was last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.ticket import Ticket

# TODO update the JSON string below
json = "{}"
# create an instance of Ticket from a JSON string
ticket_instance = Ticket.from_json(json)
# print the JSON string representation of the object
print(Ticket.to_json())

# convert the object into a dict
ticket_dict = ticket_instance.to_dict()
# create an instance of Ticket from a dict
ticket_from_dict = Ticket.from_dict(ticket_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


