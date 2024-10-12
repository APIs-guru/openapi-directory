# Data70

An array containing the Transactions in the transfer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**merchant_transfer** | [**List[MerchantTransfer71]**](MerchantTransfer71.md) | An array containing the Transactions in the transfer | [optional] 

## Example

```python
from openapi_client.models.data70 import Data70

# TODO update the JSON string below
json = "{}"
# create an instance of Data70 from a JSON string
data70_instance = Data70.from_json(json)
# print the JSON string representation of the object
print(Data70.to_json())

# convert the object into a dict
data70_dict = data70_instance.to_dict()
# create an instance of Data70 from a dict
data70_from_dict = Data70.from_dict(data70_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


