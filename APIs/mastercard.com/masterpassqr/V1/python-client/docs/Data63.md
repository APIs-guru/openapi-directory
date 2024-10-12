# Data63

An array containing the Transactions in the transfer. Valid Values- Refer 'Transaction Data'

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transaction** | [**List[Transaction64]**](Transaction64.md) | Array of transactions | [optional] 

## Example

```python
from openapi_client.models.data63 import Data63

# TODO update the JSON string below
json = "{}"
# create an instance of Data63 from a JSON string
data63_instance = Data63.from_json(json)
# print the JSON string representation of the object
print(Data63.to_json())

# convert the object into a dict
data63_dict = data63_instance.to_dict()
# create an instance of Data63 from a dict
data63_from_dict = Data63.from_dict(data63_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


