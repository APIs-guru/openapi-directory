# ItemsChannelInstance


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[ChannelInstance]**](ChannelInstance.md) |  | [optional] 
**links** | [**PaginationLinks**](PaginationLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.items_channel_instance import ItemsChannelInstance

# TODO update the JSON string below
json = "{}"
# create an instance of ItemsChannelInstance from a JSON string
items_channel_instance_instance = ItemsChannelInstance.from_json(json)
# print the JSON string representation of the object
print(ItemsChannelInstance.to_json())

# convert the object into a dict
items_channel_instance_dict = items_channel_instance_instance.to_dict()
# create an instance of ItemsChannelInstance from a dict
items_channel_instance_from_dict = ItemsChannelInstance.from_dict(items_channel_instance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


