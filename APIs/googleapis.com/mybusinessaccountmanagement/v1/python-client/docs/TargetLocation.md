# TargetLocation

Represents a target location for a pending invitation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | The address of the location to which the user is invited. | [optional] 
**location_name** | **str** | The name of the location to which the user is invited. | [optional] 

## Example

```python
from openapi_client.models.target_location import TargetLocation

# TODO update the JSON string below
json = "{}"
# create an instance of TargetLocation from a JSON string
target_location_instance = TargetLocation.from_json(json)
# print the JSON string representation of the object
print(TargetLocation.to_json())

# convert the object into a dict
target_location_dict = target_location_instance.to_dict()
# create an instance of TargetLocation from a dict
target_location_from_dict = TargetLocation.from_dict(target_location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


