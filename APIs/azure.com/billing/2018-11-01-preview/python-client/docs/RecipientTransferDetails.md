# RecipientTransferDetails

Details of the transfer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**RecipientTransferProperties**](RecipientTransferProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.recipient_transfer_details import RecipientTransferDetails

# TODO update the JSON string below
json = "{}"
# create an instance of RecipientTransferDetails from a JSON string
recipient_transfer_details_instance = RecipientTransferDetails.from_json(json)
# print the JSON string representation of the object
print(RecipientTransferDetails.to_json())

# convert the object into a dict
recipient_transfer_details_dict = recipient_transfer_details_instance.to_dict()
# create an instance of RecipientTransferDetails from a dict
recipient_transfer_details_from_dict = RecipientTransferDetails.from_dict(recipient_transfer_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


