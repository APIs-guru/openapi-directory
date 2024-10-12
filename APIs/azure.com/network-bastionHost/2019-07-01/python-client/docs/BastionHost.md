# BastionHost

Bastion Host resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated. | [optional] [readonly] 
**properties** | [**BastionHostPropertiesFormat**](BastionHostPropertiesFormat.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] 
**location** | **str** | Resource location. | [optional] 
**name** | **str** | Resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.bastion_host import BastionHost

# TODO update the JSON string below
json = "{}"
# create an instance of BastionHost from a JSON string
bastion_host_instance = BastionHost.from_json(json)
# print the JSON string representation of the object
print(BastionHost.to_json())

# convert the object into a dict
bastion_host_dict = bastion_host_instance.to_dict()
# create an instance of BastionHost from a dict
bastion_host_from_dict = BastionHost.from_dict(bastion_host_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


