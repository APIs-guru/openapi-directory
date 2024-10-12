# Capacity

The capacity of a product. For more information, see https://support.google.com/manufacturers/answer/6124116#capacity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**unit** | **str** | The unit of the capacity, i.e., MB, GB, or TB. | [optional] 
**value** | **str** | The numeric value of the capacity. | [optional] 

## Example

```python
from openapi_client.models.capacity import Capacity

# TODO update the JSON string below
json = "{}"
# create an instance of Capacity from a JSON string
capacity_instance = Capacity.from_json(json)
# print the JSON string representation of the object
print(Capacity.to_json())

# convert the object into a dict
capacity_dict = capacity_instance.to_dict()
# create an instance of Capacity from a dict
capacity_from_dict = Capacity.from_dict(capacity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


