# Visibility

The group or role to which this item is visible.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identifier** | **str** | The ID of the group or the name of the role that visibility of this item is restricted to. | [optional] 
**type** | **str** | Whether visibility of this item is restricted to a group or role. | [optional] 
**value** | **str** | The name of the group or role that visibility of this item is restricted to. Please note that the name of a group is mutable, to reliably identify a group use &#x60;identifier&#x60;. | [optional] 

## Example

```python
from openapi_client.models.visibility import Visibility

# TODO update the JSON string below
json = "{}"
# create an instance of Visibility from a JSON string
visibility_instance = Visibility.from_json(json)
# print the JSON string representation of the object
print(Visibility.to_json())

# convert the object into a dict
visibility_dict = visibility_instance.to_dict()
# create an instance of Visibility from a dict
visibility_from_dict = Visibility.from_dict(visibility_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


