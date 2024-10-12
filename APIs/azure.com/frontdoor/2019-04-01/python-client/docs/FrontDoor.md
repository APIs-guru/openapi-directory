# FrontDoor

Front Door represents a collection of backend endpoints to route traffic to along with rules that specify how traffic is sent there.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**FrontDoorProperties**](FrontDoorProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**location** | **str** | Resource location. | [optional] 
**name** | **str** | Resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.front_door import FrontDoor

# TODO update the JSON string below
json = "{}"
# create an instance of FrontDoor from a JSON string
front_door_instance = FrontDoor.from_json(json)
# print the JSON string representation of the object
print(FrontDoor.to_json())

# convert the object into a dict
front_door_dict = front_door_instance.to_dict()
# create an instance of FrontDoor from a dict
front_door_from_dict = FrontDoor.from_dict(front_door_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


