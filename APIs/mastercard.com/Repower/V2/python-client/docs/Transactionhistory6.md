# Transactionhistory6

List of transactions performed to complete request 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transaction** | [**List[Transaction7]**](Transaction7.md) | Information for one transaction | [optional] 

## Example

```python
from openapi_client.models.transactionhistory6 import Transactionhistory6

# TODO update the JSON string below
json = "{}"
# create an instance of Transactionhistory6 from a JSON string
transactionhistory6_instance = Transactionhistory6.from_json(json)
# print the JSON string representation of the object
print(Transactionhistory6.to_json())

# convert the object into a dict
transactionhistory6_dict = transactionhistory6_instance.to_dict()
# create an instance of Transactionhistory6 from a dict
transactionhistory6_from_dict = Transactionhistory6.from_dict(transactionhistory6_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


