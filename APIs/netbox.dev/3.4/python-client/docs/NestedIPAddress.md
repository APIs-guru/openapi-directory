# NestedIPAddress


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | IPv4 or IPv6 address (with mask) | 
**display** | **str** |  | [optional] [readonly] 
**family** | **int** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.nested_ip_address import NestedIPAddress

# TODO update the JSON string below
json = "{}"
# create an instance of NestedIPAddress from a JSON string
nested_ip_address_instance = NestedIPAddress.from_json(json)
# print the JSON string representation of the object
print(NestedIPAddress.to_json())

# convert the object into a dict
nested_ip_address_dict = nested_ip_address_instance.to_dict()
# create an instance of NestedIPAddress from a dict
nested_ip_address_from_dict = NestedIPAddress.from_dict(nested_ip_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


