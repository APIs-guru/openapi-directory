# Repowerreversalrequest10

Contains the details of the repower reversal request message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ica** | **str** | ICA of acquiring institution. Details- Numeric, 4-6 | 
**reversal_reason** | **str** | Brief description of reason for reversal. Details- String, 1-50 | 
**transaction_reference** | **str** | Unique reference number provided by the client in the \&quot;original\&quot; rePower transfer to be reversed. Details- Alphanumeric, 19 | 

## Example

```python
from openapi_client.models.repowerreversalrequest10 import Repowerreversalrequest10

# TODO update the JSON string below
json = "{}"
# create an instance of Repowerreversalrequest10 from a JSON string
repowerreversalrequest10_instance = Repowerreversalrequest10.from_json(json)
# print the JSON string representation of the object
print(Repowerreversalrequest10.to_json())

# convert the object into a dict
repowerreversalrequest10_dict = repowerreversalrequest10_instance.to_dict()
# create an instance of Repowerreversalrequest10 from a dict
repowerreversalrequest10_from_dict = Repowerreversalrequest10.from_dict(repowerreversalrequest10_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


