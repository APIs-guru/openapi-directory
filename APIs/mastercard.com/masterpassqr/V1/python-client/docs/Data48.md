# Data48

An array containing the Transactions in the transfer. Valid Values- Refer 'Transaction Data'

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transaction** | [**List[Transaction49]**](Transaction49.md) | transaction array | [optional] 

## Example

```python
from openapi_client.models.data48 import Data48

# TODO update the JSON string below
json = "{}"
# create an instance of Data48 from a JSON string
data48_instance = Data48.from_json(json)
# print the JSON string representation of the object
print(Data48.to_json())

# convert the object into a dict
data48_dict = data48_instance.to_dict()
# create an instance of Data48 from a dict
data48_from_dict = Data48.from_dict(data48_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


