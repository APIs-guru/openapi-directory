# APIPagedResponseDealerDBModelsVoucherHistory

A response containing a page of results and metadata concerning the results

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entities** | [**List[DealerDBModelsVoucherHistory]**](DealerDBModelsVoucherHistory.md) |  | [readonly] 
**metadata** | [**APIPagedResponseMetadata**](APIPagedResponseMetadata.md) |  | 

## Example

```python
from openapi_client.models.api_paged_response_dealer_db_models_voucher_history import APIPagedResponseDealerDBModelsVoucherHistory

# TODO update the JSON string below
json = "{}"
# create an instance of APIPagedResponseDealerDBModelsVoucherHistory from a JSON string
api_paged_response_dealer_db_models_voucher_history_instance = APIPagedResponseDealerDBModelsVoucherHistory.from_json(json)
# print the JSON string representation of the object
print(APIPagedResponseDealerDBModelsVoucherHistory.to_json())

# convert the object into a dict
api_paged_response_dealer_db_models_voucher_history_dict = api_paged_response_dealer_db_models_voucher_history_instance.to_dict()
# create an instance of APIPagedResponseDealerDBModelsVoucherHistory from a dict
api_paged_response_dealer_db_models_voucher_history_from_dict = APIPagedResponseDealerDBModelsVoucherHistory.from_dict(api_paged_response_dealer_db_models_voucher_history_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


