# SendTokenResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**multisig_outputs** | **List[float]** | Array of indexes of multisig outputs | [optional] 
**ntp1_output_indexes** | **List[float]** | Array of indexes transfering NTP1 tokens | [optional] 
**tx_hex** | **str** | Unsigned, raw transaction hex of the transaction to send the token | [optional] 

## Example

```python
from openapi_client.models.send_token_response import SendTokenResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SendTokenResponse from a JSON string
send_token_response_instance = SendTokenResponse.from_json(json)
# print the JSON string representation of the object
print(SendTokenResponse.to_json())

# convert the object into a dict
send_token_response_dict = send_token_response_instance.to_dict()
# create an instance of SendTokenResponse from a dict
send_token_response_from_dict = SendTokenResponse.from_dict(send_token_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


