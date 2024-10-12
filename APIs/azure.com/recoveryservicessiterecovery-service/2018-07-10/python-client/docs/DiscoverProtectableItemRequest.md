# DiscoverProtectableItemRequest

Request to add a physical machine as a protectable item in a container.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**DiscoverProtectableItemRequestProperties**](DiscoverProtectableItemRequestProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.discover_protectable_item_request import DiscoverProtectableItemRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DiscoverProtectableItemRequest from a JSON string
discover_protectable_item_request_instance = DiscoverProtectableItemRequest.from_json(json)
# print the JSON string representation of the object
print(DiscoverProtectableItemRequest.to_json())

# convert the object into a dict
discover_protectable_item_request_dict = discover_protectable_item_request_instance.to_dict()
# create an instance of DiscoverProtectableItemRequest from a dict
discover_protectable_item_request_from_dict = DiscoverProtectableItemRequest.from_dict(discover_protectable_item_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


