# Data112

An array containing the Transactions in the transfer. Valid Values- Refer 'Transaction Data'

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transaction** | [**List[Transaction113]**](Transaction113.md) | transaction array | [optional] 

## Example

```python
from openapi_client.models.data112 import Data112

# TODO update the JSON string below
json = "{}"
# create an instance of Data112 from a JSON string
data112_instance = Data112.from_json(json)
# print the JSON string representation of the object
print(Data112.to_json())

# convert the object into a dict
data112_dict = data112_instance.to_dict()
# create an instance of Data112 from a dict
data112_from_dict = Data112.from_dict(data112_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


