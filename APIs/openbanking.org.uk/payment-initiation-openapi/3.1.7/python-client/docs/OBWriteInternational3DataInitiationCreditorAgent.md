# OBWriteInternational3DataInitiationCreditorAgent

Financial institution servicing an account for the creditor.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identification** | **str** | Unique and unambiguous identification of a financial institution or a branch of a financial institution. | [optional] 
**name** | **str** | Name by which an agent is known and which is usually used to identify that agent. | [optional] 
**postal_address** | [**OBPostalAddress6**](OBPostalAddress6.md) |  | [optional] 
**scheme_name** | **str** | Name of the identification scheme, in a coded form as published in an external list. | [optional] 

## Example

```python
from openapi_client.models.ob_write_international3_data_initiation_creditor_agent import OBWriteInternational3DataInitiationCreditorAgent

# TODO update the JSON string below
json = "{}"
# create an instance of OBWriteInternational3DataInitiationCreditorAgent from a JSON string
ob_write_international3_data_initiation_creditor_agent_instance = OBWriteInternational3DataInitiationCreditorAgent.from_json(json)
# print the JSON string representation of the object
print(OBWriteInternational3DataInitiationCreditorAgent.to_json())

# convert the object into a dict
ob_write_international3_data_initiation_creditor_agent_dict = ob_write_international3_data_initiation_creditor_agent_instance.to_dict()
# create an instance of OBWriteInternational3DataInitiationCreditorAgent from a dict
ob_write_international3_data_initiation_creditor_agent_from_dict = OBWriteInternational3DataInitiationCreditorAgent.from_dict(ob_write_international3_data_initiation_creditor_agent_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


