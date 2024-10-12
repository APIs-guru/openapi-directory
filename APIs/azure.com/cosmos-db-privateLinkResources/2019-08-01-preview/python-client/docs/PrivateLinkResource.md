# PrivateLinkResource

A private link resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**PrivateLinkResourceProperties**](PrivateLinkResourceProperties.md) |  | [optional] 
**id** | **str** | The unique resource identifier of the database account. | [optional] [readonly] 
**name** | **str** | The name of the database account. | [optional] [readonly] 
**type** | **str** | The type of Azure resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.private_link_resource import PrivateLinkResource

# TODO update the JSON string below
json = "{}"
# create an instance of PrivateLinkResource from a JSON string
private_link_resource_instance = PrivateLinkResource.from_json(json)
# print the JSON string representation of the object
print(PrivateLinkResource.to_json())

# convert the object into a dict
private_link_resource_dict = private_link_resource_instance.to_dict()
# create an instance of PrivateLinkResource from a dict
private_link_resource_from_dict = PrivateLinkResource.from_dict(private_link_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


