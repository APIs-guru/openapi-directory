# ShareRecipient


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **datetime** | Timestamp of adding recipient to the share. | [optional] 
**email** | **str** | Recipient email address. | [optional] 
**hash** | **str** | Share hash. | [optional] 
**id** | **int** | ID of the recipient. | [optional] 
**received** | **bool** | Set to true if recipient has accessed the share. Note this is set to true when the recipient clicks the link to access the share; not when they download a file. | [optional] 
**sent** | **bool** | Set to true if invite email was sent; false otherwise. | [optional] 
**share_id** | **str** | ID of the share that the recipoient belongs to. | [optional] 
**type** | **str** | Type of the recipient. | [optional] 

## Example

```python
from openapi_client.models.share_recipient import ShareRecipient

# TODO update the JSON string below
json = "{}"
# create an instance of ShareRecipient from a JSON string
share_recipient_instance = ShareRecipient.from_json(json)
# print the JSON string representation of the object
print(ShareRecipient.to_json())

# convert the object into a dict
share_recipient_dict = share_recipient_instance.to_dict()
# create an instance of ShareRecipient from a dict
share_recipient_from_dict = ShareRecipient.from_dict(share_recipient_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


