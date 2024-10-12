# GetFaucetResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tx_id** | **str** | TXID of a successful withdrawal | [optional] 

## Example

```python
from openapi_client.models.get_faucet_response_data import GetFaucetResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of GetFaucetResponseData from a JSON string
get_faucet_response_data_instance = GetFaucetResponseData.from_json(json)
# print the JSON string representation of the object
print(GetFaucetResponseData.to_json())

# convert the object into a dict
get_faucet_response_data_dict = get_faucet_response_data_instance.to_dict()
# create an instance of GetFaucetResponseData from a dict
get_faucet_response_data_from_dict = GetFaucetResponseData.from_dict(get_faucet_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


