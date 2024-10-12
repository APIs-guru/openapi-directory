# RecipientEmailCollection

Paged Recipient User list representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Next page link if any. | [optional] 
**value** | [**List[RecipientEmailContract]**](RecipientEmailContract.md) | Page values. | [optional] 

## Example

```python
from openapi_client.models.recipient_email_collection import RecipientEmailCollection

# TODO update the JSON string below
json = "{}"
# create an instance of RecipientEmailCollection from a JSON string
recipient_email_collection_instance = RecipientEmailCollection.from_json(json)
# print the JSON string representation of the object
print(RecipientEmailCollection.to_json())

# convert the object into a dict
recipient_email_collection_dict = recipient_email_collection_instance.to_dict()
# create an instance of RecipientEmailCollection from a dict
recipient_email_collection_from_dict = RecipientEmailCollection.from_dict(recipient_email_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


