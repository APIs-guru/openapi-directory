# OBReadDirectDebit2Data


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**direct_debit** | [**List[OBReadDirectDebit2DataDirectDebitInner]**](OBReadDirectDebit2DataDirectDebitInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.ob_read_direct_debit2_data import OBReadDirectDebit2Data

# TODO update the JSON string below
json = "{}"
# create an instance of OBReadDirectDebit2Data from a JSON string
ob_read_direct_debit2_data_instance = OBReadDirectDebit2Data.from_json(json)
# print the JSON string representation of the object
print(OBReadDirectDebit2Data.to_json())

# convert the object into a dict
ob_read_direct_debit2_data_dict = ob_read_direct_debit2_data_instance.to_dict()
# create an instance of OBReadDirectDebit2Data from a dict
ob_read_direct_debit2_data_from_dict = OBReadDirectDebit2Data.from_dict(ob_read_direct_debit2_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


