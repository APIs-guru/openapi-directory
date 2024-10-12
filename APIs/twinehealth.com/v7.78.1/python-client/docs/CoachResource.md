# CoachResource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**CoachResourceAttributes**](CoachResourceAttributes.md) |  | 
**id** | **str** |  | 
**links** | [**CoachResourceLinks**](CoachResourceLinks.md) |  | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.coach_resource import CoachResource

# TODO update the JSON string below
json = "{}"
# create an instance of CoachResource from a JSON string
coach_resource_instance = CoachResource.from_json(json)
# print the JSON string representation of the object
print(CoachResource.to_json())

# convert the object into a dict
coach_resource_dict = coach_resource_instance.to_dict()
# create an instance of CoachResource from a dict
coach_resource_from_dict = CoachResource.from_dict(coach_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


