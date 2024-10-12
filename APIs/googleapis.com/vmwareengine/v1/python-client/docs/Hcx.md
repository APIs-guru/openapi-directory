# Hcx

Details about a HCX Cloud Manager appliance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fqdn** | **str** | Fully qualified domain name of the appliance. | [optional] 
**internal_ip** | **str** | Internal IP address of the appliance. | [optional] 
**state** | **str** | Output only. The state of the appliance. | [optional] [readonly] 
**version** | **str** | Version of the appliance. | [optional] 

## Example

```python
from openapi_client.models.hcx import Hcx

# TODO update the JSON string below
json = "{}"
# create an instance of Hcx from a JSON string
hcx_instance = Hcx.from_json(json)
# print the JSON string representation of the object
print(Hcx.to_json())

# convert the object into a dict
hcx_dict = hcx_instance.to_dict()
# create an instance of Hcx from a dict
hcx_from_dict = Hcx.from_dict(hcx_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


