# Items

The list of key value properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[Item]**](Item.md) | The value returned by the operation. | [optional] 

## Example

```python
from openapi_client.models.items import Items

# TODO update the JSON string below
json = "{}"
# create an instance of Items from a JSON string
items_instance = Items.from_json(json)
# print the JSON string representation of the object
print(Items.to_json())

# convert the object into a dict
items_dict = items_instance.to_dict()
# create an instance of Items from a dict
items_from_dict = Items.from_dict(items_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


