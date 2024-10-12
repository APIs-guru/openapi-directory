# SettlementtransactionsListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;&#x60;content#settlementtransactionsListResponse&#x60;\&quot;. | [optional] 
**next_page_token** | **str** | The token for the retrieval of the next page of returns. | [optional] 
**resources** | [**List[SettlementTransaction]**](SettlementTransaction.md) |  | [optional] 

## Example

```python
from openapi_client.models.settlementtransactions_list_response import SettlementtransactionsListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SettlementtransactionsListResponse from a JSON string
settlementtransactions_list_response_instance = SettlementtransactionsListResponse.from_json(json)
# print the JSON string representation of the object
print(SettlementtransactionsListResponse.to_json())

# convert the object into a dict
settlementtransactions_list_response_dict = settlementtransactions_list_response_instance.to_dict()
# create an instance of SettlementtransactionsListResponse from a dict
settlementtransactions_list_response_from_dict = SettlementtransactionsListResponse.from_dict(settlementtransactions_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


