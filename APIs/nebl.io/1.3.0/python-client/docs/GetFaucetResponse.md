# GetFaucetResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**GetFaucetResponseData**](GetFaucetResponseData.md) |  | [optional] 
**status** | **str** | Whether the withdrawal was successful | [optional] 

## Example

```python
from openapi_client.models.get_faucet_response import GetFaucetResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetFaucetResponse from a JSON string
get_faucet_response_instance = GetFaucetResponse.from_json(json)
# print the JSON string representation of the object
print(GetFaucetResponse.to_json())

# convert the object into a dict
get_faucet_response_dict = get_faucet_response_instance.to_dict()
# create an instance of GetFaucetResponse from a dict
get_faucet_response_from_dict = GetFaucetResponse.from_dict(get_faucet_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


