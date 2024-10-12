# Vcenter

Details about a vCenter Server management appliance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fqdn** | **str** | Fully qualified domain name of the appliance. | [optional] 
**internal_ip** | **str** | Internal IP address of the appliance. | [optional] 
**state** | **str** | Output only. The state of the appliance. | [optional] [readonly] 
**version** | **str** | Version of the appliance. | [optional] 

## Example

```python
from openapi_client.models.vcenter import Vcenter

# TODO update the JSON string below
json = "{}"
# create an instance of Vcenter from a JSON string
vcenter_instance = Vcenter.from_json(json)
# print the JSON string representation of the object
print(Vcenter.to_json())

# convert the object into a dict
vcenter_dict = vcenter_instance.to_dict()
# create an instance of Vcenter from a dict
vcenter_from_dict = Vcenter.from_dict(vcenter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


