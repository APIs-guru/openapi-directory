# Nsx

Details about a NSX Manager appliance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fqdn** | **str** | Fully qualified domain name of the appliance. | [optional] 
**internal_ip** | **str** | Internal IP address of the appliance. | [optional] 
**state** | **str** | Output only. The state of the appliance. | [optional] [readonly] 
**version** | **str** | Version of the appliance. | [optional] 

## Example

```python
from openapi_client.models.nsx import Nsx

# TODO update the JSON string below
json = "{}"
# create an instance of Nsx from a JSON string
nsx_instance = Nsx.from_json(json)
# print the JSON string representation of the object
print(Nsx.to_json())

# convert the object into a dict
nsx_dict = nsx_instance.to_dict()
# create an instance of Nsx from a dict
nsx_from_dict = Nsx.from_dict(nsx_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


