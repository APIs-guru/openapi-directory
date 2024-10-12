# RtiTransaction

The rti job instructions' rti transaction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**href** | **str** | The links&#39; href | [optional] 
**rel** | **str** | The links&#39; target type | [optional] 
**title** | **str** | The links&#39; title | [optional] 

## Example

```python
from openapi_client.models.rti_transaction import RtiTransaction

# TODO update the JSON string below
json = "{}"
# create an instance of RtiTransaction from a JSON string
rti_transaction_instance = RtiTransaction.from_json(json)
# print the JSON string representation of the object
print(RtiTransaction.to_json())

# convert the object into a dict
rti_transaction_dict = rti_transaction_instance.to_dict()
# create an instance of RtiTransaction from a dict
rti_transaction_from_dict = RtiTransaction.from_dict(rti_transaction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


