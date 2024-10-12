# UniqueDevicesItemsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_site** | **str** |  | [optional] 
**devices** | **int** |  | [optional] 
**granularity** | **str** |  | [optional] 
**project** | **str** |  | [optional] 
**timestamp** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.unique_devices_items_inner import UniqueDevicesItemsInner

# TODO update the JSON string below
json = "{}"
# create an instance of UniqueDevicesItemsInner from a JSON string
unique_devices_items_inner_instance = UniqueDevicesItemsInner.from_json(json)
# print the JSON string representation of the object
print(UniqueDevicesItemsInner.to_json())

# convert the object into a dict
unique_devices_items_inner_dict = unique_devices_items_inner_instance.to_dict()
# create an instance of UniqueDevicesItemsInner from a dict
unique_devices_items_inner_from_dict = UniqueDevicesItemsInner.from_dict(unique_devices_items_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


