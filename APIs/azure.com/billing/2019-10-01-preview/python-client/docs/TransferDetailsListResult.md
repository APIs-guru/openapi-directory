# TransferDetailsListResult

Result of listing details of the transfer initiated by caller.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link (url) to the next page of results. | [optional] [readonly] 
**value** | [**List[TransferDetails]**](TransferDetails.md) | The list of transfers initiated by caller. | [optional] [readonly] 

## Example

```python
from openapi_client.models.transfer_details_list_result import TransferDetailsListResult

# TODO update the JSON string below
json = "{}"
# create an instance of TransferDetailsListResult from a JSON string
transfer_details_list_result_instance = TransferDetailsListResult.from_json(json)
# print the JSON string representation of the object
print(TransferDetailsListResult.to_json())

# convert the object into a dict
transfer_details_list_result_dict = transfer_details_list_result_instance.to_dict()
# create an instance of TransferDetailsListResult from a dict
transfer_details_list_result_from_dict = TransferDetailsListResult.from_dict(transfer_details_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


