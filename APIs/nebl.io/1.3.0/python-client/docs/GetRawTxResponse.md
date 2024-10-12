# GetRawTxResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rawtx** | **str** | Raw hex representing the transaction | [optional] 

## Example

```python
from openapi_client.models.get_raw_tx_response import GetRawTxResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetRawTxResponse from a JSON string
get_raw_tx_response_instance = GetRawTxResponse.from_json(json)
# print the JSON string representation of the object
print(GetRawTxResponse.to_json())

# convert the object into a dict
get_raw_tx_response_dict = get_raw_tx_response_instance.to_dict()
# create an instance of GetRawTxResponse from a dict
get_raw_tx_response_from_dict = GetRawTxResponse.from_dict(get_raw_tx_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


