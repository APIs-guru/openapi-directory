# ControllersSystemItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**ControllersSystemItemAttributes**](ControllersSystemItemAttributes.md) |  | [optional] 
**id** | **str** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.controllers_system_item import ControllersSystemItem

# TODO update the JSON string below
json = "{}"
# create an instance of ControllersSystemItem from a JSON string
controllers_system_item_instance = ControllersSystemItem.from_json(json)
# print the JSON string representation of the object
print(ControllersSystemItem.to_json())

# convert the object into a dict
controllers_system_item_dict = controllers_system_item_instance.to_dict()
# create an instance of ControllersSystemItem from a dict
controllers_system_item_from_dict = ControllersSystemItem.from_dict(controllers_system_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


