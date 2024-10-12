# TransferDetails

Details of the transfer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**TransferProperties**](TransferProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.transfer_details import TransferDetails

# TODO update the JSON string below
json = "{}"
# create an instance of TransferDetails from a JSON string
transfer_details_instance = TransferDetails.from_json(json)
# print the JSON string representation of the object
print(TransferDetails.to_json())

# convert the object into a dict
transfer_details_dict = transfer_details_instance.to_dict()
# create an instance of TransferDetails from a dict
transfer_details_from_dict = TransferDetails.from_dict(transfer_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


