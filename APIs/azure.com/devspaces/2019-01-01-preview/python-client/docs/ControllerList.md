# ControllerList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URI that can be used to request the next page for list of Azure Dev Spaces Controllers. | [optional] [readonly] 
**value** | [**List[Controller]**](Controller.md) | List of Azure Dev Spaces Controllers. | [optional] 

## Example

```python
from openapi_client.models.controller_list import ControllerList

# TODO update the JSON string below
json = "{}"
# create an instance of ControllerList from a JSON string
controller_list_instance = ControllerList.from_json(json)
# print the JSON string representation of the object
print(ControllerList.to_json())

# convert the object into a dict
controller_list_dict = controller_list_instance.to_dict()
# create an instance of ControllerList from a dict
controller_list_from_dict = ControllerList.from_dict(controller_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


