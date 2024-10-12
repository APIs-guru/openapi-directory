# TransferLocationRequest

Request message for AccessControl.TransferLocation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_account** | **str** | Required. Name of the account resource to transfer the location to (for example, \&quot;accounts/{account}\&quot;). | [optional] 

## Example

```python
from openapi_client.models.transfer_location_request import TransferLocationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TransferLocationRequest from a JSON string
transfer_location_request_instance = TransferLocationRequest.from_json(json)
# print the JSON string representation of the object
print(TransferLocationRequest.to_json())

# convert the object into a dict
transfer_location_request_dict = transfer_location_request_instance.to_dict()
# create an instance of TransferLocationRequest from a dict
transfer_location_request_from_dict = TransferLocationRequest.from_dict(transfer_location_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


