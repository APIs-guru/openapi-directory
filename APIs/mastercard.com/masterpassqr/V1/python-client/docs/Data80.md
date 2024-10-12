# Data80

An array containing the Transactions in the transfer. Valid Values- Refer 'Transaction Data'

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transaction** | [**List[Transaction81]**](Transaction81.md) | Array of transactions | [optional] 

## Example

```python
from openapi_client.models.data80 import Data80

# TODO update the JSON string below
json = "{}"
# create an instance of Data80 from a JSON string
data80_instance = Data80.from_json(json)
# print the JSON string representation of the object
print(Data80.to_json())

# convert the object into a dict
data80_dict = data80_instance.to_dict()
# create an instance of Data80 from a dict
data80_from_dict = Data80.from_dict(data80_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


