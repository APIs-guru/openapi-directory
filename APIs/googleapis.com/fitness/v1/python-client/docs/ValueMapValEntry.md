# ValueMapValEntry


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** |  | [optional] 
**value** | [**MapValue**](MapValue.md) |  | [optional] 

## Example

```python
from openapi_client.models.value_map_val_entry import ValueMapValEntry

# TODO update the JSON string below
json = "{}"
# create an instance of ValueMapValEntry from a JSON string
value_map_val_entry_instance = ValueMapValEntry.from_json(json)
# print the JSON string representation of the object
print(ValueMapValEntry.to_json())

# convert the object into a dict
value_map_val_entry_dict = value_map_val_entry_instance.to_dict()
# create an instance of ValueMapValEntry from a dict
value_map_val_entry_from_dict = ValueMapValEntry.from_dict(value_map_val_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


