# SwiftVirtualNetwork

Swift Virtual Network Contract. This is used to enable the new Swift way of doing virtual network integration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | SwiftVirtualNetwork resource specific properties | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**name** | **str** | Resource Name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.swift_virtual_network import SwiftVirtualNetwork

# TODO update the JSON string below
json = "{}"
# create an instance of SwiftVirtualNetwork from a JSON string
swift_virtual_network_instance = SwiftVirtualNetwork.from_json(json)
# print the JSON string representation of the object
print(SwiftVirtualNetwork.to_json())

# convert the object into a dict
swift_virtual_network_dict = swift_virtual_network_instance.to_dict()
# create an instance of SwiftVirtualNetwork from a dict
swift_virtual_network_from_dict = SwiftVirtualNetwork.from_dict(swift_virtual_network_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


