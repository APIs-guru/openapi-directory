# Recipient


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**campaign_id** | **str** |  | 
**channel_cid** | **str** |  | 
**created_at** | **datetime** |  | 
**details** | **str** |  | 
**message_id** | **str** |  | 
**receiver_id** | **str** |  | 
**status** | **str** |  | 
**updated_at** | **datetime** |  | 

## Example

```python
from openapi_client.models.recipient import Recipient

# TODO update the JSON string below
json = "{}"
# create an instance of Recipient from a JSON string
recipient_instance = Recipient.from_json(json)
# print the JSON string representation of the object
print(Recipient.to_json())

# convert the object into a dict
recipient_dict = recipient_instance.to_dict()
# create an instance of Recipient from a dict
recipient_from_dict = Recipient.from_dict(recipient_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


