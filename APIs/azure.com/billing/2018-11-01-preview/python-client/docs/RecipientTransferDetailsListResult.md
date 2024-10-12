# RecipientTransferDetailsListResult

Result of listing details of the transfer received by caller.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link (url) to the next page of results. | [optional] [readonly] 
**value** | [**List[RecipientTransferDetails]**](RecipientTransferDetails.md) | The list of transfers received by caller. | [optional] [readonly] 

## Example

```python
from openapi_client.models.recipient_transfer_details_list_result import RecipientTransferDetailsListResult

# TODO update the JSON string below
json = "{}"
# create an instance of RecipientTransferDetailsListResult from a JSON string
recipient_transfer_details_list_result_instance = RecipientTransferDetailsListResult.from_json(json)
# print the JSON string representation of the object
print(RecipientTransferDetailsListResult.to_json())

# convert the object into a dict
recipient_transfer_details_list_result_dict = recipient_transfer_details_list_result_instance.to_dict()
# create an instance of RecipientTransferDetailsListResult from a dict
recipient_transfer_details_list_result_from_dict = RecipientTransferDetailsListResult.from_dict(recipient_transfer_details_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


