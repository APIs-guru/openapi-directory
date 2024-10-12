# VirtualIPMapping

Class that represents a VIP mapping

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**in_use** | **bool** | Is VIP mapping in use | [optional] 
**internal_http_port** | **int** | Internal HTTP port | [optional] 
**internal_https_port** | **int** | Internal HTTPS port | [optional] 
**virtual_ip** | **str** | Virtual IP address | [optional] 

## Example

```python
from openapi_client.models.virtual_ip_mapping import VirtualIPMapping

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualIPMapping from a JSON string
virtual_ip_mapping_instance = VirtualIPMapping.from_json(json)
# print the JSON string representation of the object
print(VirtualIPMapping.to_json())

# convert the object into a dict
virtual_ip_mapping_dict = virtual_ip_mapping_instance.to_dict()
# create an instance of VirtualIPMapping from a dict
virtual_ip_mapping_from_dict = VirtualIPMapping.from_dict(virtual_ip_mapping_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


