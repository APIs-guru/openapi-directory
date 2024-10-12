# Accessibility

Physical adaptations made to the property in consideration of varying levels of human physical ability.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mobility_accessible** | **bool** | Mobility accessible. Throughout the property there are physical adaptations to ease the stay of a person in a wheelchair, such as auto-opening doors, wide elevators, wide bathrooms or ramps. | [optional] 
**mobility_accessible_elevator** | **bool** | Mobility accessible elevator. A lift that transports people from one level to another and is built to accommodate a wheelchair-using passenger owing to the width of its doors and placement of call buttons. | [optional] 
**mobility_accessible_elevator_exception** | **str** | Mobility accessible elevator exception. | [optional] 
**mobility_accessible_exception** | **str** | Mobility accessible exception. | [optional] 
**mobility_accessible_parking** | **bool** | Mobility accessible parking. The presence of a marked, designated area of prescribed size in which only registered, labeled vehicles transporting a person with physical challenges may park. | [optional] 
**mobility_accessible_parking_exception** | **str** | Mobility accessible parking exception. | [optional] 
**mobility_accessible_pool** | **bool** | Mobility accessible pool. A swimming pool equipped with a mechanical chair that can be lowered and raised for the purpose of moving physically challenged guests into and out of the pool. May be powered by electricity or water. Also known as pool lift. | [optional] 
**mobility_accessible_pool_exception** | **str** | Mobility accessible pool exception. | [optional] 

## Example

```python
from openapi_client.models.accessibility import Accessibility

# TODO update the JSON string below
json = "{}"
# create an instance of Accessibility from a JSON string
accessibility_instance = Accessibility.from_json(json)
# print the JSON string representation of the object
print(Accessibility.to_json())

# convert the object into a dict
accessibility_dict = accessibility_instance.to_dict()
# create an instance of Accessibility from a dict
accessibility_from_dict = Accessibility.from_dict(accessibility_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


