# Data23

An array containing the Transactions in the transfer. Valid Values- Refer 'Transaction Data'

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transaction** | [**List[Transaction24]**](Transaction24.md) | Array of transactions | [optional] 

## Example

```python
from openapi_client.models.data23 import Data23

# TODO update the JSON string below
json = "{}"
# create an instance of Data23 from a JSON string
data23_instance = Data23.from_json(json)
# print the JSON string representation of the object
print(Data23.to_json())

# convert the object into a dict
data23_dict = data23_instance.to_dict()
# create an instance of Data23 from a dict
data23_from_dict = Data23.from_dict(data23_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


