# RecipientUserCollection

Paged Recipient User list representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Next page link if any. | [optional] 
**value** | [**List[RecipientUserContract]**](RecipientUserContract.md) | Page values. | [optional] 

## Example

```python
from openapi_client.models.recipient_user_collection import RecipientUserCollection

# TODO update the JSON string below
json = "{}"
# create an instance of RecipientUserCollection from a JSON string
recipient_user_collection_instance = RecipientUserCollection.from_json(json)
# print the JSON string representation of the object
print(RecipientUserCollection.to_json())

# convert the object into a dict
recipient_user_collection_dict = recipient_user_collection_instance.to_dict()
# create an instance of RecipientUserCollection from a dict
recipient_user_collection_from_dict = RecipientUserCollection.from_dict(recipient_user_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


