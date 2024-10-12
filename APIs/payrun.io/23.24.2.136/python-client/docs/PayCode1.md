# PayCode1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**benefit** | **bool** | The pay codes&#39; benefit | [optional] 
**code** | **str** | The pay codes&#39; code | [optional] 
**description** | **str** | The pay codes&#39; description | [optional] 
**effective_date** | **date** | The pay codes&#39; effective date | [optional] 
**meta_data** | **object** | The pay codes&#39; meta data | [optional] 
**next_revision_date** | **date** | The pay codes&#39; next revision date | [optional] 
**niable** | **bool** | The pay codes&#39; niable | [optional] 
**nominal_code** | [**NominalCode3**](NominalCode3.md) |  | [optional] 
**non_arrestable** | **bool** | The pay codes&#39; non arrestable | [optional] 
**notional** | **bool** | The pay codes&#39; notional | [optional] 
**readonly** | **bool** | The pay codes&#39; readonly | [optional] 
**region** | **str** | The pay codes&#39; region | [optional] 
**revision** | **int** | The pay codes&#39; revision | [optional] 
**taxable** | **bool** | The pay codes&#39; taxable | [optional] 
**territory** | **str** | The pay codes&#39; territory | [optional] 
**type** | **str** | The pay codes&#39; type | [optional] 

## Example

```python
from openapi_client.models.pay_code1 import PayCode1

# TODO update the JSON string below
json = "{}"
# create an instance of PayCode1 from a JSON string
pay_code1_instance = PayCode1.from_json(json)
# print the JSON string representation of the object
print(PayCode1.to_json())

# convert the object into a dict
pay_code1_dict = pay_code1_instance.to_dict()
# create an instance of PayCode1 from a dict
pay_code1_from_dict = PayCode1.from_dict(pay_code1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


