# DiscoverProtectableItemRequestProperties

Discover protectable item properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**friendly_name** | **str** | The friendly name of the physical machine. | [optional] 
**ip_address** | **str** | The IP address of the physical machine to be discovered. | [optional] 
**os_type** | **str** | The OS type on the physical machine. | [optional] 

## Example

```python
from openapi_client.models.discover_protectable_item_request_properties import DiscoverProtectableItemRequestProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DiscoverProtectableItemRequestProperties from a JSON string
discover_protectable_item_request_properties_instance = DiscoverProtectableItemRequestProperties.from_json(json)
# print the JSON string representation of the object
print(DiscoverProtectableItemRequestProperties.to_json())

# convert the object into a dict
discover_protectable_item_request_properties_dict = discover_protectable_item_request_properties_instance.to_dict()
# create an instance of DiscoverProtectableItemRequestProperties from a dict
discover_protectable_item_request_properties_from_dict = DiscoverProtectableItemRequestProperties.from_dict(discover_protectable_item_request_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


