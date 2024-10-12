# CardsAttachments


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file** | **str** | A file | [optional] 
**mime_type** | **str** | a string with a length from 0 to 256 | [optional] 
**name** | **str** | a string with a length from 0 to 256 | [optional] 
**url** | **str** | A URL starting with http:// or https:// or null | [optional] 

## Example

```python
from openapi_client.models.cards_attachments import CardsAttachments

# TODO update the JSON string below
json = "{}"
# create an instance of CardsAttachments from a JSON string
cards_attachments_instance = CardsAttachments.from_json(json)
# print the JSON string representation of the object
print(CardsAttachments.to_json())

# convert the object into a dict
cards_attachments_dict = cards_attachments_instance.to_dict()
# create an instance of CardsAttachments from a dict
cards_attachments_from_dict = CardsAttachments.from_dict(cards_attachments_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


