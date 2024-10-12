# IpGroup

The IpGroups resource information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated. | [optional] [readonly] 
**properties** | [**IpGroupPropertiesFormat**](IpGroupPropertiesFormat.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] 
**location** | **str** | Resource location. | [optional] 
**name** | **str** | Resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.ip_group import IpGroup

# TODO update the JSON string below
json = "{}"
# create an instance of IpGroup from a JSON string
ip_group_instance = IpGroup.from_json(json)
# print the JSON string representation of the object
print(IpGroup.to_json())

# convert the object into a dict
ip_group_dict = ip_group_instance.to_dict()
# create an instance of IpGroup from a dict
ip_group_from_dict = IpGroup.from_dict(ip_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


