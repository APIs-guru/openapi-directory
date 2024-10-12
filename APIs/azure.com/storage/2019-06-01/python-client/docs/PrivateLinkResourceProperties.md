# PrivateLinkResourceProperties

Properties of a private link resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**group_id** | **str** | The private link resource group id. | [optional] [readonly] 
**required_members** | **List[str]** | The private link resource required member names. | [optional] [readonly] 
**required_zone_names** | **List[str]** | The private link resource Private link DNS zone name. | [optional] 

## Example

```python
from openapi_client.models.private_link_resource_properties import PrivateLinkResourceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of PrivateLinkResourceProperties from a JSON string
private_link_resource_properties_instance = PrivateLinkResourceProperties.from_json(json)
# print the JSON string representation of the object
print(PrivateLinkResourceProperties.to_json())

# convert the object into a dict
private_link_resource_properties_dict = private_link_resource_properties_instance.to_dict()
# create an instance of PrivateLinkResourceProperties from a dict
private_link_resource_properties_from_dict = PrivateLinkResourceProperties.from_dict(private_link_resource_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


