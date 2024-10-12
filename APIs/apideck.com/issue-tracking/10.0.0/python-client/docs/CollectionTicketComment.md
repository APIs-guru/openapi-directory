# CollectionTicketComment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | **str** | Body of the comment | [optional] 
**created_at** | **datetime** | The date and time when the object was created. | [optional] [readonly] 
**created_by** | **str** | The user who created the object. | [optional] [readonly] 
**custom_mappings** | **object** | When custom mappings are configured on the resource, the result is included here. | [optional] 
**id** | **str** | A unique identifier for an object. | [optional] [readonly] 
**updated_at** | **datetime** | The date and time when the object was last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.collection_ticket_comment import CollectionTicketComment

# TODO update the JSON string below
json = "{}"
# create an instance of CollectionTicketComment from a JSON string
collection_ticket_comment_instance = CollectionTicketComment.from_json(json)
# print the JSON string representation of the object
print(CollectionTicketComment.to_json())

# convert the object into a dict
collection_ticket_comment_dict = collection_ticket_comment_instance.to_dict()
# create an instance of CollectionTicketComment from a dict
collection_ticket_comment_from_dict = CollectionTicketComment.from_dict(collection_ticket_comment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


