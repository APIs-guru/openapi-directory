# ManagedShortLink

Managed Short Link.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creation_time** | **str** | Creation timestamp of the short link. | [optional] 
**flagged_attribute** | **List[str]** | Attributes that have been flagged about this short url. | [optional] 
**info** | [**DynamicLinkInfo**](DynamicLinkInfo.md) |  | [optional] 
**link** | **str** | Short durable link url, for example, \&quot;https://sample.app.goo.gl/xyz123\&quot;. Required. | [optional] 
**link_name** | **str** | Link name defined by the creator. Required. | [optional] 
**visibility** | **str** | Visibility status of link. | [optional] 

## Example

```python
from openapi_client.models.managed_short_link import ManagedShortLink

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedShortLink from a JSON string
managed_short_link_instance = ManagedShortLink.from_json(json)
# print the JSON string representation of the object
print(ManagedShortLink.to_json())

# convert the object into a dict
managed_short_link_dict = managed_short_link_instance.to_dict()
# create an instance of ManagedShortLink from a dict
managed_short_link_from_dict = ManagedShortLink.from_dict(managed_short_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


