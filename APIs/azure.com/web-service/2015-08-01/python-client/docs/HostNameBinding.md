# HostNameBinding

A host name binding object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** |  | [optional] 
**id** | **str** | Resource Id | [optional] 
**kind** | **str** | Kind of resource | [optional] 
**location** | **str** | Resource Location | 
**name** | **str** | Resource Name | [optional] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] 

## Example

```python
from openapi_client.models.host_name_binding import HostNameBinding

# TODO update the JSON string below
json = "{}"
# create an instance of HostNameBinding from a JSON string
host_name_binding_instance = HostNameBinding.from_json(json)
# print the JSON string representation of the object
print(HostNameBinding.to_json())

# convert the object into a dict
host_name_binding_dict = host_name_binding_instance.to_dict()
# create an instance of HostNameBinding from a dict
host_name_binding_from_dict = HostNameBinding.from_dict(host_name_binding_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


