# OrderreportsListDisbursementsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disbursements** | [**List[OrderReportDisbursement]**](OrderReportDisbursement.md) | The list of disbursements. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;&#x60;content#orderreportsListDisbursementsResponse&#x60;\&quot;. | [optional] 
**next_page_token** | **str** | The token for the retrieval of the next page of disbursements. | [optional] 

## Example

```python
from openapi_client.models.orderreports_list_disbursements_response import OrderreportsListDisbursementsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of OrderreportsListDisbursementsResponse from a JSON string
orderreports_list_disbursements_response_instance = OrderreportsListDisbursementsResponse.from_json(json)
# print the JSON string representation of the object
print(OrderreportsListDisbursementsResponse.to_json())

# convert the object into a dict
orderreports_list_disbursements_response_dict = orderreports_list_disbursements_response_instance.to_dict()
# create an instance of OrderreportsListDisbursementsResponse from a dict
orderreports_list_disbursements_response_from_dict = OrderreportsListDisbursementsResponse.from_dict(orderreports_list_disbursements_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


