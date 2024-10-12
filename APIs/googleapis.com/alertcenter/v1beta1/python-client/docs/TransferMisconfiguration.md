# TransferMisconfiguration

Error related to transferring or forwarding a phone call.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**List[TransferError]**](TransferError.md) | Details for each invalid transfer or forward. | [optional] 

## Example

```python
from openapi_client.models.transfer_misconfiguration import TransferMisconfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of TransferMisconfiguration from a JSON string
transfer_misconfiguration_instance = TransferMisconfiguration.from_json(json)
# print the JSON string representation of the object
print(TransferMisconfiguration.to_json())

# convert the object into a dict
transfer_misconfiguration_dict = transfer_misconfiguration_instance.to_dict()
# create an instance of TransferMisconfiguration from a dict
transfer_misconfiguration_from_dict = TransferMisconfiguration.from_dict(transfer_misconfiguration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


