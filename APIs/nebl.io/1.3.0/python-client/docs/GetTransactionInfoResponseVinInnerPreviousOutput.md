# GetTransactionInfoResponseVinInnerPreviousOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addresses** | **List[str]** |  | [optional] 
**asm** | **str** |  | [optional] 
**hex** | **str** |  | [optional] 
**req_sigs** | **float** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.get_transaction_info_response_vin_inner_previous_output import GetTransactionInfoResponseVinInnerPreviousOutput

# TODO update the JSON string below
json = "{}"
# create an instance of GetTransactionInfoResponseVinInnerPreviousOutput from a JSON string
get_transaction_info_response_vin_inner_previous_output_instance = GetTransactionInfoResponseVinInnerPreviousOutput.from_json(json)
# print the JSON string representation of the object
print(GetTransactionInfoResponseVinInnerPreviousOutput.to_json())

# convert the object into a dict
get_transaction_info_response_vin_inner_previous_output_dict = get_transaction_info_response_vin_inner_previous_output_instance.to_dict()
# create an instance of GetTransactionInfoResponseVinInnerPreviousOutput from a dict
get_transaction_info_response_vin_inner_previous_output_from_dict = GetTransactionInfoResponseVinInnerPreviousOutput.from_dict(get_transaction_info_response_vin_inner_previous_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


