# SettlementreportsListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;&#x60;content#settlementreportsListResponse&#x60;\&quot;. | [optional] 
**next_page_token** | **str** | The token for the retrieval of the next page of returns. | [optional] 
**resources** | [**List[SettlementReport]**](SettlementReport.md) |  | [optional] 

## Example

```python
from openapi_client.models.settlementreports_list_response import SettlementreportsListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SettlementreportsListResponse from a JSON string
settlementreports_list_response_instance = SettlementreportsListResponse.from_json(json)
# print the JSON string representation of the object
print(SettlementreportsListResponse.to_json())

# convert the object into a dict
settlementreports_list_response_dict = settlementreports_list_response_instance.to_dict()
# create an instance of SettlementreportsListResponse from a dict
settlementreports_list_response_from_dict = SettlementreportsListResponse.from_dict(settlementreports_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


