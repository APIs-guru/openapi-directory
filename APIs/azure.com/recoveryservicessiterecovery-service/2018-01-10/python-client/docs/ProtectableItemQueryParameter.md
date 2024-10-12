# ProtectableItemQueryParameter

Query parameter to enumerate Protectable items.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**state** | **str** | State of the Protectable item query filter. | [optional] 

## Example

```python
from openapi_client.models.protectable_item_query_parameter import ProtectableItemQueryParameter

# TODO update the JSON string below
json = "{}"
# create an instance of ProtectableItemQueryParameter from a JSON string
protectable_item_query_parameter_instance = ProtectableItemQueryParameter.from_json(json)
# print the JSON string representation of the object
print(ProtectableItemQueryParameter.to_json())

# convert the object into a dict
protectable_item_query_parameter_dict = protectable_item_query_parameter_instance.to_dict()
# create an instance of ProtectableItemQueryParameter from a dict
protectable_item_query_parameter_from_dict = ProtectableItemQueryParameter.from_dict(protectable_item_query_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


