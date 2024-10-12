# GetProfitAndLossResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**ProfitAndLoss**](ProfitAndLoss.md) |  | 
**operation** | **str** | Operation performed | 
**resource** | **str** | Unified API resource name | 
**service** | **str** | Apideck ID of service provider | 
**status** | **str** | HTTP Response Status | 
**status_code** | **int** | HTTP Response Status Code | 

## Example

```python
from openapi_client.models.get_profit_and_loss_response import GetProfitAndLossResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetProfitAndLossResponse from a JSON string
get_profit_and_loss_response_instance = GetProfitAndLossResponse.from_json(json)
# print the JSON string representation of the object
print(GetProfitAndLossResponse.to_json())

# convert the object into a dict
get_profit_and_loss_response_dict = get_profit_and_loss_response_instance.to_dict()
# create an instance of GetProfitAndLossResponse from a dict
get_profit_and_loss_response_from_dict = GetProfitAndLossResponse.from_dict(get_profit_and_loss_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


