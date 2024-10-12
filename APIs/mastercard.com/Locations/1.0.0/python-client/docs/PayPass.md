# PayPass


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**concession** | **bool** | Boolean value which indicates if the concession area is equipped with a PayPass card reader. | [optional] 
**drive_thru** | **bool** | Boolean value which indicates if the drive thru is equipped with a PayPass card reader. | [optional] 
**fuel_pump** | **bool** | Boolean value which indicates if the fuel pump is equipped with a PayPass card reader. | [optional] 
**pharmacy** | **bool** | Boolean value which indicates if the pharmacy is equipped with a PayPass card reader. | [optional] 
**register** | **bool** | Boolean value which indicates if the register is equipped with a PayPass card reader. | [optional] 
**ticketing** | **bool** | Boolean value which indicates if the ticketing area is equipped with a PayPass card reader. | [optional] 
**toll_booth** | **bool** | Boolean value which indicates if the toll booth is equipped with a PayPass card reader. | [optional] 
**vending_machine** | **bool** | Boolean value which indicates if the vending machine is equipped with a PayPass card reader. | [optional] 

## Example

```python
from openapi_client.models.pay_pass import PayPass

# TODO update the JSON string below
json = "{}"
# create an instance of PayPass from a JSON string
pay_pass_instance = PayPass.from_json(json)
# print the JSON string representation of the object
print(PayPass.to_json())

# convert the object into a dict
pay_pass_dict = pay_pass_instance.to_dict()
# create an instance of PayPass from a dict
pay_pass_from_dict = PayPass.from_dict(pay_pass_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


