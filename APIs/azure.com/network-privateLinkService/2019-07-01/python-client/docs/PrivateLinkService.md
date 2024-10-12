# PrivateLinkService

Private link service resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated. | [optional] 
**properties** | [**PrivateLinkServiceProperties**](PrivateLinkServiceProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] 
**location** | **str** | Resource location. | [optional] 
**name** | **str** | Resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.private_link_service import PrivateLinkService

# TODO update the JSON string below
json = "{}"
# create an instance of PrivateLinkService from a JSON string
private_link_service_instance = PrivateLinkService.from_json(json)
# print the JSON string representation of the object
print(PrivateLinkService.to_json())

# convert the object into a dict
private_link_service_dict = private_link_service_instance.to_dict()
# create an instance of PrivateLinkService from a dict
private_link_service_from_dict = PrivateLinkService.from_dict(private_link_service_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


