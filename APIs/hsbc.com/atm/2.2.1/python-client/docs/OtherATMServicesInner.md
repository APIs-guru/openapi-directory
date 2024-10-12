# OtherATMServicesInner

Enter a new code , name and description for any other ATM Service

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The four letter Mnemonic used within an XML file to identify a code | [optional] 
**description** | **str** | Description to describe the purpose of the code | 
**name** | **str** | Long name associated with the code | 

## Example

```python
from openapi_client.models.other_atm_services_inner import OtherATMServicesInner

# TODO update the JSON string below
json = "{}"
# create an instance of OtherATMServicesInner from a JSON string
other_atm_services_inner_instance = OtherATMServicesInner.from_json(json)
# print the JSON string representation of the object
print(OtherATMServicesInner.to_json())

# convert the object into a dict
other_atm_services_inner_dict = other_atm_services_inner_instance.to_dict()
# create an instance of OtherATMServicesInner from a dict
other_atm_services_inner_from_dict = OtherATMServicesInner.from_dict(other_atm_services_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


