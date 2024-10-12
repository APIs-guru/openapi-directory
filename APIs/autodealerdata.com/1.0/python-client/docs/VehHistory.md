# VehHistory


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dealer_name** | **str** |  | 
**first_seen** | **date** |  | 
**last_seen** | **date** |  | 
**miles** | **int** |  | 
**new** | **bool** |  | 
**price** | **float** |  | 
**state** | **str** |  | 
**zip** | **int** |  | 

## Example

```python
from openapi_client.models.veh_history import VehHistory

# TODO update the JSON string below
json = "{}"
# create an instance of VehHistory from a JSON string
veh_history_instance = VehHistory.from_json(json)
# print the JSON string representation of the object
print(VehHistory.to_json())

# convert the object into a dict
veh_history_dict = veh_history_instance.to_dict()
# create an instance of VehHistory from a dict
veh_history_from_dict = VehHistory.from_dict(veh_history_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


