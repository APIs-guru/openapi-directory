# RecipientTransferProperties

Transfer Details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_product_type** | [**List[EligibleProductType]**](EligibleProductType.md) | Type of subscriptions that can be transferred. | [optional] [readonly] 
**canceled_by** | **str** | Email Id who user canceled the transfer. | [optional] [readonly] 
**creation_time** | **datetime** | Transfer creation time. | [optional] [readonly] 
**detailed_transfer_status** | [**List[DetailedTransferStatus]**](DetailedTransferStatus.md) | Detailed transfer status. | [optional] [readonly] 
**expiration_time** | **datetime** | Transfer expiration time. | [optional] [readonly] 
**initiator_email_id** | **str** | Email Id of initiator of transfer. | [optional] [readonly] 
**last_modified_time** | **datetime** | Transfer last modification time. | [optional] [readonly] 
**recipient_email_id** | **str** | Email Id of recipient of transfer. | [optional] [readonly] 
**transfer_status** | [**TransferStatus**](TransferStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.recipient_transfer_properties import RecipientTransferProperties

# TODO update the JSON string below
json = "{}"
# create an instance of RecipientTransferProperties from a JSON string
recipient_transfer_properties_instance = RecipientTransferProperties.from_json(json)
# print the JSON string representation of the object
print(RecipientTransferProperties.to_json())

# convert the object into a dict
recipient_transfer_properties_dict = recipient_transfer_properties_instance.to_dict()
# create an instance of RecipientTransferProperties from a dict
recipient_transfer_properties_from_dict = RecipientTransferProperties.from_dict(recipient_transfer_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


