# OBWriteInternational3DataInitiationCreditor

Party to which an amount of money is due.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name by which a party is known and which is usually used to identify that party. | [optional] 
**postal_address** | [**OBPostalAddress6**](OBPostalAddress6.md) |  | [optional] 

## Example

```python
from openapi_client.models.ob_write_international3_data_initiation_creditor import OBWriteInternational3DataInitiationCreditor

# TODO update the JSON string below
json = "{}"
# create an instance of OBWriteInternational3DataInitiationCreditor from a JSON string
ob_write_international3_data_initiation_creditor_instance = OBWriteInternational3DataInitiationCreditor.from_json(json)
# print the JSON string representation of the object
print(OBWriteInternational3DataInitiationCreditor.to_json())

# convert the object into a dict
ob_write_international3_data_initiation_creditor_dict = ob_write_international3_data_initiation_creditor_instance.to_dict()
# create an instance of OBWriteInternational3DataInitiationCreditor from a dict
ob_write_international3_data_initiation_creditor_from_dict = OBWriteInternational3DataInitiationCreditor.from_dict(ob_write_international3_data_initiation_creditor_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


