# DcAccessSecurityCode

Dc Access Security code for device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**forward_dc_access_code** | **str** | Dc Access Code for dispatching from DC. | [optional] 
**reverse_dc_access_code** | **str** | Dc Access code for dropping off at DC. | [optional] 

## Example

```python
from openapi_client.models.dc_access_security_code import DcAccessSecurityCode

# TODO update the JSON string below
json = "{}"
# create an instance of DcAccessSecurityCode from a JSON string
dc_access_security_code_instance = DcAccessSecurityCode.from_json(json)
# print the JSON string representation of the object
print(DcAccessSecurityCode.to_json())

# convert the object into a dict
dc_access_security_code_dict = dc_access_security_code_instance.to_dict()
# create an instance of DcAccessSecurityCode from a dict
dc_access_security_code_from_dict = DcAccessSecurityCode.from_dict(dc_access_security_code_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


