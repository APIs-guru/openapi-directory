# Transactionhistory12

List of transactions performed to complete request 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transaction** | [**List[Transaction13]**](Transaction13.md) | Information for one transaction | [optional] 

## Example

```python
from openapi_client.models.transactionhistory12 import Transactionhistory12

# TODO update the JSON string below
json = "{}"
# create an instance of Transactionhistory12 from a JSON string
transactionhistory12_instance = Transactionhistory12.from_json(json)
# print the JSON string representation of the object
print(Transactionhistory12.to_json())

# convert the object into a dict
transactionhistory12_dict = transactionhistory12_instance.to_dict()
# create an instance of Transactionhistory12 from a dict
transactionhistory12_from_dict = Transactionhistory12.from_dict(transactionhistory12_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


